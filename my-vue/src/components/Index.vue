<template>
<div id="app">
    <div class="header">
      <p class="p1">
        <i class="icon iconfont icon-dingwei"></i>
        <b><span id="XSDFXPage">{{city}}{{district}}{{street}}{{streetNumber}}</span></b>
        </p>
      <p><a href="">
        <i class="icon iconfont icon-49"></i>
         <span>搜索商家、商品名</span>
        </a></p>
    </div>

    <div class="section">
      <lun/>
      <div class="xin">
        <img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/"/>
      </div>
      <div class="shang">
        <span class="yi"></span>
        <span>推荐商家</span>
        <span class="yi"></span>
      </div>

      <div class="">
     <shangjia/>
        </div>
    </div>




    <Footer class="footer"/>

  </div>
</template>

<script>

import axios from 'axios';
import Header from './Header'
import Lun from './Lun'
import Shangjia from './Shangjia'
import Footer from './Footer'

export default {
  name: 'Index',
  data () {
    return {
      city: '正在获取位置···',
      district:'',
      street:'',
    streetNumber:'',
 
    }
    
  },
     components: {
      Header,
      Lun,
      Shangjia,
      Footer
  },
 
  mounted(){
    //定位
   	var that = this;
	var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
      
			// 你地址解析
				var geoc = new BMap.Geocoder();  
			geoc.getLocation(r.point, function(rs){
				var addComp = rs.addressComponents;
				alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
				that.city = addComp.city;
        that.district=addComp.district;
        that.street=addComp.street;
        that.streetNumber=addComp.streetNumber;
			});   
		}
		else {
			alert('failed'+this.getStatus());
		}        
  },{enableHighAccuracy: true})
  


    var that=this;
     console.log(that);
      axios.get('restapi/shopping/openapi/entries?latitude=39.90469&longitude=116.407173&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template')
      .then(function (response) {
           console.log(response);
           that.lists=response.data[0].entries;
         })
      .catch(function (error) {
            console.log(error);
      });
  }
}
</script>

<style scoped>
#app .header{flex-direction: column;}
#app .header p{width:100%;}
#app .header p a{display: block;width:100%;height:0.36rem;background:#fff;line-height:0.36rem;
text-align: center;color:#666}
#app .header .p1{margin-top:0.05rem;margin-bottom:0.1rem;display: flex;}
#XSDFXPage{width:1.4rem;height:0.2rem;overflow: hidden;display: block;white-space: nowrap;
text-overflow: ellipsis;margin-left:0.05rem;}
.section .xin{margin-top:0.05rem;width:100%;text-align: center}
.section .xin img{width:96%;}
.section .shang{display: flex;justify-content: center;align-items: center;margin:0.2rem 0;}
.section .shang .yi{line-height:1px;border-top:1px solid #666;width:0.2rem;height:1px;margin:0 0.1rem}
</style>
