<template>
	<div class="recommend">
		<dl>
			<dt>
				<h3>为你推荐</h3>
				<span>你的口味，我都懂得</span>
			</dt>
			<dd v-for="item in list">
				<img :src="'https://fuss10.elemecdn.com/'+item.food.image_path+'.jpeg'" />
				<b>{{item.food.name}}</b>
				<p><span>月售{{item.food.month_sales}}份</span>&nbsp;&nbsp;&nbsp;<span>好评率{{item.food.satisfy_rate}}%</span></p>
				<p class="price"><span>￥<i>{{item.food.price}}</i></span><del>￥{{item.food.original_price}}</del></p>
				<p>{{item.food.restaurant_name}}</p>
			</dd>
		</dl>
		<a>查看更多</a>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: 'Recommend',
		data: function() {
			return {
				list: []
			}
		},
  
		mounted () {
			axios.get("/restapi/shopping/v1/find/recommendation?latitude=39.90469&longitude=116.407173&offset=0&limit=6")
			.then((res)=>{
//				console.log(this);
//				console.log(res);
				this.list = res.data.items;
//				console.log(this.list)
			})
		}
	}
</script>

<style scoped>
	.recommend{
		margin-bottom: 0.1rem;
		overflow: hidden;
	}
	dl{
		background: #fff;
		overflow: hidden;
	}
	dt{
		width: 100%;
		height: 0.55rem;
		text-align: center;
		padding-top: 0.1rem;
	}
	dt span{
		font-size: 0.06rem;	
		line-height: 0.12rem;
		height: 0.06rem;
		display: block;
		color: #999;
	}
	dd{
		display: inline-block;
		width: 46%;
		margin: 0 2% 2% 2%;
		border: 1px solid #eee;
	}
	dd img{
		width: 100%;
	}
	dd b{
		font-size: 0.13rem;
		padding: 0 5%;
		width: 90%;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		display: block;
		height: 0.18rem;
	}
	dd p{
		padding: 0 5%;
		width: 90%;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		color: #999;
		font-size: 0.07rem;
		display: flex;
		line-height: 0.18rem;
		height: 0.18rem;
	}
	dd .price span{
		color: #ff6000;
	}
	dd .price span i{
		font-size: 0.12rem;
		margin-right: 0.05rem;
	}
	.recommend a{
		width: 100%;
		height: 0.45rem;
		display: block;
		text-align: center;
		line-height: 0.45rem;
		color: #999;
		font-size: 0.12rem;
		background: #fff;
	}

</style>