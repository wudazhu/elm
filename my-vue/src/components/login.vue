<template>
	<div class="register">
		<img src="../assets/未标题-1.jpg">
		<p>
			<a @click="login=true" :class="{blue:login}">短信登录</a>
			<a @click="login=false" :class="{blue:!login}">密码登录</a>
		</p>
		<div class="note" v-if="login">
			<input type="text" placeholder="手机号" class="phone" />
			<button>获取验证码</button>
			<input type="text" placeholder="验证码" class="yzm" />
			<p class="hint">温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意
				<a>《用户服务协议》</a>
			</p>
			<input type="submit" value="登录" class="reg" />
			<p class="regard"><a>关于我们</a></p>
		</div>
		<div class="pass" v-else>
			<input type="text" placeholder="手机/邮箱/用户名" class="username" v-model="username" />
			<input type="password" placeholder="密码" class="pwd" v-model="pwd"  />
			<mt-switch v-model="conceal"></mt-switch>
			<input type="submit" value="登录" class="reg" @click="regist()"/>
			<p class="regard"><a>关于我们</a></p>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import { Switch } from 'mint-ui';

	export default {
	  name: 'login',
	  data: function() {
		return {
			login:true,
			conceal:false,
			username:"",
			pwd:"",
		}
	  },
	  methods:{
	  	regist:	function(){
	  		axios.post('/api/regist', {
			    username: this.username,
			    pwd: this.pwd
			})
			.then(function (response) {
			    console.log(response);
			})
			.catch(function (error) {
			    console.log(error);
			});
			val
	  	}
	  }
	  
	}
	
</script>

<style scoped>
	.register{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.register img{
		margin: 0.4rem 0;
	}
	.register>p a{
		margin: 0 0.15rem 0.1rem;
	}
	.register>p .blue{
		color: #2395ff;
		border-bottom:  2px solid #2395ff;
	}
	.register div{
		flex-direction: column;
		align-items: center;
		width: 80%;
		margin: 0 auto;
		margin-top: 0.1rem;
		position: relative;
		
	}
	.register div input{
		width: 100%;
		display: block;
		height: 0.40rem;
		margin-bottom: 0.1rem;
		border: 1px solid #ddd;
		border-radius: 0.04rem;
		padding-left: 0.1rem;
	}
	.register div label{
		position: absolute;
		right: 0.1rem;
		top: 0.56rem;
	}
	.register div button{
		background: #fff;
		border: 0;
		position: absolute;
		right: 0.1rem;
		top: 0.12rem;
		color: #999;
	}
	.register div .hint{
		font-size: 0.12rem;
		color: #999;
		margin-bottom: 0.3rem;
	}
	.register div .hint a{
		color: #2395ff;
	}
	.register div .reg{
		background: #4cd964;
		border: none;
		font-size: 0.14rem;
		color: #fff;
	}
	.register div>.regard{
		text-align: center;
		font-size: 0.1rem;
		margin: 0 auto;
	}
	.register div>.regard a{
		color: #999;
	}
</style>               