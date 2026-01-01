const questionText = document.getElementById("question-text");
const buttonsContainer = document.getElementById("buttons-container");
const finalMessage = document.getElementById("final-message");
const mainImage = document.getElementById("mainImage");

/* الصور */
const stepImages = {
    '1': "images/img1.jpg",
    '2': "images/2.jpg",
    '2_1': "images/4.jpg",
    '3': "images/3.jpg",
    'end_wait': "images/sad.jpg",
    'end_surprise': "images/sad.jpg",
    'end_love': "images/love.jpg"
};

/* الأسئلة */
const questions = {
    '1': {
        text: "هاي حبوبي! عندي مفاجأة صغيرة ليوم ميلادك، حابة تشوفيها؟",
        buttons: [
            { text: "يلا", next: '2' },
            { text: "لا", next: 'end_wait' }
        ]
    },

    '2': {
        text: "مجهزلك مفاجأة حلوة جداً، بدك تشوفيها هسا؟",
        buttons: [
            { text: "اه", next: '3' },
            { text: "لا لا", next: '2_1' }
        ]
    },

    '2_1': {
        text: "ليه ما بدك تشوفيها؟",
        buttons: [
            { text: "يلا حبيبي", next: '3' }
        ]
    },

    '3': {
        text: "اختاري يحلو 💗",
        buttons: [
            { text: "تشوف اشي حلو زيك؟", next: 'end_love' },
            { text: "كلام مني", next: 'end_surprise' }
        ]
    },

    'end_wait': {
        text: "اعملي رفرش للصفحة 💕",
        buttons: []
    },

    /* 🎬 الفيديو */
    'end_love': {
        text: `
        <div class="video-container">
            <video controls autoplay muted playsinline preload="auto">
                <source src="vid.mp4" type="video/mp4">
                متصفحك لا يدعم تشغيل الفيديو
            </video>
        </div>
        `,
        buttons: []
    },

    /* 💌 الرسالة */
    'end_surprise': {
        text: `
        <div class="love-text">
        
اليوم مُختلف لأنك ولدت فيو يروحي سنه جديده وعُمر جديد 
افضل رجل فالدنيا كُل عام وانتَ لحياتي حياه انت البدايه ومسك الختام مميز مثل دعوه ام فنص الضيق يا ريت لو بقدر اعبرلك عن حُبي كُل عام وقلبك فامان وما بيمسه اي شر كل عام والسعاده ما تفارقك .
سنه صعبه اه بس انت كُنت قدها شو مفكر حسيبك لحالك يا ابن اياد لا هيه كانت فتره راحه لألك مع انه انا ما كُنت مقتنعه فيها بتمنى انك تكون مرتاح معي.
حمسك ايدك فكُل اعوامك الجايه .
وححتضنك واحميك .
 💗<br>
 <br>
        
يا جعل عُمرك بجنبي كُل الأعوام.
ويا جعل عيد ميلادك يُمر الف عام.
بتكبر سنه وانت فعُمري وهيك عم تكبر معي يا حظي فيك ويا حظ قلبي الي حبك محاولاتك المُستمره بتعنيلي كثير
كل عُمرك الي فات حتشطب عليه وحتبلش بدايه جديده معي .<br>
        مميز مثل دعوة أم بنص الضيق.<br><br>
        سنة صعبة بس كنت قدّها، وأنا معك بكل خطوة.<br>
مهما حصل بينا رح احاول اصلح كُلشي بدون قراراتك الخرائيه.
بحبك يا عُمر عُمري.
HAPPY BIRTHDAY YA ROOHI.
سنينك كثار فأحضاني .</strong><br>
        سنينك كثار بأحضاني 💞
        </div>
        `,
        buttons: []
    }
};

/* تغيير الصورة */
function changeImage(step) {
    if (stepImages[step]) {
        mainImage.src = stepImages[step];
    }
}

/* عرض الخطوات */
function renderStep(step = '1') {
    const data = questions[step];
    changeImage(step);

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
        button.textContent = btn.text;
        button.onclick = () => renderStep(btn.next);
        buttonsContainer.appendChild(button);
    });
}

/* تشغيل أولي */
window.onload = () => renderStep();

/* 💗 القلوب */
setInterval(() => {
    const size = Math.random() * 30 + 10;
    const left = Math.random() * 100;
    const color = 150 + Math.random() * 100;
    const time = 5 + Math.random() * 5;

    document.querySelector(".bg_heart").insertAdjacentHTML("beforeend", `
        <div class="floating-heart" style="
            width:${size}px;
            height:${size}px;
            left:${left}%;
            background:rgba(255,${color - 50},${color},.8);
            animation:love ${time}s linear;">
        </div>
    `);
}, 400);
