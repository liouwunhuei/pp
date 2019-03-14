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
        <a href="#">number1</a>
        <a href="#">number2</a>
        <a href="#">number3</a>
        <a href="#">number4</a>
      </div>
      <div class="menu-section">
        <div class="menu-list">
          <h2>number1</h2>
          <ul>
            <li>
              <img src="https://placem.at/things?w=500&h=500&random=6" alt="">
              <span class="dolor">$100</span>
              <h3><span>et blandit erat nisl at metus</span>ullamcorper velit</h3>
              <p>bland/blandit/blandit/blandit<span>bland,blandit,blandit,blandit</span></p>
            </li>
            <li>
              <img src="https://placem.at/things?w=500&h=500&random=6" alt="">
              <span class="dolor">$100</span>
              <h3><span>et blandit erat nisl at metus</span>ullamcorper velit</h3>
              <p>bland/blandit/blandit/blandit<span>bland,blandit,blandit,blandit</span></p>
            </li>
            <li>
              <img src="https://placem.at/things?w=500&h=500&random=6" alt="">
              <span class="dolor">$100</span>
              <h3><span>et blandit erat nisl at metus</span>ullamcorper velit</h3>
              <p>bland/blandit/blandit/blandit<span>bland,blandit,blandit,blandit</span></p>
            </li>
            <li>
              <img src="https://placem.at/things?w=500&h=500&random=6" alt="">
              <span class="dolor">$100</span>
              <h3><span>et blandit erat nisl at metus</span>ullamcorper velit</h3>
              <p>bland/blandit/blandit/blandit<span>bland,blandit,blandit,blandit</span></p>
            </li>
            <li>
              <img src="https://placem.at/things?w=500&h=500&random=6" alt="">
              <span class="dolor">$100</span>
              <h3><span>et blandit erat nisl at metus</span>ullamcorper velit</h3>
              <p>bland/blandit/blandit/blandit<span>bland,blandit,blandit,blandit</span></p>
            </li>
          </ul>
        </div>
        <div class="menu-list">
          <h2>number1</h2>
          <ul>
            <li>
              <img src="https://placem.at/things?w=500&h=500&random=6" alt="">
              <span class="dolor">$100</span>
              <h3><span>et blandit erat nisl at metus</span>ullamcorper velit</h3>
              <p>bland/blandit/blandit/blandit<span>bland,blandit,blandit,blandit</span></p>
            </li>
            <li>
              <img src="https://placem.at/things?w=500&h=500&random=6" alt="">
              <span class="dolor">$100</span>
              <h3><span>et blandit erat nisl at metus</span>ullamcorper velit</h3>
              <p>bland/blandit/blandit/blandit<span>bland,blandit,blandit,blandit</span></p>
            </li>
            <li>
              <img src="https://placem.at/things?w=500&h=500&random=6" alt="">
              <span class="dolor">$100</span>
              <h3><span>et blandit erat nisl at metus</span>ullamcorper velit</h3>
              <p>bland/blandit/blandit/blandit<span>bland,blandit,blandit,blandit</span></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="order">
        <form>
          <div class="input-item">
            <lable for="name">姓名</lable>
            <input id="name" name="姓名">
          </div>
          <div class="input-item">
            <lable for="phone">電話</lable>
            <input id="phone" name="電話">
          </div>
          <div class="input-item">
            <lable for="note">備註</lable>
            <input id="note" name="備註">
          </div>
        </form>
        <div class="order-menu">
          <ul>
            <li>
              <img src="https://placem.at/things?w=500&h=500&random=6" alt="">
              <h3>et blandit erat nisl</h3>
              <p>$100</p>
            </li>
            <li>
              <img src="https://placem.at/things?w=500&h=500&random=6" alt="">
              <h3>et blandit erat nisl</h3>
              <p>$100</p>
            </li>
          </ul>
          <div class="order-totall">
            <p>共1項，總價：100元</p>
          </div>
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
  .menu-section{

  }
  .menu-list{
    border-bottom:1px solid #eee;
    margin-bottom:80px;
  }
  .menu-list ul{

  }
  .menu-list ul li{
    display: inline-block;
    width: 24%;
    margin-right:9px;
    margin-bottom:30px;
    position: relative;
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
  .menu-list p{

  }
  .menu-list p span{
    display: block;
    font-size: 12px;
  }
</style>