<template>
  
    <li>
      <img :src="menu.img" :alt="menu.name">
      <span class="dolor">${{menu.money}}</span>
      <h3><span>{{menu.subname}}</span>{{menu.name}}</h3>
      <p>{{menu.Ingredients}}<span>{{menu.subIngredients}}</span></p>
    </li>
  
</template>

<script>
export default {
  props: ['menu'],
}
</script>