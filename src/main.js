import "../lib/smooth";
import "./styles/style.css";
import {Swiper} from 'Swiper';
// import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


console.log( Swiper );

// import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger,Draggable,MotionPathPlugin);

// 1. git pull 입력
// 1. 터미널 창에서 npm i 실행한다.
// 3. npm run dev로 사이트를 연다.
// 5. 코딩 시작.


const swiper = new Swiper('.bg-img', {

  loop: true,
    // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});
