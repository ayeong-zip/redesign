import "swiper/css/bundle";
import "../lib/smooth";
import "./styles/style.css";
import { markers } from "../lib/smooth";
import "./header";
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
import Swiper from "swiper/bundle";

import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 1. git pull 입력
// 1. 터미널 창에서 npm i 실행한다.
// 3. npm run dev로 사이트를 연다.
// 5. 코딩 시작.

/* section01  */

ScrollTrigger.create({
  trigger: ".section01",
  start: "top top",
  // end: 'bottom bottom',
  animation: gsap.from(".section01 .maintext", { y: 30, opacity: 0 }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

const swiper = new Swiper(".section01 .bg-img", {
  loop: true,
  // If we need pagination
  // pagination: {
  // el: ".swiper-pagination",
  // },
});

const swiper3 = new Swiper(".section03 .bg-img", {
  loop: true,
  // If we need pagination
  pagination: {
    el: ".section03 .pagination",
    bulletClass: "bullet",
    bulletActiveClass: "active",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
});

/* section02 */

ScrollTrigger.create({
  trigger: ".section02",
  start: "top top",
  end: "bottom bottom",
  animation: gsap.from(".section02 .flex-container .title", {
    y: 30,
    opacity: 0,
  }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

ScrollTrigger.create({
  trigger: ".section02",
  start: "top top",
  end: "bottom bottom",
  animation: gsap.from(".shelving .text-top", { y: 30, opacity: 0 }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

ScrollTrigger.create({
  trigger: ".section02",
  start: "top top",
  end: "bottom bottom",
  animation: gsap.from(".cabinets .text-top", { y: 30, opacity: 0 }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

ScrollTrigger.create({
  trigger: ".section02",
  start: "top top",
  end: "bottom bottom",
  animation: gsap.from(".retailer .ad-title", { y: 30, opacity: 0 }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

ScrollTrigger.create({
  trigger: ".section02",
  start: "top top",
  end: "bottom bottom",
  animation: gsap.from(".bedroom", { y: 30, opacity: 0 }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

ScrollTrigger.create({
  trigger: ".section02",
  start: "top top",
  end: "bottom bottom",
  animation: gsap.from(".tables", { y: 30, opacity: 0 }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

ScrollTrigger.create({
  trigger: ".section02",
  start: "top top",
  end: "bottom bottom",
  animation: gsap.from(".chairs", { y: 30, opacity: 0 }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

ScrollTrigger.create({
  trigger: ".section02",
  start: "top top",
  end: "bottom bottom",
  animation: gsap.from(".accessories", { y: 30, opacity: 0 }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

// section03

ScrollTrigger.create({
  trigger: ".section03",
  start: "top top",
  end: "bottom bottom",
  animation: gsap.from(".section03 .title", { y: 20, opacity: 0 }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

// section04

ScrollTrigger.create({
  trigger: ".section04",
  start: "top top",
  end: "bottom bottom",
  animation: gsap.from(".section04 .title", { y: 20, opacity: 0 }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

ScrollTrigger.create({
  trigger: ".section04",
  start: "top top",
  end: "bottom bottom",
  animation: gsap.from(".section04 .subtitle", { y: 30, opacity: 0 }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

ScrollTrigger.create({
  trigger: ".section04",
  start: "top top",
  end: "bottom bottom",
  animation: gsap.from(".flex-text", { y: 30, opacity: 0 }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

// section05

ScrollTrigger.create({
  trigger: ".section05",
  start: "top top",
  end: "bottom bottom",
  animation: gsap.from(".title", { y: 20, opacity: 0 }),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
});

const swiper2 = new Swiper(".video-swiper", {
  loop: true,
  // If we need pagination
  type: "fraction",

  pagination: {
    el: ".pp",
    // bulletClass: "bullet",
    // bulletActiveClass: "active",
    // clickable: true,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
  },
});

markers();
