<template>
  <div>
    <div class="menu-nav">
      <a href="#">number1</a>
      <a href="#">number2</a>
      <a href="#">number3</a>
      <a href="#">number4</a>
    </div>
    <div class="menu-section">
      <div class="menu-list number1">
        <h2>number1</h2>
        <ul>
          <MenuItem v-for="(menu1,idx) in menu1(menus)" :menu="menu1"/>
        </ul>
      </div>
      <div class="menu-list number2">
        <h2>number2</h2>
        <ul>
          <MenuItem v-for="(menu2,idx) in menu2(menus)" :menu="menu2"/>
        </ul>
      </div>
      <div class="menu-list number3">
        <h2>number3</h2>
        <ul>
          <MenuItem v-for="(menu3,idx) in menu3(menus)" :menu="menu3"/>
        </ul>
      </div>
      <div class="menu-list number4">
        <h2>number4</h2>
        <ul>
          <MenuItem v-for="(menu4,idx) in menu4(menus)" :menu="menu4"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MenuItem from './MenuItem.vue';

export default {
  components:{
    MenuItem,
  },
  computed:{
    ...mapState(['menus']),
  },
  methods:{
    ...mapActions(['fetchMenu']),
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
  },
  mounted(){
    this.fetchMenu();
  },
}
</script>

<style>
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
</style>