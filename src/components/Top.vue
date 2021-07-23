<!--
 * @Author: your name
 * @Date: 2021-07-20 15:53:46
 * @LastEditTime: 2021-07-21 16:45:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test01\src\components\HelloWorld.vue
-->
<template>
  <div>
      <input v-model="text" @change="gettext">
      {{content}}
  </div>
</template>

<script>
export default {
  props: ['content'],
  data () {
    return {
      text: ''
    }
  },
  methods: {
    gettext () {
      this.$emit('settext', this.text)
    }
  }
}
</script>

<style scoped>
   div{
     background-color: aquamarine;
     height:100px;
     width:100%;
   }
</style>
