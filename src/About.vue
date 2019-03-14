<template>
  <div id="about">
    <div class="inner-banner">
      <img src="https://placem.at/things?w=1200&h=500&random=6" alt="">
      <div class="inner-title">
        <h1>about pizza</h1>
        <h2>leo arcu eget lorem at metus auctor</h2>
      </div>  
    </div>
    <div class="container">
      <div class="about-content">
        <h2>et blandit erat nisl at metus</h2>
        <h3>et blandit erat nisl ullamcorper velit, velit, ut posuere leo arcu eget lorem at metus auctor<br> eleifendut posuere leo arcu eget lorem at metus auctor eleifend</h3>
        <div class="about-box twoPic">
          <img src="https://placem.at/things?w=800&h=500&random=6" alt="">
          <img src="https://placem.at/things?w=800&h=500&random=6" alt="">
        </div>
        <div class="about-box">
          <div class="text-left">
          <h4>leo arcu eget lorem</h4>
          <h5>end, metus magna ullamcorper velit, ut posuere</h5>
          <p>et blandit erat nisl ullamcorper velit, ut posuere leo arcu eget lorem at metus auctor eleifend, metus magna ullamcorper velit, ut posuere leo arcu eget lorem. et blandit erat nisl ullamcorper velit, ut posuere leo arcu eget lorem at metus auctor eleifend</p>
          </div>
          <img src="https://placem.at/things?w=800&h=400&random=6" alt="" class="rightpic">
        </div>
        <div class="about-box">
          <img src="https://placem.at/things?w=1400&h=400&random=6" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scooed>
  #about{
    margin-top: 180px;
  }
  .inner-banner{
    position: relative;
    height: 38vw;
  }
  .inner-banner img{
    position: absolute;
    width: 85%;
    left: -11vw;
  }
  .inner-banner .inner-title{
    position: absolute;
    left: 55vw;
    top: 20vw;
  }
  .inner-title h1{
    font-size: 20px;
    color: #fff;
  }
  .inner-title h2{
    font-size: 32px;
    color: #2c2c2c;
  }
  .about-content{

  }
  .about-content h2{
    font-size: 19px;
    text-align: center;
  }
  .about-content h3{
    font-size: 15px;
    text-align: center;
    margin-bottom: 50px;
  }
  .about-content h4{

  }
  .about-content h5{

  }
  .about-content p{

  }
  .about-box{
    position: relative;
    margin-bottom: 50px;
  }
  .about-box img{
    width: 100%;
  }
  .about-box.twoPic{
    position: relative;
    margin-bottom: 90px;
  }
  .about-box.twoPic img:nth-child(1){
    width: 55vw;
  }
  .about-box.twoPic img:nth-child(2){
    width: 42vw;
    position: absolute;
    right: 0;
    bottom: -44px;
  }
  .about-content .rightpic{
    width: 69.4%;
    display: inline-block;
  }
  .about-content .text-left{
    width: 30%;
    display: inline-block;
  }
</style>