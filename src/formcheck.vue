<template>
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
        </ul>
      </div>
      <div class="order-totall">
        <p>共<span class="orderNum">1</span>項，總價：<span class="price">100</span>元</p>
      </div>
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scooed>
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