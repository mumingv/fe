<template>
	<div>
		<div class="box">
			<h3>基础用法</h3>
      <div class="block">
        <span class="demonstration">默认</span>
        <el-slider v-model="value1" @change="handleChange"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">自定义初始值</span>
        <el-slider v-model="value2" @change="handleChange"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">隐藏 Tooltip</span>
        <el-slider v-model="value3" :show-tooltip="false" @change="handleChange"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">格式化 Tooltip</span>
        <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">禁用</span>
        <el-slider v-model="value5" disabled @change="handleChange"></el-slider>
      </div>
		</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      },
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