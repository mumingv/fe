<template>
	<div>
		<div class="box">
			<h3>基础用法</h3>
      <el-switch
        v-model="value1"
        on-text=""
        off-text=""
        @change="handleChange">
      </el-switch>
      <el-switch
        v-model="value2"
        on-color="#13ce66"
        off-color="#ff4949"
        @change="handleChange">
      </el-switch>
		</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  };
</script>

<style scoped>
div.box {
  border: 1px dashed green;
  padding: 20px;
}
</style>