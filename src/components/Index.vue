<!--
 * @Author: your name
 * @Date: 2021-07-20 17:05:47
 * @LastEditTime: 2021-07-23 11:21:02
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

<style lang="scss">
$color: cornflowerblue;
.index {
  display: flex;
  height: calc(100vh - 100px);
    .left {
      flex: 1;
      background-color: brown;
      height: 100%;
        ul {
          height: 30%;
          display: flex;
          flex-direction: column;
            a {
              width: 100%;
              flex: 1;
              border-bottom: 1px solid #fff;
              background-color: $color;
              list-style: none;
              cursor: pointer;
              text-align: center;
              line-height: 85px;
              text-decoration: none;
              &:hover{
                background-color: burlywood;
              }
              &:active{
                color:#fff
              }
            }
        }
    }
    .right {
      height: 100%;
      flex: 5;
      background-color: #ccc;
    }
}
</style>
