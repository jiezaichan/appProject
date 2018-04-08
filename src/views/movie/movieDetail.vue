<template>
	<div>
		<mu-appbar :title="title" class="demo-header text-center">
		  <mu-icon-button icon="undo" slot="left" @click='back' />
		</mu-appbar>
		<div class='demo-content' style='bottom:0'>
			<mu-card  v-show='!loading'>
			  <mu-card-media :subTitle="originalTitle">
			    <img :src="img" />
			  </mu-card-media>
			  <mu-card-title :title="title" :subTitle="countries+'/'+year" />
			  <mu-card-text>{{summary}}</mu-card-text>
			  <mu-card-text class="text-center" style="border-top:1px #eee solid">导演：{{directors}}</mu-card-text>
			  
			</mu-card>
			<div class="text-center"><mu-circular-progress v-show='loading' :size="40" /></div>
		</div>
	</div>
</template>
<script>
	
	export default {
		data(){
			return{
				movieId: this.$route.params.id,
				img:'',
				title:'',
				summary:'',
				countries:'',
				year:'',
				originalTitle:'',
				directors:'',
				loading:true
			}
		},
		mounted:function(){
			this.render()
		},
		methods:{
			render(){
				this.$http.jsonp('https://api.douban.com/v2/movie/subject/' + this.movieId).then(response=>{
					this.img = response.body.images.medium;
					this.title = response.body.title;
					this.summary = response.body.summary;
					this.countries = response.body.countries[0];
					this.year = response.body.year;
					this.originalTitle = response.body.original_title;
					this.directors = response.body.directors[0].name;
					this.loading=false;
					console.log(response.body)

				})
				
			},
			back(){
				history.go(-1);
			}
		}
	}

</script>