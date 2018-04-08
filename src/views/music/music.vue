<template>
	
	<div>
		<navBar :title='title'></navBar>
		<div class="demo-content">
			<mu-row>
			    <mu-col width="50" tablet="50" desktop="25">
					<img src="../../assets/img/new_music.jpg" width="100%" alt="">
			    </mu-col>
			    <mu-col width="50" tablet="50" desktop="25">
					<img src="../../assets/img/soar_music.jpg" width="100%" alt="">
			    </mu-col>
			    <mu-col width="50" tablet="50" desktop="25">
					<img src="../../assets/img/original_music.jpg" width="100%" alt="">
			    </mu-col>
			    <mu-col width="50" tablet="50" desktop="25">
					<img src="../../assets/img/new_music.jpg" width="100%" alt="">
			    </mu-col>
			  </mu-row>
		  </div>
	</div>
	

</template>

<script>
	
	import navBar from "../../components/navbar.vue"

	export default {
		data(){
			return{
				title:'音乐'
			}
		},
		components:{
			navBar:navBar
		}	
	}

</script>