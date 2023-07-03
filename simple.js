"use strict";

function changimg1() {
  document.getElementById("changeimg1").style.backgroundColor = "#fb5200";
  document.getElementById("changeimg0").style.backgroundColor = "white";
  document.getElementById("changeimg2").style.backgroundColor = "white";
  document.getElementsByTagName("h1")[1].innerHTML =
    "Our Web Devlopment Service";
  document.getElementsByTagName("p")[0].innerHTML =
    "Hello There, If you want to Create an dynamic Website, You can Contract with us. We have Web Designer, Web Devloper, and  Javascript Programer. And also we have Backend Devloper, MYSQL, MongoDB Devloper.";
  document.getElementsByTagName("button")[1].innerHTML = "Veiw On GitHub";
  document.getElementById("faxs").classList.add("removeicon");
  document.getElementById("svgimg").src = "file-code.svg";
  document.getElementById("svgimg").classList.remove("removeimg");
  document.getElementsByTagName("img")[0].src = "8.jpg";
}
function changimg2() {
  document.getElementById("changeimg2").style.backgroundColor = "#fb5200";
  document.getElementById("changeimg0").style.backgroundColor = "white";
  document.getElementById("changeimg1").style.backgroundColor = "white";
  document.getElementsByTagName("h1")[1].innerHTML =
    "JavaScript - Node.js - MongoDB";
  document.getElementsByTagName("p")[0].innerHTML =
    "Ofss,Hade you Problem in programing.If you Don`t know how to Write Code,Don`t worry We are here! for you.We have maltiple languese programer.So tell us What you want to Build. ";
  document.getElementsByTagName("button")[1].innerHTML = "Veiw On GithuB";
  document.getElementById("faxs").classList.add("removeicon");
  document.getElementById("svgimg").src = "code.svg";
  document.getElementById("svgimg").classList.remove("removeimg");
  document.getElementsByTagName("img")[0].src = "10.jpg";
}

function changimg0() {
  document.getElementById("changeimg0").style.backgroundColor = "#fb5200";
  document.getElementById("changeimg1").style.backgroundColor = "white";
  document.getElementById("changeimg2").style.backgroundColor = "white";
  document.getElementsByTagName("h1")[1].innerHTML = "Our SEO Service";
  document.getElementsByTagName("p")[0].innerHTML =
    "!!!----Worlds best SEO Service is here----!!!.We have compleate  One Thowsent SEO project.Our SEO basic Service provide 1000 Back-links.And Compleate On Page SEO, Off-Page SEO.";
  document.getElementsByTagName("button")[1].innerHTML = "Veiw On Youtube";
  document.getElementById("svgimg").classList.add("removeimg");
  document.getElementById("faxs").classList.remove("removeicon");
  document.getElementsByTagName("img")[0].src = "3.jpg";
}

var show = document.getElementById("showdropdown");
show.addEventListener("click", function () {
  document.getElementById("fristcontn").classList.toggle("applyopacity");
  document.getElementById("servicetooltrip").classList.toggle("showsomething");
  document.getElementById("servicetooltrip").classList.toggle("fun2");
  document.getElementById("servicetooltrip1").classList.add("removeimg");
});

var show1 = document.getElementById("showdropdown1");
show1.addEventListener("click", function () {
  document.getElementById("fristcontn").classList.toggle("applyopacity");
  document.getElementById("servicetooltrip1").classList.toggle("showsomething");
  document.getElementById("servicetooltrip1").classList.toggle("fun3");
  document.getElementById("servicetooltrip").classList.add("vanish");
});
//////////////////////////////////////////////////////

function prizechang1() {
  document.querySelectorAll("p")[1].innerHTML =
    "This is Basic pack Service Plan.";
  document.querySelectorAll("li")[19].innerHTML = "Lorem basar dolor sit amet.";
  document.querySelectorAll("li")[20].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[21].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[22].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[23].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("h2")[0].innerHTML = "100 /<b>$</b>";
  document.querySelectorAll("p")[2].innerHTML =
    "This is Basic pack Service Plan.";
  document.querySelectorAll("li")[29].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[30].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[31].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[32].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[33].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("h2")[1].innerHTML = "100 /<b>$</b>";
  document.querySelectorAll("p")[3].innerHTML =
    "This is Basic pack Service Plan.";
  document.querySelectorAll("li")[39].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[40].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[41].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[42].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[43].innerHTML = "Lorem rakib dolor sit amet.";
  document.querySelectorAll("h2")[2].innerHTML = "100 /<b>$</b>";
}
function prizechang2() {
  document.querySelectorAll("p")[1].innerHTML =
    "This is Standerd pack Service Plan.";
  document.querySelectorAll("li")[19].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[20].innerHTML = "Lorem basar dolor sit amet.";
  document.querySelectorAll("li")[21].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[22].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[23].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("h2")[0].innerHTML = "500 /<b>$</b>";
  document.querySelectorAll("p")[2].innerHTML =
    "This is Standerd pack Service Plan.";
  document.querySelectorAll("li")[29].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[30].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[31].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[32].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[33].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("h2")[1].innerHTML = "500 /<b>$</b>";
  document.querySelectorAll("p")[3].innerHTML =
    "This is Standerd pack Service Plan.";
  document.querySelectorAll("li")[39].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[40].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[41].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[42].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[43].innerHTML = "Lorem rakib dolor sit amet.";
  document.querySelectorAll("h2")[2].innerHTML = "500 /<b>$</b>";
}
function prizechang3() {
  document.querySelectorAll("p")[1].innerHTML =
    "This is Special pack Service Plan.";
  document.querySelectorAll("li")[19].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[20].innerHTML = "Lorem basar dolor sit amet.";
  document.querySelectorAll("li")[21].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[22].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[23].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("h2")[0].innerHTML = "1200 /<b>$</b>";
  document.querySelectorAll("p")[2].innerHTML =
    "This is Special pack Service Plan.";
  document.querySelectorAll("li")[29].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[30].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[31].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[32].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[33].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("h2")[1].innerHTML = "1200 /<b>$</b>";
  document.querySelectorAll("p")[3].innerHTML =
    "This is Special pack Service Plan.";
  document.querySelectorAll("li")[39].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[40].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[41].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[42].innerHTML = "Lorem ipsum dolor sit amet.";
  document.querySelectorAll("li")[43].innerHTML = "Lorem rakib dolor sit amet.";
  document.querySelectorAll("h2")[2].innerHTML = "1200 /<b>$</b>";
}
//////////////////////////////////////////////
