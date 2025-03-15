import "../lib/smooth";
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

/* section01 */

ScrollTrigger.create({
    trigger: '.section01',
    // start: 'top top',
    // end: 'bottom bottom',
    animation: gsap.from('.section01 .body .flex-container .left .text',{y:10,opacity:0}),
    // pin: false,
    // pinSpacing: false,
    // markers: true,
    // scrub: true,
  })



/* section02 */

ScrollTrigger.create({
    trigger: '.section02',
    // start: 'top top',
    // end: 'bottom bottom',
    animation: gsap.from('.section02 .flex-container .right .title',{y:20,opacity:0}),
    // pin: false,
    // pinSpacing: false,
    // markers: true,
    // scrub: true,
  })

  

  ScrollTrigger.create({
    trigger: '.section02',
    // start: 'top top',
    // end: 'bottom bottom',
    animation: gsap.from('.section02 .flex-container .content .right .explain',{y:20,opacity:0}),
    // pin: false,
    // pinSpacing: false,
    // markers: true,
    // scrub: true,
  })

  /* section03 */

  ScrollTrigger.create({
    trigger: '.section03',
    // start: 'top top',
    // end: 'bottom bottom',
    animation: gsap.from('.section03 .content .text',{y:30,opacity:0}),
    // pin: false,
    // pinSpacing: false,
    // markers: true,
    // scrub: true,
  })

  /* section04 */

  ScrollTrigger.create({
    trigger: '.section04',
    // start: 'top top',
    // end: 'bottom bottom',
    animation: gsap.from('.section04 .flex-container .center',{y:20,opacity:0}),
    // pin: false,
    // pinSpacing: false,
    // markers: true,
    // scrub: true,
  })

   /* section05 */

   ScrollTrigger.create({
    trigger: '.section05',
    // start: 'top top',
    // end: 'bottom bottom',
    animation: gsap.from('.section05 .img-container .text',{y:30,opacity:0}),
    // pin: false,
    // pinSpacing: false,
    // markers: true,
    // scrub: true,
  })
  ScrollTrigger.create({
    trigger: '.section05',
    start: 'top top',
    // end: 'bottom bottom',
    animation: gsap.from('.section05 .content .montana',{y:20,opacity:0}),
    // pin: false,
    // pinSpacing: false,
    // markers: true,
    // scrub: true,
  })

   
  markers();