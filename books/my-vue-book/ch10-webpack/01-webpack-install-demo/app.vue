<template>
	<div>Hello {{ name }}</div>
</template>
<script>
	export default {
		// 等同于：
		// data: function () {}
		data () {
			return {
				name: 'Vue.js'
			}
		}
	}
</script>
<style scoped>
	div {
		color: #f60;
		font-size: 24px;
	}
</style>