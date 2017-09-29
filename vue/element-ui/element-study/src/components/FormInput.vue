<template>
	<div>
		<div class="box">
			<el-input v-model="input" placeholder="请输入内容"></el-input>
		</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			input: ''
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