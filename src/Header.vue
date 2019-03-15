<template>
  <div id="header">
    <div class="visible-xs">
      <button><font-awesome-icon icon="bars"/></button>
      <button><font-awesome-icon icon="times"/></button>
      <router-link to="/"><img src="./assets/images/logo.svg" alt="logo"></router-link>
    </div>
    <div class="nav">
      <router-link to="/about">About</router-link>
      <router-link to="/menu">Menu</router-link>
      <router-link to="/"><img src="./assets/images/logo.svg" alt="logo"></router-link>
      <router-link to="/news">News</router-link>
      <router-link to="/servicebase">Servicebase</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<script>
$(function(){
  $(window).scroll(function(e){
    let scrollTop = $(window).scrollTop();
    if( scrollTop > 1 ){
      $('#header img').addClass('small');
    }else{
      $('#header img').removeClass('small');
    }
  });
  $('#header button').click(function(){
    $('#header .nav').toggleClass('open');
  });
  $('.nav a').click(function(e){
    $('#header .nav').removeClass('open');
  });
});
</script>
<style>
  #header{
    text-align: center;
    position: fixed;
    top: 22px;
    left: 50%;
    padding-top: 6px;
    padding-bottom: 13px;
    z-index: 2;
    background: #ffffff;
    width: 100%;
    transform: translateX(-50%);
    font-family: 'pacifico';
  }
  #header a{
    font-size: 17px;
    padding: 10px 20px;
  }
  #header img{
    width: 120px;
    margin-bottom: -42px;
    margin-top: 10px;
    transition:all 0.3s;
  }
  #header img.small{
    width: 60px;
    margin-bottom: -12px;
    margin-top: 0px;
  }
  .visible-xs{
    display:none;
  }
  .header button{
    display:none;
  }
  @media screen and (max-width:767px){
    #header .nav{
      position: absolute;
      width: 40%;
      height: 100vh;
      background: #0e4692;
      top: -36%;
      left: -40%;
      padding-top: 17%;
      transition:all 0.3s;
    }
    #header img{
      width: 70px;
    }
    #header .nav a{
      display: block;
      color: #ffffff;
    }
    .visible-xs{
      display:block;
    }
    #header .nav a:nth-child(3){
      display:none;
    }
    #header .nav, #header .nav.close{
      left: -40%;
    }
    #header .nav.open{
      left: 0%;
    }
    #header button{
      border: none;
      position: absolute;
      left: 35px;
      top: 29px;
      background: transparent;
      color: #3a78cc;
      z-index: 9;
      cursor: pointer;
    }
    @media screen and (max-width:480px){
      #header .nav{
        width: 190px;
        left: -190px;
        padding-top: 25%;
      }
      #header .nav, #header .nav.close{
        left: -190px;
      }
      #header .nav.open{
        left: 0%;
    }
    }
  }
</style>