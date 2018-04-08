<template>
	<div id="navbar">
		<mu-appbar title="Title">
		  <mu-icon-button icon="menu" slot="left"/>
		  <mu-flat-button label="expand_more" slot="right"/>
		  <mu-icon-button icon="expand_more" slot="right"/>
		</mu-appbar>
	</div>
</template>

<script>
	export default {
		
		name: 'navbar'

	}
</script>
