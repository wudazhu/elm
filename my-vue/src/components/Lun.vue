<template>
<div>

    <div class="swiper-container">
	  <div class="swiper-wrapper">
	    <div class="swiper-slide"  >

        <div class="xun">
           <a href="" style="display:block" v-for="item in list" class="a">
          <span><img :src="'//fuss10.elemecdn.com/'+item.image_hash +'.jpeg'"/></span>
          <span>{{item.name}}</span>
        </a>
        </div>
      </div>

      <div class="swiper-slide"  >
        <div class="xun">
           <a href="" style="display:block" v-if="list"  class="a">
          <span><img :src="'//fuss10.elemecdn.com/'+list[10].image_hash +'.jpeg'"/></span>
          <span>{{list[10].name}}</span>
        </a>
        </div>
	    </div>

	  </div>
     <div class="swiper-pagination"></div>
	</div> 

 </div>   
</template>

<script>

import axios from 'axios';
import Swiper from 'swiper';
import { Toast } from 'mint-ui';
export default {
  name:'lun',
  data () {
    return {
       list:null,
    }
  },
  mounted (){
    var that=this;
     console.log(that);
      axios.get('restapi/shopping/openapi/entries?latitude=39.90469&longitude=116.407173&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template')
      .then(function (response) {
           console.log(response);
           that.list=response.data[0].entries;

           that.$nextTick(function(){
            var mySwiper = new Swiper('.swiper-container',{
                pagination: {
                el: '.swiper-pagination',
                type: 'progress',
           },
        })
         		
           })
         })
      .catch(function (error) {
            console.log(error);
      });
  }

}
</script>
<style scoped>
  @import '../assets/css/swiper.min.css';
   .xun{display: flex;flex-wrap: wrap;height:1.25rem;overflow: hidden}
  .a{width:20%;display: flex;align-items: center;justify-content: center;}
  .a img{width:0.45rem;height:0.45rem;}
  .a span{display: block;font-size:12px;display: flex;justify-content: center}
  .swiper-pagination{color:red;height:0.1rem;}
</style>
