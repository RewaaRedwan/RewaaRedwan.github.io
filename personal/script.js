let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("title");
let about = document.getElementById("about");
let forme = document.getElementById("forme");
let web =document.getElementById("web");
let gf =document.getElementById("gf");
let ex =document.getElementById("ex");
let ex1 =document.getElementById("ex1");
let skills =document.getElementById("skills");
let skill_p =document.getElementById("skill_p");
let skill_p1 =document.getElementById("skill_p1");
let skill_sp =document.getElementById("skill_sp");
let cer =document.getElementById("cer");
let html =document.getElementById("html");
let css =document.getElementById("css");
let boot =document.getElementById("boot");
let iot =document.getElementById("iot");
let js =document.getElementById("js");
let contact =document.getElementById("contact");

arabic.onclick =()=>{
setlanguage("arabic");
localStorage.setItem("lang" , "arabic");
};

english.onclick =()=>{
    setlanguage("english");
    localStorage.setItem("lang" , "english");
};



function setlanguage(getlanguage){
if(getlanguage=== "arabic"){
title.innerHTML ="رواء رضوان  💎";
about.innerHTML ="عني" ;
forme.innerHTML = " طالبة في جامعة القدس المفتوحة تخصص انظمة معلومات حاسوبية المستوى الرابع ومهتمة بتصميم وبرمجة مواقع الويب  " ;
web.innerHTML ="تصميم ويب ";
gf.innerHTML ="تصميم جرافيكي";
ex.innerHTML =" خبرة في هذا المجال سنة   " ;
ex1.innerHTML =" خبرة في هذا المجال سنة   " ;
skills.innerHTML =" مهاراتي" ;
skill_p.innerHTML = " أجيد استخدام برامج التصميم الجرافيكي وأتحمل ضغط العمل" ;
skill_p1.innerHTML ="  وحاصلة على عدة شهادات في مجال تصميم وبرمجة مواقع الويب " ;
skill_sp.innerHTML =" واجيد العمل بروح الفريق ومرنة بالتعامل   ";
cer.innerHTML ="شهاداتي العلمية  📖";
html.innerHTML ="  شهادة HTML معتمدة من قبل منصة تعليمية متميزة ";
css.innerHTML ="شهادة CSS معتمدة من قبل منصة تعليمية متميزة" ;
boot.innerHTML =" شهادة Bootstrap معتمدة من قبل منصة تعليمية متميزة.";
iot.innerHTML ="شهادة IOT معتمدة من قبل منصة تعليمية متميزة.";
contact.innerHTML =" تواصل معي";
js.innerHTML ="شهادة Java Script  معتمدة من قبل منصة تعليمية متميزة" ;
} 
else if(getlanguage=== "english"){
title.innerHTML ="Rewaa Redwan  💎";
about.innerHTML ="ABOUT ME" ;
forme.innerHTML = "A student at Al-Quds Open University majoring in computer information systems, level four, and interested in designing and programming websites";
web.innerHTML ="Web Design";
gf.innerHTML =" Graphic Design" ;
ex.innerHTML = " One year experience in this field .";
ex1.innerHTML = " One year experience in this field .";
skills.innerHTML =" My Skills" ;
skill_p.innerHTML =" I am good at using graphic design programs, I can handle work pressure" ;
skill_p1.innerHTML =" I hold several certificates in the field of web design and programming ." ;
skill_sp.innerHTML =" and patience, and I am good at working in a team spirit and flexible in dealing  " ;
cer.innerHTML ="My Academic Certificates  📖" ;
html.innerHTML =" HTML certificate approved by a distinguished educational platform ." ;
css.innerHTML ="CSS certificate approved by a distinguished educational platform ." ;
boot.innerHTML ="Bootstrap certificate approved by a distinguished educational platform .";
iot.innerHTML ="IOT certificate approved by a distinguished educational platform .";
contact.innerHTML ="Contact Me";
js.innerHTML ="Java Script certificate approved by a distinguished educational platform . ";
}
}

