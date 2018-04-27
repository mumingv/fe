<template>
	<div class="daily">
		<div class="daily-menu">
			<div class="daily-menu-item"
				:class="{ on: type === 'recommend' }">每日推荐</div>
			<div class="daily-menu-item"
				:class="{ on: type === 'daily' }"
				@click="showThemes = !showThemes">主题日报</div>
			<ul v-show="showThemes">
				<li v-for="item in themes">
					<a :class="{ on: (item.id === themeId) && (type === 'daily') }"
						@click="handleToTheme(item.id)"
					>{{ item.name }}</a>
				</li>
			</ul>
		</div>
		<div class="daily-list">
			<Item></Item>
		</div>
		<daily-article></daily-article>
	</div>
</template>
<script>
	// 这里的util.js中的.js可以省略
	import $ from './libs/util';

	export default {
		data () {
			return {
				themes: [],
				showThemes: true,
				type: 'recommend',
				// 文章列表
				list: [],
				themeId: 0
			}
		},
		methods: {
			getThemes () {
				// http://news-at.zhihu.com/api/4/themes
				$.ajax.get('themes').then(res => {
					this.themes = res.others;
				});
			},
			handleToTheme (id) {
				// 改变菜单分类
				this.type = 'daily';
				// 设置当前点击子类的主题日报id
				this.themeId = id;
				// 清空中间栏的数据
				this.list = [];
				// 获取新菜单分类下的数据
				// http://news-at.zhihu.com/api/4/theme/13
				$.ajax.get('theme/' + id).then(res => {
					this.list = res.stories.filter(item => item.type != 1);
				});
			}
		},
		mounted () {
			// 初始化时调用
			this.getThemes();
		}
	}
</script>