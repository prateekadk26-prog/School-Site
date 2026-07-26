const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq=>{
    const question = faq.querySelector(".faq-question");
    question.addEventListener("click", ()=>{
    faqs.forEach(item =>{
        if(item!= faq){
            item.classList.remove('active');
            item.querySelector(".faq-answer").style.maxHeight = null;
        }
    });

faq.classList.toggle("active");
const answer = faq.querySelector(".faq-answer");
if(faq.classList.contains("active")){
    answer.style.maxHeight = answer.scrollHeight+ "px";
}
else{
    answer.style.maxHeight = null;
}
    });
});

const menuBtn = document.querySelector(".menu-toggle");
const navlinks = document.querySelector(".info");
const hero = document.querySelector(".home_page");

menuBtn.addEventListener("click" , ()=>{
    navlinks.classList.toggle("active");
    hero.classList.toggle("menu-open");
})