<template>
	<div class="app">
	    <div class="header"><i class="icon iconfont icon-zuojiantou"></i><p>订单</p><span></span></div>
	    <div class="section">
	    	
	    </div>
	    <Footer class="footer"/>
	</div>
</template>

<script>
	import Header from './Header'
	import Footer from './Footer'
	import axios from 'axios';
	export default {
	  name: 'Index',
	  data: function() {
		return {
	//		msg:"发现",
			list: []
		}
	  },
	  components: {
	      Header,
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
</style>