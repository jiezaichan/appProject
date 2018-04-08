<template>
	<div class="demo-tab-content">
		<mu-list>
		    <mu-list-item  :title="item.title" v-for="item in movieList" @click='goDetail(item.id)' :key="item.id">
		      <mu-avatar slot="leftAvatar">
		      	<img :src="item.images.medium" alt="">
		      </mu-avatar>
		      <span slot="describe">{{item.directors[0].name}}</span>
		      <div slot="describe">{{movieDescrib(item.genres,item.year,item.rating.average)}}</div>
		      <mu-icon value="more_vert" slot="right"/>
		    </mu-list-item>

		  </mu-list>
		<mu-infinite-scroll class="load-size" :scroller="scroller" :loading="loading" loadingText="" @load="loadMore"/>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				movieList:[],
				loading:true,
				start:10,
				scroller:null
			}
		},
		mounted:function(){
			this.scroller = this.$el;
			this.loadData()
		},
		methods:{
			
			loadData(){
			
				this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?count=10&start='+this.start+'').then(response => {
					
					console.log(response.body.subjects);
					if(response.body.subjects.length!=0){
						this.movieList=this.movieList.concat(response.body.subjects);
					 	this.start+=10
					}
					this.loading=false;	

				}, response => {
					
				});
			},
			loadMore(){
				if(!this.loading){
					this.loading=true;
					this.loadData()
				}
			},
			movieDescrib(arr,year,average){
				var htm='';
				arr.forEach(function(item){
					htm+=item
				})
				htm+="("+year+")"+"("+average+"分)";
				return htm
			},
			goDetail(id){
				this.$router.push({
					name: 'movieDetail',
					params: {
						id: id
					}
				})
			}	
			
		}

	}
</script>