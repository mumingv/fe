<!-- 
info对象结构示例：
{
	id: 1,
	name: 'AirPods',
	brand: 'Apple',
	image: 'http://ordfm6aah.bkt.clouddn.com/shop/1.jpeg',
	sales: 10000,
	cost: 1288,
	color: '白色'
}
-->
<template>
	<div class="product">
		<router-link :to="'/product/' + info.id" class="product-main">
			<!-- 图片 -->
			<img :src="info.image">
			<!-- 名称 -->
			<h4>{{ info.name }}</h4>
			<!-- 背景色 -->
			<div class="product-color" :style="{ background: colors[info.color] }"></div>
			<!-- 价格 -->
			<div class="product-cost">￥ {{ info.cost }}</div>
			<!-- 右上角加入购物车 -->
			<!--
				事件：https://cn.vuejs.org/v2/api/#v-on
				事件修饰符：https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6
			-->
			<div class="product-add-cart" @click.prevent="handleCart">加入购物车</div>
		</router-link>
	</div>
</template>
<script>
	export default {
		props: {
			info: Object
		},
		data () {
			return {
				// 映射颜色和色值
				colors: {
					'白色': '#ffffff',
					'金色': '#dac272',
					'蓝色': '#233472',
					'红色': '#f2352e'
				}
			}
		}
	}
</script>
<style scoped lang="less">
	.product {
		/* 注意：一行4个，浮动布局*/
		width: 25%;
		float: left;
		&-main {
			/* 注意：display和overflow是关键属性 */
			display: block;
			overflow: hidden;
			margin: 16px;
			padding: 16px;
			border: 1px solid #dddee1;
			border-radius: 6px;
			background: #fff;
			text-align: center;
			position: relative;
		}
		&-main img {
			/* 注意：a标签中放图片需要设置图片宽度为100% */
			width: 100%;
		}
		& h4 {
			color: #222;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		&-main:hover h4 {
			color: #0070c9;
		}
		&-color {
			display: block;
			width: 16px;
			height: 16px;
			border: 1px solid #dddee1;
			border-radius: 50%;
			margin: 6px auto;
		}
		&-cost {
			color: #de4037;
			margin-top: 6px;
		}
		&-add-cart {
			display: none;
			padding: 4px 8px;
			background: #2d8cf0;
			color: #fff;
			font-size: 12px;
			border-radius: 3px;
			cursor: pointer;
			/* 注意：定位位置基于父元素padding的边界进行计算 */
			position: absolute;
			top: 5px;
			right: 5px;
		}
		&-main:hover &-add-cart {
			display: inline-block;
		}
	}
</style>