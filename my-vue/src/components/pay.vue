<template>
	<div class="app">
	    <div class="header"><i class="icon iconfont icon-zuojiantou" @click=" $router.go(-1)"></i><p>确认订单</p><span></span></div>
	    <div class="delivery">
	    	<div>
	    		<span>
	    			添加收货地址
	    		</span>
	    	</div>
	    	<p>送达时间<span>尽快送达(21:45送达)</span></p>
	    	<p>支付方式<span>在线支付</span></p>
	    </div>
		<div class="totalprice">
			<p class="totalprice2">￥<b></b></p>
			<p class="discounts">| 已优惠￥<span></span></p>
			<input type="button" value="去支付" />
		</div>
  </div>
</template>

<script>
	import axios from 'axios';
	export default {
	  name: 'pay',
	  data: function() {
		return {
		}
	  },
	  
	  
	}
</script>

<style scoped>
	.app{
		flex: 1;
		background: #F5F5F5;
	}
	.delivery div{
		width: 100%;
		padding: 0.2rem 0;
		border-bottom: 1px solid #2395FF;
		margin-bottom: 0.07rem;
		background: #fff;
	}
	.delivery div span{
		display: block;
		width: 1.5rem;
		height: 0.3rem;
		text-align: center;
		line-height: 0.28rem;
		color: #2395FF;
		margin: 0 auto;
		border: 2px solid #2395FF;
		border-radius: 0.15rem;
	}
	.delivery p{
		padding: 0.15rem;
		background: #fff;
		border-bottom: 1px solid #E9E9E9;
		display: flex;
		justify-content: space-between;
		font-size: 0.13rem;
		font-weight: bold;
	}
	.delivery p span{
		color: #2395FF;
	}
	.totalprice{
		width: 100%;
		height: 0.4rem;
		line-height: 0.4rem;
		padding-left: 0.1rem;
		display: flex;
		justify-content: space-between;
		position: fixed;
		bottom: 0;
		left: 0;
		background: rgba(0,0,0,0.6);
	}
	.totalprice .totalprice2{
		color: #fff;
		font-size: 0.14rem;
		padding-right: 0.05rem;
	}
	.totalprice .discounts{
		flex: 1;
		font-size: 0.1rem;
		color: #bbb;
	}
	.totalprice input{
		padding: 0 0.3rem;
		height: 100%;
		color: #fff;
		background: #4CD964;
		border: 0;
		font-size: 0.14rem;
	}
</style>