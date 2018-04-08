<template>
	<div>
		<mu-appbar :title="bookMes.title" class="demo-header text-center">
		  <mu-icon-button icon="undo" slot="left" @click='back' />
		</mu-appbar>
		<div class='demo-content' style='bottom:0'>
			<div class="demo-book-basic">
				<span class="img-wap fl"><img width="100%" :src="bookMes.image" alt=""></span>
				<div class="text-wap">
					<h3 v-text='bookMes.title'></h3>
					<span style="color:#009688" v-text='author(bookMes.author)'></span>
					<p>出版时间：{{bookMes.pubdate}}</p>
					<p>出版社：{{bookMes.publisher}}</p>

				</div>
			</div>
			<ul class='demo-book-tab'>
			    <li @click='showTabCont("tab1")' :class="activeTab === 'tab1'&&'active'">详情</li>
			    <li @click='showTabCont("tab2")' :class="activeTab === 'tab2'&&'active'">目录</li>
			</ul>
			  <div class="demo-book-cont" v-show="activeTab === 'tab1'" v-text="bookMes.summary"></div>
			  <div class="demo-book-cont" v-show="activeTab === 'tab2'">
			    <ul class="demo-catalog-list">
			    	<li v-for='item in catalog'>{{item}}</li>
			    </ul>
			  </div>
			<div class="text-center"><mu-circular-progress v-show='loading' :size="40" /></div>
		</div>
	</div>
</template>
<script>
	
	export default{
		data(){
			return{
				bookId:this.$route.params.id,
				bookMes:{},
				loading:true,
				activeTab:'tab1',
				catalog:[]
			}
		},
		mounted:function(){
			this.getData()
		},
		methods:{
			
			getData(){
				this.$http.jsonp('https://api.douban.com/v2/book/'+this.bookId).then(respones=>{
					console.log(respones.body);
					this.bookMes=respones.body;
					this.catalog=this.bookMes.catalog.split('\n');
					this.loading=false
				})
			},
			back(){
				history.go(-1)
			},
			author(arr){
				return arr.join(' ')
			},
			showTabCont(tab){
				this.activeTab=tab;
				console.log(this.activeTab)
			}

		}

	}

</script>