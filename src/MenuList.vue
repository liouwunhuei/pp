<template>
  <div>
    <div class="menu-nav">
      <a href="#" @click="linkMenu">number1</a>
      <a href="#" @click="linkMenu">number2</a>
      <a href="#" @click="linkMenu">number3</a>
      <a href="#" @click="linkMenu">number4</a>
    </div>
    <MenuLitem/>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
  
}
</script>

<style scooed>
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
</style>