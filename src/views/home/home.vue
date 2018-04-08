<template>
	<div id="home">
		<router-view />

		<mu-bottom-nav :value="bottomNav" shift @change="handleChange" class="demo-foot">
	      <mu-bottom-nav-item to='/movie' value="movie" title="Movies" icon="ondemand_video"/>
	      <mu-bottom-nav-item to='/music' value="music" title="Music" icon="music_note"/>
	      <mu-bottom-nav-item to='/books' value="books" title="Books" icon="books"/>
	      <mu-bottom-nav-item to='/photos' value="photos" title="Pictures" icon="photo"/>
	    </mu-bottom-nav>
	</div>
</template>

<script>
	export default {
	  	data(){
			return {
				bottomNav: this.$route.name
			}
	  	},
	  	methods:{
			handleChange(val){
				console.log(val)
				this.bottomNav=val
			}
	  	}
	}
</script>