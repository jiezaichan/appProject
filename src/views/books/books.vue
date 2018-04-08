<template>
	<div>
		<navBar :title="title"></navBar>
		<div class="demo-content">
			<mu-row gutter class="demo-book-list">
			    <mu-col width="33" tablet="50" desktop="33" v-for="item in booklist">
					<img @click='bookDetail(item.book.id)' width="85%" :src="item.book.image" alt="">
					<p class="text-left">{{item.book.title}}</p>
			    </mu-col>
			</mu-row>
			<div class="text-center"><mu-circular-progress v-show='loading' :size="40" /></div>
		</div>
	</div>
</template>

<script>
	
	import navBar from "../../components/navbar.vue"
	export default {
		data(){
			return{
				booklist:[],
				title:'书籍',
				loading:true
			}
		},
		mounted:function(){
			this.getData()
		},
		methods:{
			
			getData(){

				this.$http.jsonp('https://api.douban.com/v2/book/user/alex1504/collections').then(respones=>{
					this.booklist=respones.body.collections;
					this.loading=false
				})
			},
			bookDetail(id){
				this.$router.push({
					name:'bookDetail',
					params:{
						id:id
					}
				})
			}

		},
		components:{
			navBar:navBar
		}
	}

</script>