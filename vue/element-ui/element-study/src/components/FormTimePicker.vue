<template>
	<div>
		<div class="box">
			<h3>基础用法</h3>
      <el-time-select
        v-model="value1"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }"
        placeholder="选择时间"
        @change="handleChange">
      </el-time-select>
		</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: ''
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
        console.log(this.value1);
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