<template>
  <header id="header">
    <div class="logo" @click="reload">
      <strong>LEE JI HYE</strong>
      <span>사랑해! 이지혜</span>
    </div>
    <div class="btns">
      <v-btn icon v-show="$store.state.musicState === false" @click="musicPlay">
        <v-icon>mdi-play</v-icon>
      </v-btn>
      <v-btn icon v-show="$store.state.musicState  === true" @click="musicPause" >
        <v-icon>mdi-pause</v-icon>
      </v-btn>

      <audio loop id="music" > 
        <source src="@/assets/sound/cute.mp3" type="audio/mp3">
      </audio>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return{
      muted:false,
      autoplay:true,
    }
  },
  mounted(){
    this.startVolume()
    this.headerOn()
  },
  methods:{
    reload(){
      location.reload()
    },
    startVolume(){
      const music = document.getElementById('music')
      music.volume = 0.2;

    },

    musicPlay(){
      const music = document.getElementById('music')
      this.$store.commit('musicOn');
      music.play()
    },

    musicPause(){
      const music = document.getElementById('music')
      this.$store.commit('musicOff');
      music.pause()
    },

    headerOn(){
      window.addEventListener('scroll', ()=>{
        const windowTop = window.scrollY;
        const header = document.getElementById('header');

        if(windowTop > 100){
          header.classList.add('on') 
        }else{
          header.classList.remove('on')
        }
      }, true)
    }
  },
}
</script>

<style lang="scss" scoped>
header{
  position: fixed;
  top:0;
  width:100%;
  z-index:999;
  display:flex;
  height:90px;
  align-items: center;
  justify-content: space-between;
  padding:0 30px;
  background:rgba(0,0,0,0.5);
  transition: 0.5s;

  .logo{
    display:flex;
    align-items: center;
    color:#fff;
    cursor: pointer;

    strong{
      font-size:32px;
    }
    span{
      margin-left:30px;
    }
  }

  .btns{
    .v-btn{
      width:50px;
      height:50px;

      .v-icon{
        font-size:32px;
        color:#fff;
      }
    }
  }

  video{
    display:none;
  }
}

header.on{
  transition: 0.5s;
  background:#fff;
  height:70px;
  .logo{
    color:#191919;
  }

  .btns{
    .v-btn{
      .v-icon{
        color:#191919;
      }
    }
  }
}

@media screen and (max-width:640px){
  header{
    padding:0 15px;
    .logo{
      display:flex;
      flex-direction: column;
      align-items: flex-start;
      strong{
        font-size:18px;
      }
      span{
        font-size:12px;
        margin:0;
      }
    }
  }
}

</style>