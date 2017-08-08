<template>
  <div>
    <ul>
      <li v-for="(item, index) in list">{{ item.name }} - {{ item.price }}</li>
    </ul>
    <input type="text" name="" v-model="myVal">
    {{ myVal }}
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data: function() {
    return {
      myVal: '',
      list: [
        {
          name: 'apple',
          price: 34
        },
        {
          name: 'banana',
          price: 56
        },
        {
          name: 'pear',
          price: 37
        }
      ]
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

.odd {
  display: none;
}
</style>
