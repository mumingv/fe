<template>
	<div class="daily-article">
		<div class="daily-article-title">{{ data.title }}</div>
		<div class="daily-article-content" v-html="data.body"></div>
		<div class="daily-comments" v-show="comments.length">
			<span>评论（{{ comments.length }}）</span>
			<div class="daily-comment" v-for="comment in comments">
				<div class="daily-comment-avatar">
					<img :src="comment.avatar">
				</div>
				<div class="daily-comment-content">
					<div class="daily-comment-name">{{ comment.author }}</div>
					<!-- v-time是自定义指令 -->
					<div class="daily-comment-time" v-time="comment.time"></div>
					<div class="daily-comment-text">{{ comment.content }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	// v-time是自定义指令
	import Time from '../directives/time';
	import $ from '../libs/util';
	export default {
		// 自定义指令
		directives: {
			Time
		},
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
				data: {},
				comments: []
			}
		},
		methods: {
			getArticle () {
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

					// 获取评论
					this.getComments();
				});
			},
			getComments () {
				this.comments = [];
				$.ajax.get('story/' + this.id + '/short-comments').then(res => {
					this.comments = res.comments.map(comment => {
						// 将头像的图片地址转为代理地址
						comment.avatar = $.imgPath + comment.avatar;
						return comment;
					});
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