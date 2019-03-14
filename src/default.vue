<template>
  <div id="default">
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://placem.at/things?w=1200&h=500&random=6" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://placem.at/things?w=1200&h=500&random=9" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://placem.at/things?w=1200&h=500&random=12" alt="">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="default-new-list">
      <div class="news-title">news</div>
      <ul>
        <li v-for="Newitem in Newitems">
          <router-link to="/">{{Newitem}}</router-link>
        </li>
      </ul>
    </div>
    <div class="default-about">
      <img src="https://placem.at/things?w=800&h=500&random=12" alt="">
      <div class="default-about-content">
        <h2>et blandit erat nisl at metus</h2>
        <h3>ullamcorper velit, ut posuere leo arcu eget lorem.</h3>
        <p>et blandit erat nisl ullamcorper velit, ut posuere leo arcu eget lorem at metus auctor eleifend, metus magna ullamcorper velit, ut posuere leo arcu eget lorem. et blandit erat nisl ullamcorper velit, ut posuere leo arcu eget lorem at metus auctor eleifend, metus magna ullamcorper velit, ut posuere leo arcu eget lorem. lorem. et blandit erat nisl ullamcorper velit, ut posuere leo arcu eget lorem at metus auctor eleifend, metus magna ullamcorper velit, ut posuere leo arcu eget lorem.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from './assets/js/swiper.min.js';
export default {
  name: 'Swiper',
  data() {
    return{
      dd: 'AAAAA',
      Newitems: [
        '20190212  news  auctor eleifend, metus magna ullamcorper velit, ut posuere leo arcu eget lorem...',
        '20190205  news  placerat magna, et blandit erat nisl at metus. Nam vel porta justota justo, sed....',
        '20190309  news  ullamcorper velit, ut posuere leo arcu eget lorem. nisl nisl placerat magna....',
      ],
    };
  },
  mounted(){
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 100,
      centeredSlides: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });
  },
}
</script>

<style scoped>
@import './assets/css/swiper.min.css';
#default{
  margin-top: 186px;
}
.swiper-container{
  margin-bottom: 35px;
}
.swiper-container img{
  width:100%;
}
.default-new-list{
  padding: 20px 0;
  margin-bottom: 40px;
}
.news-title{
  display: inline-block;
  font-size: 2.3em;
  color: #bcbcbc;
  margin: 0 8%;
  line-height: 1;
}
.default-new-list ul{
  display: inline-block;
  vertical-align: top;
  width: 74%;
}
.default-new-list ul li{
  font-size: 16px;
  margin-bottom: 9px;
}
.default-new-list ul li a{

}
.default-new-list ul li a:hover{
  
}
.default-about{
  margin-bottom: 90px;
}
.default-about img{
  margin-left: -9vw;
}
.default-about .default-about-content{
  width: 47%;
  display: inline-block;
  text-align: justify;
}
.default-about h2{
  font-size: 16px;
  color: #314ada;
}
.default-about h3{
  font-size: 32px;
  color: #464646;
  line-height: 1.2;
  margin-bottom: 15px;
}
.default-about p{
  color: #7a7a7a;
  font-size: 18px;
}

</style>