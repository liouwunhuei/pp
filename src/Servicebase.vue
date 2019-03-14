<template>
  <div id="servicebase">
    <div class="inner-banner">
      <img src="https://placem.at/things?w=1200&h=500&random=6" alt="">
      <div class="inner-title">
        <h1>servicebase</h1>
        <h2>leo arcu eget lorem at metus auctor</h2>
      </div>  
    </div>
    <div class="container">
      <div class="service-nav">
        <a href="#" @click="linkMenu" class="number0">number</a>
        <a href="#" @click="linkMenu" class="number1">number</a>
        <a href="#" @click="linkMenu" class="number2">number</a>
        <a href="#" @click="linkMenu" class="number3">number</a>
      </div>
      <div class="service-section">
        <div class="service-list" v-for="(serviceitem,index) in service" :value="index" :key="serviceitem.storeNamestoreName" :id="'number'+index">
          <div class="service-text">
            <h3>{{serviceitem.storeName}}</h3>
            <font-awesome-icon :icon="['fab', 'facebook']"/>
            <font-awesome-icon :icon="['fab', 'instagram']"/>
            <font-awesome-icon :icon="['fab', 'line']"/>
            <ul>
              <li><span>time</span>{{serviceitem.time}}</li>
              <li><span>add</span>{{serviceitem.add}}</li>
              <li><span>tel</span>{{serviceitem.tel}}</li>
            </ul>
          </div>
          <img :src="serviceitem.img">
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  el:'.service-section',
  data() {
    return {
      service: [],
    };
  },
  mounted(){
    fetch('./src/serviceData.json')
    .then(res=>res.json())
    .then(service=>this.service=service);
  },
  methods:{
    linkMenu: function(e){
        e.preventDefault();
        let nav_choise = $(e.target).attr('class');
        console.log(nav_choise);
        $('html').animate(
          {
            scrollTop:$('#'+nav_choise).offset().top-120
          }, 500
        );
      
    }
  }
}
</script>



<style scooed>
  #servicebase{
    margin-top: 180px;
    padding-bottom: 100px;
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
  #servicebase .service-nav{
    margin-bottom: 30px;
    border-bottom: 1px solid #e1e1e1;
    padding-bottom: 15px;
  }
  #servicebase .service-nav a{
    font-size: 18px;
    background: #353535;
    color: #ffffff;
    padding: 5px 30px;
    letter-spacing: 1px;
    margin-right: 6px;
  }

  .service-section .service-list{
    display: block;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #cbcbcb;
  }
  .service-list .service-text{
    width: 30%;
    display: inline-block;
  }
  .service-list img{
    width: 69%;
    margin-bottom: -15px;
  }
  .service-list h3{
    font-size: 37px;
  }
 
  .service-list ul{
    font-size: 17px;
    margin-left: 20px;
  }
  .service-list ul li{
    margin-bottom:15px;
    position: relative;
    line-height: 1.2;
  }
  .service-list ul li::before{
    content: "";
    display: inline-block;
    width: 4px;
    height: 4px;
    border: 3px solid #1aad63;
    border-radius: 50%;
    position:absolute;
    left: -18px;
    top: 7px;
  }
  .service-list ul li span{
    display: block;
    font-weight: bold;
    color: #1aad63;
  }
</style>