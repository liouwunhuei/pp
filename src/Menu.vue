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
      <div class="menu-nav">
        <a href="#" @click="linkMenu">number1</a>
        <a href="#" @click="linkMenu">number2</a>
        <a href="#" @click="linkMenu">number3</a>
        <a href="#" @click="linkMenu">number4</a>
      </div>
      <div class="menu-section">
        <div class="menu-list number1">
          <h2>number1</h2>
          <ul>
            <li v-for="(menu1,index) in menu1(menus)" :value="'menu1-'+index" @click="picMenu">
              <img :src="menu1.img" :alt="menu1.name">
              <span class="dolor">${{menu1.money}}</span>
              <h3><span>{{menu1.subname}}</span>{{menu1.name}}</h3>
              <p>{{menu1.Ingredients}}<span>{{menu1.subIngredients}}</span></p>
            </li>
          </ul>
        </div>
        <div class="menu-list number2">
          <h2>number2</h2>
          <ul>
            <li v-for="(menu2,index) in menu2(menus)" :value="'menu2-'+index" @click="picMenu">
              <img :src="menu2.img" :alt="menu2.name">
              <span class="dolor">${{menu2.money}}</span>
              <h3><span>{{menu2.subname}}</span>{{menu2.name}}</h3>
              <p>{{menu2.Ingredients}}<span>{{menu2.subIngredients}}</span></p>
            </li>
          </ul>
        </div>
        <div class="menu-list number3">
          <h2>number3</h2>
          <ul>
            <li v-for="(menu3,index) in menu3(menus)" :value="'menu3-'+index" @click="picMenu">
              <img :src="menu3.img" :alt="menu3.name">
              <span class="dolor">${{menu3.money}}</span>
              <h3><span>{{menu3.subname}}</span>{{menu3.name}}</h3>
              <p>{{menu3.Ingredients}}<span>{{menu3.subIngredients}}</span></p>
            </li>
          </ul>
        </div>
        <div class="menu-list number4">
          <h2>number4</h2>
          <ul>
            <li v-for="(menu4,index) in menu4(menus)" :value="'menu4-'+index" @click="picMenu">
              <img :src="menu4.img" :alt="menu4.name">
              <span class="dolor">${{menu4.money}}</span>
              <h3><span>{{menu4.subname}}</span>{{menu4.name}}</h3>
              <p>{{menu4.Ingredients}}<span>{{menu4.subIngredients}}</span></p>
            </li>
          </ul>
        </div>
      </div>
      <h3 class="order-title">Reservation</h3>
      <div class="order">
        <form action="">
          <div class="data-text">
            <div class="input-item">
              <label for="name">name</label>
              <input id="name" name="name">
            </div>
            <div class="input-item">
              <label for="phone">phone</label>
              <input id="phone" name="phone">
            </div>
            <div class="input-item">
              <label for="note">instruction manual</label>
              <textarea id="note" name="note"></textarea>
            </div>
          </div>
          <div class="order-menu">
            <ul>
              <li>
                <img src="https://placem.at/things?w=500&h=500&random=6" alt="">
                <h3>et blandit erat nisl</h3>
                <p>$100</p>
                <button>delete</button>
              </li>
              <li>
                <img src="https://placem.at/things?w=500&h=500&random=6" alt="">
                <h3>et blandit erat nisl</h3>
                <p>$100</p>
                <button>delete</button>
              </li>
              <li>
                <img src="https://placem.at/things?w=500&h=500&random=6" alt="">
                <h3>et blandit erat nisl</h3>
                <p>$100</p>
                <button>delete</button>
              </li>
            </ul>
          </div>
          <div class="order-totall">
              <p>共1項，總價：100元</p>
            </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      menus:[],
    };
  },
  mounted(){
    fetch('./src/menuData.json')
    .then(res=>res.json())
    .then(menus=>this.menus=menus);
  },
  methods:{
    menu1: function (menus) {
      return menus.filter(function(item){
        return item.productCategory === "number1";
      });
    },
    menu2: function (menus) {
      return menus.filter(function(item){
        return item.productCategory === "number2";
      });
    },
    menu3: function (menus) {
      return menus.filter(function(item){
        return item.productCategory === "number3";
      });
    },
    menu4: function (menus) {
      return menus.filter(function(item){
        return item.productCategory === "number4";
      });
    },
    linkMenu: function(e){
      
        let nav_choise = $(e.target).text();
        $('html').animate(
          {
            scrollTop:$('.'+nav_choise).offset().top -120
          }, 500
        );
    },
    picMenu: function(e){
      console.log(e.target);
      if(e.target != e.target.li){
        e.preventDefault();
        $(e.target).parent('li').toggleClass('choise');
      }
      $(e.target).toggleClass('choise');
    },
  },
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
  .menu-nav{
    margin-bottom: 30px;
    border-bottom: 1px solid #e1e1e1;
    padding-bottom: 15px;
  }
  .menu-nav a{
    font-size: 18px;
    background: #353535;
    color: #ffffff;
    padding: 5px 30px;
    letter-spacing: 1px;
    margin-right: 6px;
  }
  .menu-list{
    border-bottom:1px solid #eee;
    margin-bottom:80px;
  }
  .menu-list ul li{
    display: inline-block;
    width: 24%;
    margin-right:9px;
    margin-bottom:30px;
    position: relative;
    cursor: pointer;
    border: 1px solid #d6d6d6;
    padding: 5px;
  }
  .menu-list ul li:hover{
    border: 1px solid #db5e19;
  }
  .menu-list ul li.choise{
    opacity: 0.5;
    border: 1px solid #db5e19;
  }
  .menu-list ul li:nth-child(4n){
    margin-right:0px;
  }
  .menu-list img{
    width:100%;
  }
  .menu-list h2{
    display: block;
    background: #494949;
    text-align: center;
    color: #ffffff;
    margin-bottom: 19px;
    line-height: 2;
    letter-spacing: 1px;
  }
  .menu-list .dolor{
    position: absolute;
    right: 9px;
  }
  .menu-list h3{
    margin-bottom: 5px;
    border-bottom: 1px solid #aaa;
    padding-bottom: 5px;
  }
  .menu-list h3 span{
    display: block;
    font-size: 12px;
    font-weight: bold;
  }
  .menu-list p span{
    display: block;
    font-size: 12px;
  }
  .order-title{
    font-size: 30px;
  }
  .order{
    border:1px solid #aaaaaa;
    padding: 15px 15px 30px;
    margin-bottom: 100px;
    position: relative;
  }
  .order .data-text{
    display: inline-block;
    width: 30%;
    vertical-align: top;
    margin-right: 10px;
  }
  .order .input-item{
    margin-bottom: 15px;
  }
  .order .input-item label{
    display: block;
  }
  .order .input-item input{
    width: 100%;
    height: 30px;
  }
  .order .input-item textarea{
    width: 100%;
    height: 115px;
  }
  .order-menu{
    display: inline-block;
    width: 68%;
    height: 249px;
    position: relative;
    overflow-y: scroll;
    border: 1px solid #c9c9c9;
    margin-top: 23px;
  }
  .order-menu ul{
    padding: 15px 15px 0px;
  }
  .order-menu ul li{
    margin-bottom: 15px;
    background: #f7f7f7;
  }
  .order-menu ul li img{
    width: 12%;
    vertical-align: middle;
  }
  .order-menu ul li h3{
    display: inline-block;
    width: 50%;
    font-size: 20px;
    padding-left: 10px;
  }
  .order-menu ul li p{
    display: inline-block;
    width: 17%;
  }
  .order-menu ul li button{
    background: #c0c0c0;
    position: relative;
    width: 16%;
  }
  .order-totall{
    position: absolute;
    right: 19px;
    width: 66%;
    height: 32px;
    line-height: 32px;
    padding-right: 31px;
    background: #2a3b93;
    color: #fff;
    margin-top: -19px;
    text-align: right;
    letter-spacing: 4px;
  }
  .order button{
    border: none;
    background: #1aad63;
    width: 29.1%;
    height: 32px;
    color: #ffffff;
    font-size: 16px;
    position: absolute;
    margin-top: -20px;
    cursor: pointer;
  }
</style>