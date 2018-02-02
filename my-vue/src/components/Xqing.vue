<template>
<div id="app">

<div class="section">
<div>
      <div class="jt">
		   <i class="icon iconfont icon-zuojiantou" style="font-size:25px"></i>
		   <div class="tu">
			   <img :src="'//fuss10.elemecdn.com/'+list.image_path+'.'+list.image_path.split('').slice(32,).join('')"/>
		   </div> 
	 </div>
	 <div class="zhu" @click="display=!display">
               <h3><span class="pin">品牌</span>{{list.name}}<i class="icon iconfont icon-sanjiaoright"></i></h3>
		       <p class="p1">{{list.rating}}&nbsp;&nbsp;月售{{list.recent_order_num}}单&nbsp;&nbsp; {{list.delivery_mode.text}}&nbsp;约{{list.order_lead_time}}分钟&nbsp;&nbsp;距离{{(list.distance/1000).toFixed(1)}}km</p>
		       <p class="p2">{{list.promotion_info}}</p>
    </div>
<!-- 显示隐藏 -->
    <div class="xian" v-if="display" @click="showMenu()">
              <div class="zong" >
                    <h3><span class="pin">品牌</span>{{list.name}}</h3>
					<ul class="zu">
						<li>
							<h5>{{list.rating}}</h5>
							<p>评分</p>
						</li>
						<li>
							<h5>{{list.recent_order_num}}</h5>
							<p>月售</p>
						</li>
						<li>
							<h5>{{list.delivery_mode.text}}</h5>
							<p>约{{list.order_lead_time}}分钟</p>
						</li>
						<li>
							<h5>{{list.piecewise_agent_fee.rules[0].fee}}元</h5>
							<p>配送费</p>
						</li>
						<li>
							<h5>{{(list.distance/1000).toFixed(1)}}km</h5>
							<p>距离</p>
						</li>
					</ul>
					<div class="gong">
						<span>—</span>
						<span>公告</span>
						<span>—</span>
					</div>
					<div class="zun">{{list.promotion_info}}</div>
			</div>
	</div>

     <div class="shou">
		 <span class="ss">{{list.activities[0].icon_name}}</span>
		 <span>{{list.activities[0].description}}</span>
		 <span style="margin-left:0.1rem">{{Math.floor(list.activities[0].attribute)}}个优惠</span>
		 <span ><i class="icon iconfont icon-sanjiaodown" style="font-size:12px"></i></span>
	 </div>
     
	 <div class="hong">
       <span><i class="icon iconfont icon-viphuiyuanhuangguan" style="font-size:12px;color:orange"></i></span>
	   <span>6元无门槛红包  领取</span>
	 </div>
</div>

<!-- 商品列表区 -->
<div class="big">
	 <div class="xx">
        <p>点餐</p>
		<p>评价</p>
		<p>商家</p>
	 </div>
  <div class="xia"> 
	 <div class="uz">
		 <ul>
			 <li v-for="item in list2">{{item.name}}</li>
		</ul>
	 </div>
	 <div class="cai">
	  <div v-for="item in list2">
        <div v-for="ite in item.food">
             <div>{{ite.name}}</div>
			 <div></div>
		</div>
     </div>
	 </div>
  </div>
</div>







</div>

<div class="footer">
      <div class="zuo">
		  <p>
			  <i class="icon iconfont icon-gouwuche"></i>
			  <span>1</span>
		 </p>
		  </div>
	  <div class="you">
              <div class="jiage">
                  <p>￥23.0</p>
				  <p class="p2">配送费￥5.5</p>
			  </div>
			  <div class="jie">
                   去结算
			  </div>
	  </div>
</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
	name: "Xqing",
	data: function() {
		return {
			list: null,
			list2:null,
			list3:null,
			display:false,
		}
	},
	methods:{
      showMenu:function(){
		  this.display=false;
	  }
	},
	mounted() {
		console.log(this);
		console.log(this.$route.params.fids);
		var id = this.$route.params.fids;
		axios.get(`restapi/shopping/restaurant/${id}?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification&terminal=h5&latitude=39.90469&longitude=116.407173`)
		.then((res)=>{
			console.log(res);
            this.list = res.data;
		})

		axios.get(`restapi/shopping/v2/menu?restaurant_id=${id}`)
		.then((res)=>{
			console.log(res);
			this.list2 = res.data;
			this.list3=this.list2.foots
            
		})

	}
}
</script>

