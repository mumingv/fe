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
		<!-- 注意：ref 被用来给元素或子组件注册引用信息。 -->
		<!-- 参考：https://cn.vuejs.org/v2/api/#ref -->
		<div class="daily-list" ref="list" @scroll="handleScroll">
			<template v-if="type === 'recommend'">
				<div v-for="list in recommendList">
					<div class="daily-date">{{ formatDay(list.date) }}</div>
					<Item
						v-for="item in list.stories"
						:data="item"
						:key="item.id"
						@click.native="handleClick(item.id)"
					></Item>
				</div>
			</template>
			<template v-if="type === 'daily'">
				<!-- 原始事件使用.native修饰符，否则会被认为是Item组件的自定义事件click -->
				<Item
					v-for="item in list"
					:data="item"
					:key="item.id"
					@click.native="handleClick(item.id)"
				></Item>
			</template>
		</div>
		<!-- 第三列：文章详情 -->
		<daily-article :id="articleId"></daily-article>
		
	</div>
</template>
<script>
	// 这里的util.js中的.js可以省略
	import $ from './libs/util';
	// 文章列表中的单篇文章，这里的item.vue中的.vue不能省略
	import Item from './components/item.vue';
	// 文章详情页组件
	import dailyArticle from './components/daily-article.vue';

	export default {
		components: {
			Item,
			dailyArticle
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
				// 接口（http://127.0.0.1:8010/news/before/20180508）返回的date值
				date: $.prevDay($.getTodayTime() + 86400000),
				isLoading: false,
				themeId: 0,
				// 文章ID
				articleId: 0
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
				// this.date = $.prevDay($.getTodayTime() + 86400000);
				this.getRecommendList();
			},
			getRecommendList() {
				this.isLoading = true;
				// 获取每日推荐的数据
				// http://127.0.0.1:8010/news/before/20180510
				$.ajax.get('news/before/' + this.date).then(res => {
					this.date = res.date;
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
			},
			// 处理中栏滚动事件
			handleScroll() {
				// 获取相应的dom节点
				const $list = this.$refs.list;
				if (this.type === 'daily' || this.isLoading) return;
				// 1. Element.scrollTop属性：表示内容垂直滚动的像素数
				//    参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTop
				// 2. Element.scrollHeight属性：表示元素内容高度的度量
				//    参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollHeight
				// 3. Element.clientHeight属性：表示元素的可视化高度
				//    参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/clientHeight
				if ($list.scrollTop + $list.clientHeight >= $list.scrollHeight) {
					this.getRecommendList();
				}
			},
			// 点击文章标题，显示文章内容
			handleClick(id) {
				this.articleId = id;
			}
		},
		mounted () {
			// 初始化时调用
			this.getThemes();
			this.getRecommendList();
		}
	}
</script>