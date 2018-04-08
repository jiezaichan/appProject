<template>
	<div>
		
		<navBar :title="title"></navBar>
		<div class="demo-content">
			<mu-tabs :value="activeTab" @change="handleTabChange" class="demo-tab">
			    <mu-tab value="tab1" title="top50"/>
			    <mu-tab value="tab2" title="正在热映"/>
			    <mu-tab value="tab3" title="最新热映"/>
			</mu-tabs>
			
			<top v-show="activeTab === 'tab1'"></top>
			<hot v-show="activeTab === 'tab2'"></hot>
			<late v-show="activeTab === 'tab3'"></late>
		</div>
	</div>
</template>

<script>
	import navBar from "../../components/navbar.vue"
	import top from "./top.vue"
	import hot from "./hot.vue"
	import late from "./late.vue"
	export default {
		data(){
			return{
				title:'电影',
				activeTab: 'tab1'
			}
		},
		components: {
			navBar: navBar,
			top:top,
			hot:hot,
			late:late
		},
		methods:{
			handleTabChange (val) {
		      this.activeTab = val
		    }
		}
	}

</script>