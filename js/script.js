"use strict";
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileLogo = document.querySelector(".mobile-logo");
const nav = document.querySelector(".nav");

console.log(hamburger);

hamburger.addEventListener("click", function (e) {
  mobileNav.classList.toggle("hidden");
});

mobileNav.addEventListener("click", function (e) {
  mobileNav.classList.add("hidden");
});

// const x = window.matchMedia("(min-max: 576px)");
// const mainNav = function () {
//   if (x.matches) {
//     mobileNav.classList.remove("hidden");
//     console.log("resize");
//   }
// };

// mainNav(x);
// x.addEventListener(mainNav);
