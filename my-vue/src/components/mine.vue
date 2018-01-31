<template>
	<div class="app">
	    <div class="header"><i class="icon iconfont icon-zuojiantou"></i><p>我的发现</p><span></span></div>
	    <div class="section">
	    	<div class="login">
	    		<router-link :to="{name:'login'}">
		    		<span></span>
		    		<h2>登录/注册</h2>
		    		<p>登录后享受更多优惠</p>
		    		<i>></i>
				</router-link>
	    	</div>
	    	<ul>
	    		<li>红包</li>
	    		<li>金币</li>
	    	</ul>
	    	<p class="gap"><i class="icon iconfont icon-dingwei"></i><span>我的地址</span><i class="icon iconfont icon-sanjiaoright"></i></p>
	    	<p><i class="icon iconfont icon-gouwuche"></i><span>金币商城</span><i class="icon iconfont icon-sanjiaoright"></i></p>
	    	<p class="gap"><i class="icon iconfont icon-msnui-gift"></i><span>分享拿五元现金</span><i class="icon iconfont icon-sanjiaoright"></i></p>
	    	<p><i class="icon iconfont icon-wodekefu"></i><span>我的客服</span><i class="icon iconfont icon-sanjiaoright"></i></p>
	    	<p><i class="icon iconfont icon-changyonglogo40"></i><span>下载饿了么APP</span><i class="icon iconfont icon-sanjiaoright"></i></p>
	    </div>
	    <Footer class="footer"/>

  </div>
</template>

<script>
	import Footer from './Footer'
	import axios from 'axios';
	export default {
	  name: 'Index',
	  data: function() {
		return {
			list: []
		}
	  },
	     components: {
	      Footer,
	  },
	  
	}
</script>

<style scoped>
	*{
		text-decoration: none;
		
	}
	.app{
		display: flex;
		flex-direction: column;
		height: 100%;
		font-size:16px;
		overflow: hidden;
	}
	.section{
		background: #f5f5f5;
	}
	.section .login{
		background: #00a7ff;
		padding: 0.25rem 0.15rem;
		color: #fff;
		position: relative;
	}
	.section .login h2{
		color: #fff;
	}
	.section .login p{
		font-size: 0.12rem;
		color: #fff;
	}
	
	.section .login i{
		position: absolute;
		right: 0.15rem;
		top: 40%;
		font-style: normal;
		color: #fff;
	}
	.section ul{
		background: #fff;
		overflow: hidden;
	}
	.section ul li{
		float: left;
		width: 50%;
		padding: 0.15rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #666;
		font-size: 0.1rem;
		border-right: 1px solid #EDEDED;
		border-bottom: 1px solid #EDEDED;
	}
	.section>p{
		height: 0.45rem;
		padding: 0 0.15rem;
		display: flex;
		line-height: 0.45rem;
		align-items: center;
		justify-content: space-between;
		background: #fff;
		border-bottom: 1px solid #EDEDED;
	}
	.section>p i{
		font-size: 0.16rem;
	}
	.section>p i:nth-of-type(2){
		color: #999;
	}
	.section>p:nth-of-type(1) i:nth-of-type(1){
		color: #2395FF;
	}
	.section>p:nth-of-type(2) i:nth-of-type(1){
		color: #4CD964;
	}
	.section>p:nth-of-type(3) i:nth-of-type(1){
		color: #FF5339;
	}
	.section>p:nth-of-type(4) i:nth-of-type(1){
		color: #2395FF;
	}
	.section>p:nth-of-type(5) i:nth-of-type(1){
		color: #2395FF;
	}
	.section>p span{
		flex: 1;
	}
	.section>p i:nth-of-type(1){
		margin-right: 0.05rem;
		
	}
	.section .gap{
		margin-bottom: 0.1rem;
	}
</style>