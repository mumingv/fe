<template>
	<div>
    <div class="box">
      <h3>基础用法</h3>
  	  <el-checkbox v-model="checked">备选项</el-checkbox>
    </div>
    <div class="box">
      <h3>禁用状态</h3>
      <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
      <el-checkbox v-model="checked2" disabled>备选项2</el-checkbox>
    </div>
    <div class="box">
      <h3>多选框组</h3>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="box">
      <h3>indeterminate 状态</h3>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="box">
      <h3>可选项目数量的限制（无效）</h3>
      <el-checkbox-group v-model="checkedCities1" :min="1" :max="2">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="box">
      <h3>按钮样式（无效）</h3>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkboxGroup1">
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
  const cityOptions = ['北京', '上海', '广州', '深圳'];
  export default {
    data () {
      return {
        checked: false,
        checked1: false,
        checked2: true,
        checkList: ['复选框 A', '选中且禁用'],
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        checkedCities1: ['上海', '北京'],
        checkboxGroup1: ['上海'],
      };
    },
    methods: {
      handleCheckAllChange(event) {
        this.checkedCities = event.target.checked ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };
</script>

<style scoped>
div.box {
  border: 1px dashed green;
  padding-bottom: 20px;
}
</style>