<style scoped>
@import "//at.alicdn.com/t/font_556216_a9nmrs5aqrm5cdi.css";
    .section .jt{height:0.6rem;width:100%;background:rgb(184, 183, 183);padding:0.1rem;color:#fff;
	position: relative;}
    .section .jt .tu{position: absolute;height:0.65rem;border:0.005rem solid rgb(228, 225, 225);width:0.65rem;left:50%;margin-left:-0.32rem;top:0.18rem}
    .section .jt .tu img{display: block;height:100%}
    .section  .zhu{width:96%;margin:0 auto;margin-top:0.3rem;display: flex;flex-direction: column;
	align-items:center;color:#333;overflow: hidden}
    .section  .zhu .pin{font-size:12px;background:rgb(255, 255, 25);padding:0.02rem 0.05rem;margin-right:0.1rem;}
    .section  .zhu .p1{font-size:12px;}
    .section  .zhu .p2{width:2rem;font-size:12px;color:#999;white-space: nowrap;overflow: hidden;text-overflow: ellipsis}
    .section  .zhu p{margin-top:0.05rem;}
    .section .xian{position: fixed;width:100%;height:100%;background:rgba(0,0,0,.5);left:0;top:0;transition-duration: 1s;}
    .zong{width:92%;margin:0 auto;background:#fff;margin-top:1.5rem;
border-radius: 0.1rem;padding:0.15rem;transition-duration: 1s;}
    .zong2{height:0;transition-duration: 1s;overflow: hidden;}
	
    .section  .xian .zong h3{text-align: center}
    .section  .xian .zong .pin{font-size:12px;background:rgb(255, 255, 25);padding:0.02rem 0.05rem;margin-right:0.1rem;}
    .section  .xian .zong .zu{display: flex;width:100%;margin-top:0.15rem;}
	.section  .xian .zong .zu li{text-align: center;width:20%}
	.section  .xian .zong .zu li h5{font-size:15px;}
    .section  .xian .zong .zu li p{font-size:12px;color:#999;margin-top:0.05rem;}
    .section  .xian .zong .gong{font-size:12px;text-align: center;color:#999;margin-top:0.15rem}
    .section  .xian .zong .zun{font-size:14px;color:#333;margin-top:0.2rem}
    
	.section .shou{margin:0 auto;font-size:12px;color:#666;text-align: center;margin-top:0.1rem;border:0.005rem solid rgb(226, 220, 220);
	width:95%;padding:0.04rem}
    .section .shou .ss{background:green;color:#fff;padding:0rem 0.03rem;}
    .section .hong{background:rgb(245, 245, 84);width:1.3rem;font-size:12px;text-align: center;margin:0 auto;margin-top:0.1rem;padding:0.02rem 0;}
     
	.section .big{width:100%;height:100%;}
    .section .big .xx{width:100%;height:0.4rem;display: flex;border-bottom:0.005rem solid #999;margin-top:0.08rem}
	.section .big .xx p{flex:1;text-align: center;line-height:0.4rem;}
    .section .big .uz{height:100%;width:0.7rem;background:rgb(224, 220, 220);font-size:14px;}
	.section .big .uz ul{overflow-y:auto;height:100%;}
	.section .big .uz ul li{padding:0.1rem;border-bottom:1px solid rgb(179, 176, 176);}
    .section .big .xia{display: flex;}
	.section .big .xia .cai{background:goldenrod;flex:1;padding:0.1rem;}













	.footer{background:#666565;height:0.48rem;position: relative;display: flex}
	.footer .zuo{width:25%;height:100%}
	.footer .zuo p{position: absolute;top:-0.15rem;left:0.1rem;}
	.footer .zuo p .icon{font-size:50px;color:rgb(70, 66, 66);border:5px solid #999;border-radius:50%;}
	.footer .zuo p span{display: block;position: absolute;height:0.13rem;width:0.13rem;border-radius:50%;background:orangered;
	top:-0.03rem;left:0.35rem;line-height:0.13rem;text-align: center;color:#fff;font-size:12px}
	.footer .you{width:75%;height:100%;display:flex}
	.footer .you .jiage{height:100%;flex:2;color:#fff;display: flex;flex-direction: column;justify-content: center}
	.footer .you .jiage .p2{font-size:12px;color:#999}
	.footer .you .jie{height:100%;flex:1;background:rgb(46, 243, 46);text-align: center;line-height:0.48rem;
	color:#fff;}

</style>

