<template>
<div>
      <div class="dian" v-for="item in list">
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
                     <span><img :src="'//fuss10.elemecdn.com/'+item.restaurant.recommend.image_hash +'.png'"/></span>
                    <span class="ren">{{item.restaurant.recommend.reason}}</span>
                 </p>
                 <p class="er">
                     <i>
                    <span class="shou">首</span>
                    <span>{{list[0].restaurant.activities[0].description}}</span>
                    </i>
                    <i>4个活动<i class="icon iconfont icon-sanjiaodown"></i></i>
                </p>
                <p>
                    <span class="jian">减</span>
                    <span>{{list[0].restaurant.activities[1].description}}</span>
                </p>


             </div>
      </div>
 </div>   
</template>

<script>

import axios from 'axios';
import { Toast } from 'mint-ui';
export default {
  name:'shangjia',
  data () {
    return {
       list:null,
       display:true,
    }
  },
  mounted (){
    var that=this;
     console.log(that);
      axios.get('/restapi/shopping/v3/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5')
      .then(function (response) {
           console.log(response);
           that.list=response.data.items;
         })
  },


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
.shang .you .feng{background:rgb(7, 183, 206);color:#fff;margin-left:0.6rem;}
.shang .you p .qi{padding-right: 0.05rem;border-right:1px solid #999}
.shang .you p .qi2{padding-left:0.05rem;}
.shang .you .p2{display: flex;justify-content: space-between}

.xia{padding-left:0.6rem;}
.xia p{height:0.16rem;margin-top:0.08rem}
.xia p span img{height:0.1rem;}
.xia p .ren{font-size:12px;color:orangered}
.xia .yi{border-bottom:1px solid #999;height:0.25rem;line-height:0.25rem}
.xia p .shou{background:green;color:#fff;padding:0 0.02rem;border-radius: 0.02rem}
.xia .er{display: flex;justify-content: space-between}
.xia .er i .icon{font-size:12px;}
.xia p .jian{background:red;color:#fff;padding:0 0.02rem;border-radius: 0.02rem}
</style>
