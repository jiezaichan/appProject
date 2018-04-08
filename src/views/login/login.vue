<template>
	<div class="login-wap">
		<h2>用户登录</h2>
		<form @submit.prevent='onsubmit'>
			<mu-text-field  hintText="用户名" fullWidth v-model='name' />
			<mu-text-field  hintText="密码" fullWidth type='password' v-model='passwords' />
			<br><br><br>
		    <mu-raised-button type='submit' label="提交" fullWidth primary/>
		</form>
	</div>
</template>
<script>
	
	export default {
	  
		data(){
			return {
				name:"",
				passwords:""
			}
		},
		methods:{
			onsubmit(){
				console.log(this.name+'|'+this.passwords)
				this.$router.push({
					name: 'movie'
				});
			}
		}
	}

</script>