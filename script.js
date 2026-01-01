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
        text: "هاي حبوبي ! عندي مفاجأة صغيره ليوم ميلادك، حابه تشوفها؟",
        buttons: [
            { text: "يلا", next: '2' },
            { text: "لا", next: 'end_wait' }
        ]
    },
    '2': {
        text: "انا مجهزلك مفاجأة حلوة جداً، بدك تشوفيها هسا!؟",
        buttons: [
            { text: "اه", next: '3' },
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
            { text: "تسمع كلام حلو زيك؟", next: 'end_love' },
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
            <video controls autoplay>
                <source src="فيديو.mp4" type="video/mp4">
                متصفحك لا يدعم الفيديو
            </video>
        </div>`,
        buttons: []
    },
    'end_surprise': {
        text: "اليوم مُختلف لأنك ولدت فيو يروحي سنه جديده وعُمر جديد 
افضل رجل فالدنيا كُل عام وانتَ لحياتي حياه انت البدايه ومسك الختام مميز مثل دعوه ام فنص الضيق يا ريت لو بقدر اعبرلك عن حُبي كُل عام وقلبك فامان وما بيمسه اي شر كل عام والسعاده ما تفارقك .
يا جعل عُمرك بجنبي كُل الأعوام.
ويا جعل عيد ميلادك يُمر الف عام.
بتكبر سنه وانت فعُمري وهيك عم تكبر معي يا حظي فيك ويا حظ قلبي الي حبك محاولاتك المُستمره بتعنيلي كثير
كل عُمرك الي فات حتشطب عليه وحتبلش بدايه جديده معي .
سنه صعبه اه بس انت كُنت قدها شو مفكر حسيبك لحالك يا ابن اياد لا هيه كانت فتره راحه لألك مع انه انا ما كُنت مقتنعه فيها بتمنى انك تكون مرتاح معي.
حمسك ايدك فكُل اعوامك الجايه .
وححتضنك واحميك .
مهما حصل بينا رح احاول اصلح كُلشي بدون قراراتك الخرائيه.
بحبك يا عُمر عُمري.
HAPPY BIRTHDAY YA ROOHI.
سنينك كثار فأحضاني .
",
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
