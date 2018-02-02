<template>
<div>
    <div id="container">
         <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"  ref="loadmore">
      <div class="dian" v-for="item in list" v-lazy.container="item" style="font-size:12px">
             <div class="shang">
                 <div class="img"><img :src="'//fuss10.elemecdn.com/'+item.restaurant.image_path +'.'+item.restaurant.image_path.split('').slice(32,).join('')"/></div>
                 <div class="you">
                     <p class="p1">
                     <i class="i">品牌</i>
                     <b class="shou">{{item.restaurant.name}}</b>
                     </p>
                     <p> 
                         <b class="b"><span class="icon">
                             <i class="icon iconfont icon-wuxing"></i>
                             <i class="icon iconfont icon-wuxing"></i>
                             <i class="icon iconfont icon-wuxing"></i>
                             <i class="icon iconfont icon-wuxing"></i>
                             <i class="icon iconfont icon-wuxing"></i>
                        </span></b>
                         <span class="yue">{{item.restaurant.rating}}月售{{item.restaurant.recent_order_num}}单</span>
                         <span class="feng">蜂鸟传送</span>
                     </p>
                     <p class="p2"> 
                         <i>
                         <span class="qi">￥{{item.restaurant.float_minimum_order_amount}}起送</span>
                         <span class="qi2">配送费{{item.restaurant.float_delivery_fee}}</span>
                         </i>
                         <i>
                            <span>2.50km | {{item.restaurant.order_lead_time}}分钟</span>
                             </i>
                     </p>
                </div>
             </div>



             <div class="xia">
                 <p class="yi">
                     <!-- <span><img :src="'//fuss10.elemecdn.com/'+item.restaurant.recommend.image_hash +'.png'"/></span> -->
                    <span class="ren">{{item.restaurant.recommend.reason}}</span>
                 </p>
                 <p class="er">
                     <i>
                    <span class="shou">首</span>
                    <span>{{list[0].restaurant.activities[0].name}}</span>
                    </i>
                    <i>4个活动<i class="icon iconfont icon-sanjiaodown"></i></i>
                </p>
                <p>
                    <span class="jian">折</span>
                    <span>{{list[1].restaurant.activities[1].name}}</span>
                </p>
             
             </div>
          </div>
          </mt-loadmore>
      </div>
 </div>  
</template>

<script>

