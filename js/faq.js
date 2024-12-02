const answers = [
    document.getElementById("faq-answer-1"),
    document.getElementById("faq-answer-2"),
    document.getElementById("faq-answer-3"),
    document.getElementById("faq-answer-4"),
    document.getElementById("faq-answer-5")
];
const questions = [
    document.getElementById("faq-question-1"),
    document.getElementById("faq-question-2"),
    document.getElementById("faq-question-3"),
    document.getElementById("faq-question-4"),
    document.getElementById("faq-question-5")
];
const arrows = [
    document.getElementById("faq-question-1-arrow"),
    document.getElementById("faq-question-2-arrow"),
    document.getElementById("faq-question-3-arrow"),
    document.getElementById("faq-question-4-arrow"),
    document.getElementById("faq-question-5-arrow")
];

let openedIndex = null; 

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", () => {
        if (openedIndex !== null && openedIndex !== i) {
            gsap.to(answers[openedIndex], {
                maxHeight: "0px",
                duration: 0.3,
                ease: "none",
                onComplete: () => {
                    gsap.to(answers[i], { maxHeight: "500px", duration: 0.3, ease: "none" });
                    gsap.to(arrows[i], { rotate: 90, transformOrigin: "50% 50%", duration: 0.3, ease: "none" });
                    openedIndex = i;
                }
            });
            gsap.to(arrows[openedIndex], { rotate: 0, transformOrigin: "50% 50%", duration: 0.3, ease: "none" });
        } else if (openedIndex === i) {
            gsap.to(answers[i], { maxHeight: "0px", duration: 0.3, ease: "none" });
            gsap.to(arrows[i], { rotate: 0, transformOrigin: "50% 50%", duration: 0.3, ease: "none" });
            openedIndex = null;
        } else {
            gsap.to(answers[i], { maxHeight: "500px", duration: 0.3, ease: "none" });
            gsap.to(arrows[i], { rotate: 90, transformOrigin: "50% 50%", duration: 0.3, ease: "none" });
            openedIndex = i;
        }
    });
}