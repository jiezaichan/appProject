<template>
	<mu-grid-list class="gridlist-demo">

	    <mu-grid-tile>
	      <img src=""/>
	      <span slot="title"></span>
	      <span slot="subTitle"></span>

	    </mu-grid-tile>
	  </mu-grid-list>
</template>

<script>

	export default {
		data(){
			imglist:[{}]
		},
		mounted:function(){
			this.getImg()
		},
		methods:{
			getImg(){
				this.$http.get("https://gank.io/api/data/福利/10/1").then(respones=>{
					console.log(respones.body)
				})
			}
		}
	}

</script>