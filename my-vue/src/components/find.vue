<template>
	<div class="app">
	    <div class="header"><i class="icon iconfont icon-zuojiantou"></i><p>发现</p><span></span></div>
	    <div class="section">
	    	<ul class="activity">
		    	<li v-for="item in list">
		    		<img :src="'https://fuss10.elemecdn.com/'+item.main_pic_hash+'.jpeg'" />
		    		<p>{{item.title}}</p>
		    		<span>{{item.subtitle}}</span>
		    	</li>
	    	</ul>
	    	<div class="advertising">
	    		<img src="https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/">
	    	</div>
	    	<Recommend />
	    	<TimeLimit></TimeLimit>
	    </div>
	    <Footer class="footer"/>

  </div>
</template>
https://h5.ele.me/restapi/shopping/v1/find/recommendation?latitude=39.90469&longitude=116.407173&offset=0&limit=6
<script>
import Header from './Header'
import Footer from './Footer'
import Recommend from './Recommend'
import TimeLimit from './TimeLimit'
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
      Recommend,
      TimeLimit
   
  },
  mounted () {
	axios.get("/restapi/member/v1/discover?platform=1&block_index=0&latitude=39.90469&longitude=116.407173")
	.then((res)=>{
//		console.log(this);
//		console.log(res);
		this.list = res.data[1];
//		console.log(this.list)
	})
	}
}
</script>

<style scoped>
	
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
	.activity{

		background: #fff;
		overflow: hidden;
	}
	.activity li{
		float: left;
		width: 50%;
		height: 0.7rem;
		border-right: 1px solid #ededed;
		border-bottom: 1px solid #ededed;
		display: flex;
		overflow: hidden;
		position: relative;
		padding: 0.2rem  0.1rem;
		flex-direction: column;
	}
	.activity li img{
		width: 0.4rem;
		position: absolute;
		right: 0.1rem;
		bottom: 0.1rem;
	}
	
	.activity li:nth-of-type(1){
		height: 1.4rem;
	}
	.activity li:nth-of-type(1) img{
		width: 0.7rem;
	}
	.activity li p{
		color: rgb(245, 120, 93);
		padding-bottom: 0.025rem;
	}
	.activity li span{
		font-size: 0.06rem;
		color: #999;
		padding-bottom: 0.025rem;
	}
	.advertising img{
		width: 100%;
		margin: 0.1rem 0;
		
	}
</style>