// ===== 工具 =====
function normalize(input) {
    return String(input)
        .toLowerCase()
        .replace(/\s+/g, "");
}

function encrypt(input) {
    input = normalize(input);
    let result = "";

    for (let i = 0; i < input.length; i++) {
        let code = input.charCodeAt(i);

        if (code >= 0x4E00 && code <= 0x9FFF) {
            result += String.fromCharCode(code + 42);
        } else if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 23);
        }
    }

    return result;
}

// ===== 核心引擎 =====
function buildIndex(config) {
    const index = new Map();

    for (const rule of config.rules) {
        for (const text of rule.texts) {
            index.set(text, rule.type);
        }
    }

    return index;
}

function createVerifier(config) {
    const index = buildIndex(config);

    return function verify(input) {
        const enc = encrypt(input);

        if (!index.has(enc)) {
            return { status: "wronganswer" };
        }

        return { status: index.get(enc) };
    };
}

// 挂到全局
window.createVerifier = createVerifier;

// ===== UI 通用函数 =====
window.bindAnswerBox = function (config) {
    const verify = createVerifier(config);
    const input = document.getElementById("answer");
    const el = document.getElementById("result");

    let resultTimer = null;

    function checkAnswer() {
        const res = verify(input.value);

        if (resultTimer) clearTimeout(resultTimer);

        switch (res.status) {
            case "correct":
                el.innerText = "✅ Correct!";
                break;
            case "milestone":
                el.innerText = "🎯 Milestone!";
                break;
            case "mini":
                el.innerText = "🧩 Mini found!";
                break;
            case "close":
                el.innerText = "🤏 Close...";
                break;
            default:
                el.innerText = "❌ Wrong answer";
        }

        resultTimer = setTimeout(() => {
            el.innerText = "";
        }, 2000);
    }

    // 绑定按钮
    window.checkAnswer = checkAnswer;

    // 绑定回车
    if (input) {
        input.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                checkAnswer();
            }
        });
    }
};