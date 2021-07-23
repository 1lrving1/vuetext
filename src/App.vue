<!--
 * @Author: your name
 * @Date: 2021-07-20 15:53:46
 * @LastEditTime: 2021-07-21 16:18:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test01\src\App.vue
-->
<template>
  <div id="app">
    <Top @settext="text" :content="msg"></Top>
    <Index />
  </div>
</template>

<script>
import Top from '@/components/Top'
import Index from '@/components/Index'

export default {
  name: 'App',
  components: {
    Index,
    Top
  },
  data () {
    return {
      flag: false,
      msg: 'top'
    }
  },
  methods: {
    text (val) {
      this.msg = val
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
</style>
