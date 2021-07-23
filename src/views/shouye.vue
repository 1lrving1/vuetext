<!--
 * @Author: your name
 * @Date: 2021-07-21 09:11:00
 * @LastEditTime: 2021-07-22 16:55:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test01\src\views\shouye.vue
-->
<template>
  <div>
    <i class="fa fa-bath"></i>
    <div v-for="(items,index) in info" :key=index>
      {{items.description}}:
      <span v-html="items.symbol"></span>{{items.rate_float | capitalize}}
    </div>
  </div>
</template>

<script>
import '../../font-awesome-4.7.0/css/font-awesome.min.css'
import { request } from '../request/request.js'

export default {
  data () {
    return {
      info: ''
    }
  },
  filters: {
    capitalize (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    this.getlist()
  },
  methods: {
    async getlist () {
      let path = 'https://api.coindesk.com/v1/bpi/currentprice.json'
      let res = await request(path)
      if (res.status === 200) {
        this.info = res.data.bpi
      }
    }
  }
}
</script>
