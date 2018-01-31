<template>
<div id="app">
     <div class="header">
           <span><i class="icon iconfont icon-zuojiantou"></i></span>
           <span>{{msg}}</span>
           <span></span>
    </div>
     
<div class="section" :class="{o:display}">
<div class="he">		
<div class="quan">
         <ul class="ul">
			 <!-- :to="{name:'Liebiaos',params:{fid:item.id}}" -->
                 
					 <li v-for="item in lists"  @click="gotoDetail(item.restaurant_category_ids)">
						 <span class="yi"> {{item.name}} </span>
					</li>
					
				 </ul>
				 <div class="xiala">  <i class="icon iconfont icon-sanjiaodown"> </i></div>
</div>

<div class="sai">
	<ul style="position:relative">
     <li v-on:click="display=!display">
			 <span >综合排序</span>
			 <span><i class="icon iconfont icon-sanjiaodown" style="font-size:12px"></i></span>
      
	  <!-- 显示隐藏 -->
	  <div class="zuo" :class="{zuo2:!display}" >
           <div class="bai" >
                   <ul>
					   <li>综合排序</li>
					   <li>销量最高</li>
					   <li>起送价最低</li>
					   <li>配送最快</li>
				   </ul>
		   </div>
	  </div>


	</li>
		 <li>
			 <span>距离最近</span>
		 </li>
		 <li>
			 <span><i class="icon iconfont icon-viphuiyuanhuangguan" style="font-size:12px;color:orange"></i></span>
			 <span>会员领红包</span>
		 </li>
		 <li v-on:click="shai=!shai">
			 <span>筛选</span>
			 <span><i class="icon iconfont icon-shaixuan"></i></span>

			 <div class="sx" :class="{zuo2:!shai}">
				<ul>
					<li>配送方式</li>
                    <li>蜂鸟传送</li>
					<li>优惠活动</li>
				</ul>
			 </div>
		 </li>
		 </ul>
	</div>
</div>




<div>
	    <liebiaos class="top"/>
</div>

</div>
</div>      
</template>

<script>
import axios from 'axios';
import Liebiaos from './liebiaos'
export default {
  name:'liebiao',
  data () {
    return {
			msg: '美食',
			lists:null,
			display:false,
			shai:false,
  }
},
   components: {
      Liebiaos,
  },
	methods: {
		gotoDetail(ids) {
			console.log(this);
			this.$router.history.push({name:'liebiaos', params:{fids: ids}});
		},

	},
	mounted() {
		console.log(this);
		console.log(this.$route.params.fid);
		var id = this.$route.params.fid;
		axios.get(`/restapi/shopping/v2/foods_page/sift_factors?entry_id=${id}&longitude=116.407173&latitude=39.90469&terminal=h5`)
		.then((res)=>{
			console.log(res);
      this.lists=res.data;
            
		})
	}



}

</script>
	
<style scoped>
@import "//at.alicdn.com/t/font_556216_a9nmrs5aqrm5cdi.css";
.o{overflow: hidden;height:100%;width:100%;}
.he{position: absolute;top:0.49rem;left:0;clear: both;width:100%;}
.quan{background:#00a7ff;overflow-y:hidden;position: relative;border-top:0.005rem solid rgb(153, 141, 141);}
.quan .ul{display: flex;white-space: nowrap;height:100%;align-items:center;padding:0 0.1rem;
color:rgb(204, 197, 197);overflow-x:auto;}
.quan ul li{height:100%;background:#00a7ff;border:none;padding:0.07rem 0.2rem 0.1rem 0;}

.quan ul li:nth-last-child(1){padding-right:0.5rem;}
.quan .xiala{position: absolute;right:0;top:0rem;height:0.4rem;line-height:0.4rem;text-align: center;width:0.45rem;
background:rgb(25, 150, 218);color:#fff;};
.top{padding-top:0.7rem;}

.yi{display: block;width:100%;height:100%;color:rgb(204, 197, 197);}
.er{border-bottom:2px solid #fff;color:#fff;}
.sai{height:0.35rem;border-bottom:1px solid #999}
.sai ul{height:0.35rem;border-bottom:1px solid #999;display: flex;width:100%;background:#fff;}
.sai li{flex:1;height:100%;display: flex;align-items: center;font-size:14px;justify-content: center;
color:#666;}

.zuo,.sx{width:100%;height:5rem;position:absolute;top:0.35rem;left:0;transition-duration: 0.5s;
background:rgba(0,0,0,.7)}
.zuo2,.sx2{transition-duration: 0.5s;background:rgba(0,0,0,0);overflow-y: hidden;height:0}
.zuo .bai{width:100%;height:2rem;background:#fff;}
.zuo .bai ul{display: flex;flex-direction: column;height:100%;width:100%;align-items: flex-start;
padding-left:0.2rem;}

.sx ul{display: flex;flex-direction: column;width:100%;align-items: flex-start;
padding-left:0.2rem;height:3rem; }
.sx ul li{width:100%;display: flex;justify-content: flex-start}
</style>