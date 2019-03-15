<template>
  <div id="app">
    <div class="green-border">
      <div class="red-border"></div>
    </div>
    <div class="white-top"></div>
    <div class="white-bottom"></div>
    <div class="container">
      <Header/>
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';

export default {
  components: {
    Header,
    Footer
  }
}
</script>


<style>
  @import './assets/css/font.css';
  *{
    box-sizing: border-box;
    padding:0;
    margin:0;
  }
  a, a:hover{
    text-decoration: none;
  }
  a, button, img{
    outline:none;
  }
  html,body{
    position:relative;
  }
  ul, li{
    list-style-type: none;
  }
  .container{
    width:1300px;
    margin:0 auto;
    padding-bottom:15px;
  }
  .green-border{
    border: 2px solid #73c640;
    width: 98%;
    height: 98%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    pointer-events: none;
  }
  .red-border{
    border: 2px solid #da3838;
    width: 98%;
    height: 98%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .white-top{
    background: #ffffff;
    width: 100%;
    height: 30px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
  .white-bottom{
    background: #ffffff;
    width: 100%;
    height: 40px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
  @media screen and (max-width:1410px){
    .container{
      width:100%;
      margin:0 auto;
      padding:0 50px;
    }
  }
</style>