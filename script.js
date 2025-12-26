const questionText = document.getElementById("question-text");
const buttonsContainer = document.getElementById("buttons-container");
const finalMessage = document.getElementById("final-message");
const mainImage = document.getElementById("mainImage");

const stepImages = {
    '1': "؟.jpg",
    '2': "1.jpg",
    '2_1': "4.jpg",
    '3': "3.jpg",
    'end_wait': "زعلان.jpg",

    'end_surprise': "زعلان.jpg",
};

const questions = {
    '1': {
        text: "مرحبا يا امي الغالية! عندي مفاجأة صغيره ليوم ميلادك، حابه تشوفيها؟",
        buttons: [
            { text: "يلا", next: '2' },
            { text: "لا", next: 'end_wait' }
        ]
    },
    '2': {
        text: "انا مجهزلك مفاجأة حلوة كتير، بدك تشوفيها هلأ؟",
        buttons: [
            { text: "اه", next: '3' },
            { text: "لا لا", next: '2_1' }
        ]
    },
    '2_1': {
        text: "ليش ما بدك تشوفيها؟",
        buttons: [
            { text: "يلا يا الغالية", next: '3' }
        ]
    },
    '3': {
        text: "اختاري:",
        buttons: [
            { text: "تسمعي كلام حلو؟", next: 'end_love' },
            { text: "كلام مني", next: 'end_surprise' }
        ]
    },
    'end_wait': {
        text: "اعملي رفرش للصفحة 💗",
        buttons: []
    },
    'end_love': {
        text: `
        <div class="video-container">
            <video controls autoplay>
                <source src="فيديو.mp4" type="video/mp4">
                متصفحك لا يدعم الفيديو
            </video>
        </div>`,
        buttons: []
    },
    'end_surprise': {
        text: "أمي أماني 🤍🎂 في يوم ميلادك ما بحتفل بتاريخ بس بوجودك بحياتي 🌸 بحتفل بالقلب اللي دايمًا حضني قبل ما أطلب وبالدعوة اللي كانت تسبق كل خطوة بحياتي ✨ إنتِ مو بس أم إنتِ الأمان والراحة والوطن 💞 وكل تعب مرّيتي فيه كان سبب إني أكون أقوى اليوم الله يخليكي إلي وما يحرمني منك 🕊️ ويطوّل بعمرك ويجعل أيامك كلها فرح وطمأنينة 🌷 بحبك حب كبير وعميق أكبر من الكلام 🥹❤️",
        buttons: []
    }
};

function changeImage(step) {
    if (stepImages[step]) mainImage.src = stepImages[step];
}

function renderStep(step = '1') {
    changeImage(step);
    const data = questions[step];

    if (step.startsWith("end")) {
        questionText.classList.add("hidden");
        buttonsContainer.classList.add("hidden");
        finalMessage.classList.remove("hidden");
        finalMessage.innerHTML = data.text;
        return;
    }

    questionText.classList.remove("hidden");
    buttonsContainer.classList.remove("hidden");
    finalMessage.classList.add("hidden");

    questionText.innerHTML = data.text;
    buttonsContainer.innerHTML = "";

    data.buttons.forEach(btn => {
        const el = document.createElement("button");
        el.className = "action-button";
        el.innerText = btn.text;
        el.onclick = () => renderStep(btn.next);
        buttonsContainer.appendChild(el);
    });
}

window.onload = () => renderStep();

/* قلوب */
setInterval(() => {
    const size = Math.random() * 40 + 10;
    const left = Math.random() * 100;
    const color = 150 + Math.random() * 100;
    const time = 5 + Math.random() * 5;

    $(".bg_heart").append(`
        <div class="floating-heart"
            style="width:${size}px;height:${size}px;left:${left}%;
            background:rgba(255,${color-50},${color},.8);
            animation:love ${time}s linear;">
        </div>
    `);
}, 400);