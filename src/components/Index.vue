<!--
 * @Author: your name
 * @Date: 2021-07-20 17:05:47
 * @LastEditTime: 2021-07-21 15:33:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test01\src\components\TestDemo01.vue
-->
<template>
  <div class="index">
    <div class="left">
      <ul>
          <router-link to="/Shouye">1</router-link>
          <router-link to="/second">2</router-link>
      </ul>
    </div>
    <div class="right">
      <section>
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.index{
  display: flex;
  height: calc(100vh - 100px);
}
.left{
  flex: 1;
  background-color: brown;
  height: 100%;
}
.left ul{
  height: 30%;
  display: flex;
  flex-direction: column;
}
.left ul a{
  width: 100%;
  flex: 1;
  border-bottom: 1px solid #fff;
  background-color:cornflowerblue;
  list-style: none;
  cursor: pointer;
  text-align: center;
  line-height: 85px;
}
.right{
  height: 100%;
  flex: 5;
  background-color: #ccc;
}
</style>
