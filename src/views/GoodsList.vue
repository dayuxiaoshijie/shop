<template class='goodslistvue';>
<div>
  <VueHeader></VueHeader>
<div class="nav-breadcrumb-wrap">
  <div class="container">
    <!-- <nav class="nav-breadcrumb">
      <a href="/">首页</a>
      <span>商品列表</span>
    </nav> -->
    <VueBread>
    <template v-slot:bread>
        <a href="/">首页</a>
        <span>商品列表</span>
    </template>
    </VueBread>
  </div>
</div>
<div class="accessory-result-page accessory-page">
  <div class="container">
    <div class="filter-nav">
      <span class="sortby">排序:</span>
      <a href="javascript:void(0)" class="default cur">默认</a>
      <a href="javascript:void(0)" class="price">价格 <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
      <a href="javascript:void(0)" class="filterby stopPop">过滤规则</a>
    </div>
    <div class="accessory-result">
      <!-- filter -->
      <div class="filter stopPop" id="filter">
        <dl class="filter-price">
          <dt>价格:</dt>
          <dd><a href="javascript:void(0)">All</a></dd>
          <dd>
            <a href="javascript:void(0)">0 - 100</a>
          </dd>
          <dd>
            <a href="javascript:void(0)">100 - 500</a>
          </dd>
          <dd>
            <a href="javascript:void(0)">500 - 1000</a>
          </dd>
          <dd>
            <a href="javascript:void(0)">1000 - 2000</a>
          </dd>
        </dl>
      </div>

      <!-- search result accessories list -->
      <div class="accessory-list-wrap">
        <div class="accessory-list col-4">
          <ul>
            <li>
              <div class="pic">
                <a href="#"><img src="static/9.jpg" alt=""></a>
              </div>
              <div class="main">
                <div class="name">XX</div>
                <div class="price">999</div>
                <div class="btn-area">
                  <a href="javascript:;" class="btn btn--m">加入购物车</a>
                </div>
              </div>
            </li>
            <li>
              <div class="pic">
                <a href="#"><img src="static/3.jpg" alt=""></a>
              </div>
              <div class="main">
                <div class="name">XX</div>
                <div class="price">1000</div>
                <div class="btn-area">
                  <a href="javascript:;" class="btn btn--m">加入购物车</a>
                </div>
              </div>
            </li>
            <li>
              <div class="pic">
                <a href="#"><img src="static/7.jpg" alt=""></a>
              </div>
              <div class="main">
                <div class="name">XX</div>
                <div class="price">500</div>
                <div class="btn-area">
                  <a href="javascript:;" class="btn btn--m">加入购物车</a>
                </div>
              </div>
            </li>
            <li>
              <div class="pic">
                <a href="#"><img src="static/6.jpg" alt=""></a>
              </div>
              <div class="main">
                <div class="name">XX</div>
                <div class="price">2499</div>
                <div class="btn-area">
                  <a href="javascript:;" class="btn btn--m">加入购物车</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- 调用遮罩层组件，绑定属性传递给子元素-->
<modal :isshow="show" @close="testshow"></modal>
  <!-- 调用底部组件 -->
  <VueFooter></VueFooter>
</div>
</template>

<script>
//es6倒入css样式
import '../assets/css/base.css';
import '../assets/css/product.css'
//倒入头部公共组件
import VueHeader from '@/components/VueHeader'
import VueFooter from '@/components/VueFooter'
import VueBread from '@/components/VueBread'
import Modal from '@/components/Modal'
export default {
    data(){
      return {
        show:true
      }
  },
    methods:{
        testshow(){
          this.show = false;
        }
    },
   // 声明组件
  components:{
    //声明头部组件
    VueHeader,
    //声明底部组件
    VueFooter,
    //声明面包屑组件
    VueBread,
    Modal
  }
}
</script>

<style scoped>
    /* 倒入css,这是一种倒入方式，还可以直接用es6进行导入
    @import url('../assets/css/base.css');
    @import url('../assets/css/product.css'); */
</style>