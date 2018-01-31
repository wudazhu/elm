<template>
<div>
   <ul>
        <li>
        	<router-link :to="{name:'Index'}">
            	<p><i class="icon iconfont icon-changyonglogo40" style="font-size:24px"></i></p>
            	<p>首页</p>
        	</router-link>
        </li>
        <li>
        	<router-link :to="{name:'find'}">
	            <p><i class="icon iconfont icon-faxian"></i></p>
	            <p>发现</p>
        	</router-link>
        </li>
        <li>
        	<router-link :to="{name:'indent'}">
            <p><i class="icon iconfont icon-dingdan"></i></p>
            <p>订单</p>
        	</router-link>
        </li>
        <li>
        	<router-link :to="{name:'mine'}">
            <p><i class="icon iconfont icon-wode"></i></p>
            <p>我的</p>
        	</router-link>
        </li>
   </ul>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: ''
    }
    
  },
     
}
</script>


<style scoped>
 


</style>