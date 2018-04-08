<template>
	<mu-paper>
		<mu-bottom-nav :value="bottomNav" shift @change="handleChange">
			<mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"/>
			<mu-bottom-nav-item value="music" title="Music" icon="music_note"/>
			<mu-bottom-nav-item value="books" title="Books" icon="books"/>
			<mu-bottom-nav-item value="photos" title="Pictures" icon="photo"/>
		</mu-bottom-nav>
	</mu-paper>
</template>
<script>
	
	export default {
		name:'bottombar',
	  	data () {
	    	return {
		      	bottomNav: this.$route.name
	    	}
	  	},
	  	methods: {
	    	handleChange (val) {
	      		this.bottomNav = val
	    	}
	  	}
	}

</script>