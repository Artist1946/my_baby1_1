const questionText = document.getElementById("question-text");
const buttonsContainer = document.getElementById("buttons-container");
const finalMessage = document.getElementById("final-message");
const mainImage = document.getElementById("mainImage");

const stepImages = {
    '1': "1.jpg",
    '2': "1.jpg",
    '2_1': "2.jpg",
    '3': "3.jpg",
    'end_wait': "زعلان.jpg",
    'end_surprise': "images/sad.jpg",
    'end_love': "زعلان.jpg"
};

const questions = {
    '1': {
        text: "هاي حبوبي! عندي مفاجأة صغيرة ليوم ميلادك، حابة تشوفها؟",
        buttons: [
            { text: "يلا", next: '2' },
            { text: "لا", next: 'end_wait' }
        ]
    },
    '2': {
        text: "مجهزالك مفاجأة حلوة جدًا، بدك تشوفيها هسا؟",
        buttons: [
            { text: "آه", next: '3' },
            { text: "لا لا", next: '2_1' }
        ]
    },
    '2_1': {
        text: "ليه ما بدك تشوفها؟",
        buttons: [
            { text: "يلا حبيبي", next: '3' }
        ]
    },
    '3': {
        text: "اختار يحلو:",
        buttons: [
            { text: "تسمع كلام حلو؟", next: 'end_love' },
            { text: "كلام مني", next: 'end_surprise' }
        ]
    },
    'end_wait': {
        text: "اعمل رفرش للصفحة 💗",
        buttons: []
    },
    'end_love': {
        text: `
        <div class="video-container">
            <video controls autoplay muted>
                <source src="vid.mp4" type="video/mp4">
            </video>
        </div>`,
        buttons: []
    },
    'end_surprise': {
        text: "💗 HAPPY BIRTHDAY YA ROOHI 💗<br><br>كل عام وانت بخير يا عمري...",
        buttons: []
    }
};

function changeImage(step) {
    if (stepImages[step]) {
        mainImage.src = stepImages[step];
    }
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
        const button = document.createElement("button");
        button.className = "action-button";
        button.innerText = btn.text;
        button.onclick = () => renderStep(btn.next);
        buttonsContainer.appendChild(button);
    });
}

window.onload = () => renderStep();

/* قلوب */
setInterval(() => {
    const size = Math.random() * 30 + 10;
    const left = Math.random() * 100;
    const color = 150 + Math.random() * 100;
    const time = 5 + Math.random() * 5;

    document.querySelector(".bg_heart").insertAdjacentHTML("beforeend", `
        <div class="floating-heart"
        style="
            width:${size}px;
            height:${size}px;
            left:${left}%;
            background:rgba(255,${color-50},${color},.8);
            animation:love ${time}s linear;">
        </div>
    `);
}, 400);



