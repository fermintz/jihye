<template>
  <div class="home">    
    <section class="visual">
      <div class="visual_text">
        <span class="text text1" :draggable="false">Lee</span>
        <span class="text text2">Ji  hye</span>
      </div>
      <div class="bg">
        <img src="@/assets/img/jihye.png" class="jihye_pictrue">
        <img src="@/assets/img/bg.jpg" class="main_bg">
      </div>
      <div class="bottomBg"></div>

      <div class="bottom_text">
        <p>아래로 스크롤을 내려줄래?</p>
      </div>
      
      <div class="hearts">
        <v-icon v-for="item in 10" :key="item">
          mdi-heart
        </v-icon>
      </div>
  
    </section>
   
    <Photos />

    <Slider />

    <section class="video_wrap">
      <div class="inner">
        <h4>
          지혜에게 보내는 <strong>영상편지</strong>
        </h4>
        <div class="video">
          <video controls @playing="onPlay" id="movie"> 
            <source src="@/assets/video/movie.mp4" type="video/mp4">
          </video>
        </div>
        
        <div class="btns">
          <v-btn rounded text @click="lastPlay">
            이제 마지막이야! 여기를 눌러줘!
          </v-btn>
        </div>
      </div>
    </section>

    <section class="last" v-show="visible">
      <h2>나랑 결혼 해 줄래!?</h2>
      <p>will You Marry Me?</p>

      <span>승낙하시겠습니까?</span>
      <div class="btns">
        <v-btn class="no" text rounded
          @click="noAlert"
        >NO</v-btn>
        <v-btn class="yes" text rounded>YES</v-btn>
      </div>
    </section>

    
  </div>

</template>

<script>
import gsap from 'gsap';
import Slider from '@/components/slider/slider.vue';
import Photos from '@/components/photos/photos.vue';

export default {
  components:{
    Slider, Photos
  },
  data(){
    return{
      visible:false
    }
  },
  mounted(){
    this.gsap()
  },

  methods:{

    lastPlay(){
      this.visible = true;
      setTimeout(()=>{
        window.scrollTo({
          top:document.body.scrollHeight,
          behavior:'smooth'
        }) 
      },500)
      
    }, 

    gsap(){
      const tl = gsap.timeline();

      tl.from('.visual_text .text1', {
        y:200,
        duration:.5,
        opacity:0,
        delay:1
      }).from('.visual_text .text2',{
        y:200,
        duration:.5,
        opacity:0,
      },"-=0.3")
    },
    noAlert(){
      alert('거절은 거절한다!')
    },

    onPlay(){
      const movie = document.getElementById('movie')
      const music = document.getElementById('music')

      music.pause()
      this.$store.commit('musicOff');
      movie.requestFullscreen()
    }
  }
};
</script>

<style lang="scss" scoped src="./home.scss"/>
