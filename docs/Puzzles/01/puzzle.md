---
icon: lucide/chess-knight
---

# 非马

![img](./img/puzzle.png)

订正，第一行应为 （8 5）

*本题有 13 个里程碑*

<input id="answer" placeholder="Enter your answer" />
<button onclick="checkAnswer()">Submit</button>

<p id="result"></p>

<script>
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
document.addEventListener("DOMContentLoaded", function () {
    bindAnswerBox(config);
});
</script>