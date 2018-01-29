<template>
	<div class="time_limit">
		<div class="title">
			<h3>限时好礼</h3>
			<p>金币换豪礼</p>
		</div>
		<ul>
			<li v-for="item in list">
				<img :src="'https://fuss10.elemecdn.com/'+item.image_hash
+'.jpeg'">
				<i>{{item.corner_marker}}</i>
				<p>{{item.title}}</p>
				<p><span>{{item.points_required}}金币</span><del v-if="item.original_price!=0">￥{{item.original_price}}</del></p>
			</li>
		</ul>
		<a>查看更多</a>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: 'time_limit',
		data: function() {
			return {
				list: []
			}
		},
  
		mounted () {
			axios.get("/restapi/member/gifts/suggest")
			.then((res)=>{
				console.log(res);
				if(res.data.length>3){
					res.data.length=3
				}
				this.list = res.data;
				console.log(this.list)
			})
		}
	}
</script>

<style>	
	.time_limit{
		margin-bottom: 0.1rem;
		overflow: hidden;
		background: #fff;
	}
	.title{
		width: 100%;
		text-align: center;
		padding: 0.15rem 0 0.1rem;
	}
	.title p{
		font-size: 0.10rem;
		color: #999;
	}
	.time_limit ul{
		padding: 0 2%;
		overflow: hidden;
	}
	.time_limit ul li{
		float: left;
		width: 32%;
		position: relative;
	}
	.time_limit ul li img{
		width: 90%;
		margin-left: 5%;
	}
	.time_limit ul li i{
		background: #413d3c;
		color: #fff;
		font-style: normal;
		padding:0.01rem 0.02rem;
		font-size: 0.1rem;
		position: absolute;
		left: 0.05rem;
		top:0;
	}
	.time_limit ul li p{
		font-size: 0.12rem;
		padding:0 0.05rem ;
		color: 3333;
		line-height: 0.22rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.time_limit ul li p:nth-of-type(2) del{
		color: #aaa;
		font-size: 0.1rem;
	}
	.time_limit ul li p:nth-of-type(2) span{
		color: #ff5339;
	}
	.time_limit a{
		width: 100%;
		height: 0.45rem;
		display: block;
		text-align: center;
		line-height: 0.45rem;
		color: #999;
		font-size: 0.12rem;
	}
</style>