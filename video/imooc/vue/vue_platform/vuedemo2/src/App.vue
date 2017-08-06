<template>
  <div>
    <componentA v-for="(value, key) in objList" key="key "></componentA>
  </div>
</template>

<script>
import componentA from './components/a'
export default {
  //components: {componentA},
  components: {
    componentA: componentA
  },
  data: function() {
    return {
      objList: {
        name: 'apple',
        price: 34,
        color: 'red',
        weight: 14
      }
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
