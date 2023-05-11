<template>
  <nav class="css_nav">
    <router-link to="/blog/css/CSSFlex">CSSFlex</router-link>
    <router-link to="/blog/css/CSSGrid">CSSGrid</router-link>
  </nav>
  <RouterView></RouterView>
</template>
<style scoped lang="less">
.css_nav {
  height: 30px;
  overflow: scroll;
  white-space: nowrap;
  text-align: center;
  a,
  span {
    cursor: pointer;
    color: #087ce1;
    font-size: 16px;
    font-family: 'sy';
    margin-right: 20px;
    text-align: center;
    margin-left: 20px;
    text-shadow: 4px 4px 2px #091f54;
  }
  .router-link-active.router-link-exact-active {
      color: #fff;
    }
}
.css_nav::-webkit-scrollbar {
  display: none;
}
</style>
