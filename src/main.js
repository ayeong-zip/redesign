import "../lib/smooth";
import "./styles/style.css";
import { markers } from "../lib/smooth";
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


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

const swiper = new Swiper('.bg-img', {

  loop: true,
    // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },


});




/* section02 */

ScrollTrigger.create({
  trigger: '.section02',
  start: 'top top',
  end: 'bottom bottom',
  animation: gsap.from('.shelving .text-top',{y:30,opacity:0}),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
})


ScrollTrigger.create({
  trigger: '.section02',
  start: 'top top',
  end: 'bottom bottom',
  animation: gsap.from('.Cabinets .text-top',{y:30,opacity:0}),
  // pin: false,
  // pinSpacing: false,
  // markers: true,
  // scrub: true,
})















markers()








