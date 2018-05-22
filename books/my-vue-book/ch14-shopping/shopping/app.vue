<template>
	<div class="total">
		<product :info="info"></product>
	</div>
</template>
<script>
	// 导入组件
	import Product from './components/product.vue';

	export default {
		data () {
			return {
				info: {
					id: 1,
					name: 'AirPods',
					brand: 'Apple',
					image: 'http://ordfm6aah.bkt.clouddn.com/shop/1.jpeg',
					sales: 10000,
					cost: 1288,
					color: '白色'
				}
			}
		},
		components: {
			Product
		},
		methods: {
			handleClick (e) {
				console.log(e);
			}
		}
	}
</script>
<style scoped>
	.total {
		/*width: 600px;*/
		/*height: 300px;*/
	}
</style>