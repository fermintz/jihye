<template>
  <section class="panel-holder">
    <div class="panel" id="panel">
      <div class="inner">
 
        <div class="first_text">
          <span>우리가 만난지</span>
          <span>
            <strong>{{startCount.var.toFixed()}}</strong> 일째
          </span>
        </div>
  
        <div class="item item1">
          <div class="text">
            나랑 늘 함께해줘서 고마워
          </div>
          <img src="https://lh3.googleusercontent.com/pw/AL9nZEUO350B-5SGadJ3aX_xQ-l6YQ53XWdcatUVeL96o8JV8ARFZ-0D8z34Nvta8n2gmEcnXiPNrA6vl6Ux2b_X2rX0T91rENaYWkkLqvjaAB6y_BjMzK11272vA9LV6oAs5d2zlSWzYE6lURlmAfl5_mMxXg=w1900-h1263-no?authuser=0" />
        </div>

        <div class="item item2">
          <div class="text">
            맛있는 것도 함께
          </div>
          <img src="https://lh3.googleusercontent.com/pw/AL9nZEWkhDbHEc5I__Yv1nnRTxYgOS6A2wIrNYtmaR3Ob9Qy3vb_9PWVlA2mr1LF7Apq8TRp__FjtOzdYydy9SLt7_FWXD0CMqriJ_mgOUxNfDscjBcVQ7HiAu6T4J02coCUkAd_rEUhWHIpYwhffdjFO9xZ=w948-h1263-no?authuser=0" class="img1"/>
          <img src="https://lh3.googleusercontent.com/pw/AL9nZEXDXtYSR1w1ew10bz7xAMH4jDm3guezpVGpaK2nJ6JXnoFqTRFneL67H5WTlnsdJRWA6k2TXhp4sxEctPWGsiCmsmiuGkYGChmeNA4V5ubCy7Dfd6WS_8hEsQBh8X703C4aacq9bRbWNLnAm4tFMjjLGQ=w1900-h1263-no?authuser=0" class="img2"/>
        </div>

        <div class="item item3">
          <div class="text">
            캠핑도 늘 함께
          </div>
          <img src="https://lh3.googleusercontent.com/pw/AL9nZEXEjufJgskY_eKmKhE0cUObb6h9uVKswrZR5vqkDXBzpA3BiUEVsr_-3c02Xj2N0STQjO3H6yK81e3nBKmJhiFOzSM-S8mTpk3tdSu8Cl7UUgMNb1CqdKIdNJMThWuq_cgItDRn5PawJfmFWxcbeietYA=w1684-h1263-no?authuser=0" />
        </div>

        <div class="item item4">
          <div class="text">
            힘들었던 등산도<br />늘 함께했지,
          </div>
          <img src="https://lh3.googleusercontent.com/pw/AL9nZEVBE0OxB16iv0iFIUfujz9GJ_7sle2pxYhRtfG5FmwWI12PdA_rSIXDfKi29eAKRdopBSRws8dJBqyrt3ngCJpFeHXBH78pdnpoewlMDWDA7PsTS4mWqtJoux3WWgpU79gNr-HWj0i3AvIMF9RnT4fgBg=w840-h1263-no?authuser=0" />
          
        </div>

        <div class="item item5">
          <div class="text">
            이제는 자기가 없는 세상은<br/>
            상상도 할수가 없어
          </div>
          <img src="https://lh3.googleusercontent.com/pw/AL9nZEWHRjGnHJ0rJx39GPnL4pVFa11v0IWoXxhhw8C86R9iB174Im6zxkDB6Vm-e0j3fCm5ZFa59rwbuxh25qcSMbknzt5M4UMrNIKD_S3R_UY6swPAdKh4vb0gjJI6dQWpZLd2tp0oTCEdCrPiBbvERw3pqQ=w1900-h1263-no?authuser=0" />
        </div>

        <div class="item item6">
          <div class="text">
            그래서 이제는<br/>
            남은 여생도 너랑 늘 함께하고 싶어
          </div>
          <!-- <img src="https://picsum.photos/600" /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


export default {
  data(){
    return{
      startCount:{var:0}
    }
  },

  mounted(){
    this.timeline()  
  },
  
  methods:{
    timeline(){
      const sections = gsap.utils.toArray('.panel');
      const items = gsap.utils.toArray('.item')
       const itemTotalWidth = items.reduce((sum, cur)=>{
        return cur.clientWidth + sum
      }, 0)

      const tween = gsap.to(sections ,{
        x: -(itemTotalWidth + 1000),
        ease: "none",
        scrollTrigger: {
          trigger: ".panel-holder",
          pin: true,
          scrub: 1,
          // snap: 1 / (sections.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: "+=350%",
        }
      })

      gsap.to(this.startCount, {
        var:539,
        duration:1,
        ease:'none',
        scrollTrigger:{
          trigger:'.panel-holder',
          // scrub:true,
          start:'top 30%',

        }
      })

      gsap.to('.item1',{
        opacity:0,
        scrollTrigger: {
          trigger:'.item1',
          containerAnimation:tween,
          start:'left 5%',
          scrub:true,
          toggleActions: "play none none reset",
        }
      })

      gsap.to('.item2',{
        opacity:0,
        scrollTrigger: {
          trigger:'.item2',
          containerAnimation:tween,
          start:'left 5%',
          scrub:true,
          toggleActions: "play none none reset",
        }
      })

      gsap.to('.item3',{
        opacity:0,
        scrollTrigger: {
          trigger:'.item3',
          containerAnimation:tween,
          start:'left 5%',
          scrub:true,
          toggleActions: "play none none reset",
        }
      })

      gsap.to('.item4',{
        opacity:0,
        scrollTrigger: {
          trigger:'.item4',
          containerAnimation:tween,
          start:'left 5%',
          scrub:true,
          toggleActions: "play none none reset",
        }
      })

      gsap.to('.item5',{
        opacity:0,
        scrollTrigger: {
          trigger:'.item5',
          containerAnimation:tween,
          start:'left 5%',
          scrub:true,
          toggleActions: "play none none reset",
        }
      })


      gsap.to('.item6',{
        opacity:0,
        scrollTrigger: {
          trigger:'.item6',
          containerAnimation:tween,
          start:'left 5%',
          toggleActions: "play none none reset",
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped src="./slider.scss">
section{
 
}
</style>