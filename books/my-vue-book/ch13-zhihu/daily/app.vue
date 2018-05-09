<template>
	<div class="daily">
		<!-- 第一列：导航 -->
		<div class="daily-menu">
			<div class="daily-menu-item"
				:class="{ on: type === 'recommend' }"
				@click="handleToRecommend"
			>每日推荐</div>
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
		<!-- 第二列：文章列表 -->
		<div class="daily-list">
			<template v-if="type === 'recommend'">
				<div v-for="list in recommendList">
					<div class="daily-date">{{ formatDay(list.date) }}</div>
					<Item
						v-for="item in list.stories"
						:data="item"
						:key="item.id"
					></Item>
				</div>
			</template>
			<template v-if="type === 'daily'">
				<Item
					v-for="item in list"
					:data="item"
					:key="item.id"
				></Item>
			</template>
		</div>
		<!-- <daily-article></daily-article> -->
	</div>
</template>
<script>
	// 这里的util.js中的.js可以省略
	import $ from './libs/util';
	// 文章列表中的单篇文章，这里的item.vue中的.vue不能省略
	import Item from './components/item.vue';

	export default {
		components: {
			Item
		},
		data () {
			return {
				themes: [],
				showThemes: true,
				type: 'recommend',
				// 每日推荐中的文章列表
				recommendList: [],
				// 主题日报中的文章列表
				list: [],
				// 日报毫秒级时间戳
				dailyTime: $.getTodayTime(),
				isLoading: false,
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
				console.log($.prevDay());
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
			},
			handleToRecommend() {
				console.log('func: handleToRecommend');
				this.type = 'recommend';
				this.recommendList = [];
				this.dailyTime = $.getTodayTime();
				this.getRecommendList();
			},
			getRecommendList() {
				this.isLoading = true;
				const prevDay = $.prevDay(this.dailyTime + 86400000);
				// 获取每日推荐的数据
				// http://127.0.0.1:8010/news/before/20180510
				$.ajax.get('news/before/' + prevDay).then(res => {
					this.recommendList.push(res);
					this.isLoading = false;
				});
			},
			// 转换为带汉字的月日
			formatDay (date) {
				let month = date.substr(4, 2);
				let day = date.substr(6, 2);
				if (month.substr(0, 1) === '0') month = month.substr(1, 1);
				if (day.substr(0, 1) === '0') day = day.substr(1, 1);
				return `${month} 月 ${day} 日`;
			}
		},
		mounted () {
			// 初始化时调用
			this.getThemes();
			this.getRecommendList();
		}
	}
</script>