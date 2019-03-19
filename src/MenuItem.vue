<template>
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
</template>

<script>
export default {
  
}
</script>

<style scooed>
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
</style>