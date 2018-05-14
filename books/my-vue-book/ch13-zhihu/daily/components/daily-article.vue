<template>
	<div class="daily-article">
		<div class="daily-article-title">{{ data.title }}</div>
		<div class="daily-article-content" v-html="data.body"></div>
	</div>
</template>
<script>
	import $ from '../libs/util';
	export default {
		// 父组件传递的变量
		props: {
			id: {
				type: Number,
				default: 0
			}
		},
		// 组件自己的变量
		data () {
			return {
				data: {}
			}
		},
		methods: {
			getArticle() {
				$.ajax.get('news/' + this.id).then(res => {
					// 将文章的图片地址替换为代理地址，如：
					// 修改前：src="http://pic1.zhimg.com/70/3d299003fca892d24ef9b8c09630fa2c_b.jpg"
					// 修改后：src="http://127.0.0.1:8011/img/http://pic1.zhimg.com/70/3d299003fca892d24ef9b8c09630fa2c_b.jpg"
					res.body = res.body.replace(/src="http/g, 'src="' + $.imgPath + 'http');
					// https链接
					res.body = res.body.replace(/src="https/g, 'src="' + $.imgPath + 'https');
					this.data = res;

					// 返回文章顶端
					window.scrollTo(0, 0);
				});
			}
		},
		// 子组件监控父组件传递的ID有没有变化，有变化的话则获取文章内容
		// 参考：https://cn.vuejs.org/v2/api/#watch
		watch: {
			id (val) {
				if(val) this.getArticle();
			}
		}
	}
</script>