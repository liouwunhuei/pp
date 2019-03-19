<template>
  <div id="menu">
    <div class="inner-banner">
      <img src="https://placem.at/things?w=1200&h=500&random=6" alt="">
      <div class="inner-title">
        <h1>pizza menu</h1>
        <h2>leo arcu eget lorem at metus auctor</h2>
      </div>  
    </div>
    <div class="container">
      <MenuList/>
      <formcheck/>
    </div>
  </div>
</template>

<script>
import MenuList from './MenuList.vue';
import formcheck from './formcheck.vue';

export default {
  components:{
    MenuList,
    formcheck,
  }
}
</script>

<style scooed>
  #menu{
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
</style>