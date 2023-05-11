<template>
  <div class="applets">
    <div class="appletcode1">
      <img src="@/assets/images/appletcode1.png" />
    </div>
    <div class="appletcode2">
      <img src="@/assets/images/appletcode2.png" />
    </div>
    <div class="appletcode3">
      <img src="@/assets/images/appletcode3.png" />
    </div>
    <div class="appletcode4">
      <img src="@/assets/images/h5code2.png" />
    </div>
    <div class="appletcode5">
      <img src="@/assets/images/h5code1.png" />
    </div>
  </div>
</template>
<style lang="less" scoped>
.applets {
  width: 180px;
  height: 180px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -90px;
  margin-top: -90px;
}
.applets > div {
  width: 180px;
  height: 180px;
  border-radius: 180px;
  background-color: #000;
  opacity: 0.9;
  -moz-box-shadow: 0 0 8px 1px #c1c7a5; /*FF 3.5+*/
  -webkit-box-shadow: 0 0 8px 1px #c1c7a5; /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: 0 0 8px 1px #c1c7a5; /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
}
.applets > div > img {
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.9;
}
.applets .appletcode1 {
  position: absolute;
  top: 73px;
  position: absolute;

  left: -582px;
}
.applets .appletcode2 {
  position: absolute;
  top: 18px;
  left: 509px;
}
.applets .appletcode3 {
  position: absolute;
  left: -26px;
    position: absolute;
    top: 50px;
    background: none;
    border-radius: inherit;
    box-shadow: none;
    img{
      opacity: 1;
      transform:scale(1);
    }
}
.applets .appletcode4 {
  left: -266px;
  top: 145px;
  position: absolute;
  background: none;
    border-radius: inherit;
    box-shadow: none;
    img{
      opacity: 1;
    }
}
.applets .appletcode5 {
    left: 252px;
    top: -107px;
  position: absolute;
  background: none;
    border-radius: inherit;
    box-shadow: none;
    img{
      opacity: 1;
    }
}
</style>
