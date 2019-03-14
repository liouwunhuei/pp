<template>
  <div id="news">
    <div class="inner-banner">
      <img src="https://placem.at/things?w=1200&h=500&random=6" alt="">
      <div class="inner-title">
        <h1>pizza news</h1>
        <h2>leo arcu eget lorem at metus auctor</h2>
      </div>  
    </div>
    <div class="container">
      <div class="new-item" v-for="(newitem,index) in news">
        <img :src="newitem.img" :alt="newitem.title">
        <div class="new-text">
          <h4>{{newitem.newCategory}}</h4>
          <h3>{{newitem.title}}</h3>
          <h5>{{newitem.date}}</h5>
          <p>{{newitem.newsIntro}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el:'#news',
  data() {
    return {
      news: [],
    };
  },
  mounted(){
    fetch('./src/newsData.json')
    .then(res=>res.json())
    .then(news=>this.news=news);
  },
}
</script>

<style scooed>
  #news{
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
  #news .new-item{
    width: 100%;
    display: block;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #aaa;
  }
  #news .new-item img{
    width: 40%;
    margin-bottom: -8px;
  }
  #news .new-item .new-text{
    width: 59%;
    display: inline-block;
    text-align: justify;
  }
  #news .new-item h3{
    font-size: 26px;
    margin-bottom: 10px;
  }
  #news .new-item h4{
    color: #da3838;
  }
  #news .new-item h5{
    color: #a2a2a2;
    font-weight: inherit;
    font-size: 16px;
  }
  #news .new-item p{

  }
</style>