# 非马

![img](./img/puzzle.png)

订正，第一行应为 （8 5）

<input id="answer" placeholder="Enter your answer" />
<button onclick="checkAnswer()">Submit</button>

<p id="result"></p>

<script>
let resultTimer = null;

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

const config = {
  "meta": { "version": 1 },
  "rules": [
    { "type": "correct", "texts": ["J`QR]NQX[\\N"] },
    { "type": "close", "texts": ["J`QR]N"] },
    { "type": "milestone", "texts": [
        "]QX^\\JWMVRUN\\",
        "\\TNUN]XW",
        "`XXM",
        "QXWNbLXVK",
        "[R_N[",
        "]RPN["
    ]},
    { "type": "mini", "texts": [
        "卭釶骖",
        "髡髯骖",
        "杒骖",
        "骖蜬竇",
        "泝骖",
        "骖虸"
    ]}
  ]
};

const verify = createVerifier(config);

// ====== UI 逻辑 ======
function checkAnswer() {
    const input = document.getElementById("answer").value;
    const res = verify(input);
    const el = document.getElementById("result");

    if (resultTimer) {
        clearTimeout(resultTimer);
    }

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

document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("answer");

    if (input) {
        input.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                checkAnswer();
            }
        });
    }
});
</script>