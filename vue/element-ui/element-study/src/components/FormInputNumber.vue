<template>
	<div>
		<div class="box">
			<h3>基础用法</h3>
			<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
		</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			num1: 1
		}
	},
	methods: {
		handleChange(value) {
			console.log(value);
		}
	}
}
</script>

<style scoped>
div.box {
  border: 1px dashed green;
  padding: 20px;
}
</style>