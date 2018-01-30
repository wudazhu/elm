<template>
<div id="app">
     <div class="header">
           <span><i class="icon iconfont icon-zuojiantou"></i></span>
           <span>{{msg}}</span>
           <span></span>
    </div>
     
<div class="section">
		
<div class="quan">
         <ul class="ul">
					 <li v-for="item in lists"  ><span class="yi" :class="{er:display}">{{item.name}}</span></li>
				 </ul>
				 <div class="xiala">  <i class="icon iconfont icon-sanjiaodown"></i></div>
		</div>

<div class="sai">
	<ul>
     <li>
			 <span>综合排序</span>
			 <span><i class="icon iconfont icon-sanjiaodown" style="font-size:12px"></i></span>
		 </li>
		 <li>
			 <span>距离最近</span>
		 </li>
		 <li>
			 <span><i class="icon iconfont icon-viphuiyuanhuangguan" style="font-size:12px;color:orange"></i></span>
			 <span>会员领红包</span>
		 </li>
		 <li>
			 <span>筛选</span>
			 <span><i class="icon iconfont icon-shaixuan"></i></span>
		 </li>
		 </ul>
	</div>




</div>
</div>      
</template>
<script href="../assets/js/xuan.js"></script>
<script>
import axios from 'axios';

export default {
  name:'liebiao',
  data () {
    return {
			msg: '美食',
			lists:null,
			display:false,
  }
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
.quan{height:0.4rem;background:#00a7ff;overflow-x:auto;}
.quan .ul{display: flex;white-space: nowrap;height:100%;align-items:center;padding:0 0.1rem;
color:rgb(204, 197, 197);}
.quan ul li{height:100%;background:#00a7ff;border:none;padding:0.07rem 0.2rem 0.1rem 0;}
.quan ul li:nth-last-child(1){padding-right:0.5rem;}
.quan .xiala{position: fixed;right:0;top:0.5rem;height:0.4rem;line-height:0.4rem;text-align: center;width:0.45rem;
background:rgb(25, 150, 218);color:#fff;};
.yi{display: block;width:100%;height:100%;color:rgb(204, 197, 197);}
.er{border-bottom:2px solid #fff;color:#fff;}
.sai{height:0.35rem;border-bottom:1px solid #999}
.sai ul{height:0.35rem;border-bottom:1px solid #999;display: flex;width:100%;}
.sai li{flex:1;height:100%;display: flex;align-items: center;font-size:14px;justify-content: center;
color:#666;}

</style>