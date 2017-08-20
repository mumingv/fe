<template>
  <div>
  	<h1>I'm apple.</h1>
  	<p>{{ this.$route.params.color }}</p>
  	<button @click="getParam">get param</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  	getParam() {
  		console.log(this.$route.params)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