import axios from 'axios';
import { Toast } from 'mint-ui';
export default {
  name:'liebiaos',
  data () {
    return {
       list:null,
        offset:0,
    }
  },
   mounted (){
  
     console.log(this);
      axios.get(`restapi/shopping/v3/restaurants?latitude=39.90469&longitude=116.407173&keyword=&offset=${this.offset}&limit=8&extras[]=activities&extras[]=tags&terminal=h5&rank_id=&restaurant_category_ids[]=209&restaurant_category_ids[]=212&restaurant_category_ids[]=213&restaurant_category_ids[]=214&restaurant_category_ids[]=215&restaurant_category_ids[]=216&restaurant_category_ids[]=217&restaurant_category_ids[]=219&restaurant_category_ids[]=265&restaurant_category_ids[]=266&restaurant_category_ids[]=267&restaurant_category_ids[]=268&restaurant_category_ids[]=269&restaurant_category_ids[]=221&restaurant_category_ids[]=222&restaurant_category_ids[]=223&restaurant_category_ids[]=224&restaurant_category_ids[]=225&restaurant_category_ids[]=226&restaurant_category_ids[]=227&restaurant_category_ids[]=228&restaurant_category_ids[]=231&restaurant_category_ids[]=232&restaurant_category_ids[]=263&restaurant_category_ids[]=218&restaurant_category_ids[]=234&restaurant_category_ids[]=235&restaurant_category_ids[]=236&restaurant_category_ids[]=237&restaurant_category_ids[]=238&restaurant_category_ids[]=211&restaurant_category_ids[]=229&restaurant_category_ids[]=230&restaurant_category_ids[]=264`)
       .then((response)=>{
           console.log(response);
           this.list=response.data.items;
  
         })
  },
   methods: {
    loadTop() {
      console.log("loadTop");
      setTimeout(() => {
        Toast('数据重新加载完成');
        this.$refs.loadmore.onTopLoaded();
      }, 3000)
    },
    loadBottom() {
         setTimeout(() => {
        Toast('数据重新加载完成');
        // this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();

            if(this.loading){
              return
		  }
		  this.loading=true
         axios.get(`restapi/shopping/v3/restaurants?latitude=39.90469&longitude=116.407173&keyword=&offset=${this.offset}&limit=8&extras[]=activities&extras[]=tags&terminal=h5&rank_id=&restaurant_category_ids[]=209&restaurant_category_ids[]=212&restaurant_category_ids[]=213&restaurant_category_ids[]=214&restaurant_category_ids[]=215&restaurant_category_ids[]=216&restaurant_category_ids[]=217&restaurant_category_ids[]=219&restaurant_category_ids[]=265&restaurant_category_ids[]=266&restaurant_category_ids[]=267&restaurant_category_ids[]=268&restaurant_category_ids[]=269&restaurant_category_ids[]=221&restaurant_category_ids[]=222&restaurant_category_ids[]=223&restaurant_category_ids[]=224&restaurant_category_ids[]=225&restaurant_category_ids[]=226&restaurant_category_ids[]=227&restaurant_category_ids[]=228&restaurant_category_ids[]=231&restaurant_category_ids[]=232&restaurant_category_ids[]=263&restaurant_category_ids[]=218&restaurant_category_ids[]=234&restaurant_category_ids[]=235&restaurant_category_ids[]=236&restaurant_category_ids[]=237&restaurant_category_ids[]=238&restaurant_category_ids[]=211&restaurant_category_ids[]=229&restaurant_category_ids[]=230&restaurant_category_ids[]=264`)
     .then((response)=>{
           console.log(response);
           this.offset+=8;
           this.list=this.list.concat(response.data.items)
           
           this.loading=false
         })
         },3000)
    }
    }



}
</script>
<style scoped>
@import '//at.alicdn.com/t/font_556216_dvj5kziyoaoo5hfr.css';

.dian{width:96%;margin:0 auto;font-size:12px;color:#666;border-bottom:1px solid #999;padding:0.1rem 0}
.shang{display: flex;}
.shang .img{width:0.5rem;height:0.5rem;}
.shang .img img{width:100%;}
i{font-style: normal}
.shang .you{margin-left:0.1rem;flex:1}
.shang .you p{display: flex;align-items: center;margin-top:0.08rem;}
.shang .you .p1{margin-top:0;}
.shang .you .shou{font-size:16px;margin-left:0.1rem}
.shang .you .i{display: block;width:0.26rem;height:0.17rem;background:rgb(238, 238, 11);text-align: center;
font-style: normal;line-height:0.17rem}
.shang .you .icon{color:rgba(235, 235, 15, 0.815);font-size:8px;white-space: nowrap}
.shang .you .b{display: block;width:0.6rem;height:15px;overflow: hidden;display: flex;}
.shang .you .yue{margin-left:0.1rem;}
.shang .you .feng{background:rgb(7, 183, 206);color:#fff;margin-left:0.6rem;height:15px;}
.shang .you p .qi{padding-right: 0.05rem;border-right:1px solid #999}
.shang .you p .qi2{padding-left:0.05rem;}
.shang .you .p2{display: flex;justify-content: space-between}

.xia{padding-left:0.6rem;}
.xia p{height:0.16rem;margin-top:0.08rem}
.xia p span img{height:0.1rem;}
.xia p .ren{font-size:12px;color:orangered}
.xia .yi{border-bottom:1px solid #999;}
.xia p .shou{background:green;color:#fff;padding:0 0.02rem;border-radius: 0.02rem}
.xia .er{display: flex;justify-content: space-between}
.xia .er i .icon{font-size:12px;}
.xia p .jian{background:red;color:#fff;padding:0 0.02rem;border-radius: 0.02rem}

</style>
