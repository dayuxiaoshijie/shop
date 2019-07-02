<template >
  <div class='ModalVue'>
      <div class="Modal">
          <!--v-bind:class="{'md-show':isMdShow}动态绑定类名，md-show,它的值就是isshow模型数据的值  -->
      <div class="md-modal modal-msg md-modal-transition" :class="{'md-show':isshow}">
        <div class="md-modal-inner">
          <!-- 弹框关闭 -->
          <div class="md-top">
            <button class="md-close" @click="btnclose">Close</button>
          </div>
          <!-- 弹框内数据 -->
          <div class="md-content">
            <div class="confirm-tips">
              数据1
            </div>
            <div class="btn-wrap">
                <a class="btn">数据2</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 
      灰色遮罩
      知识点： v-if 控制DOM（HTML代码不显示）  v-show 控制样式（通过display不显示）
      -->
      <div class="md-overlay" v-if="isshow" @click="btnclose"></div>
    </div>
  </div>
</template>

<script>
export default {
    //定义模型数据让遮罩框隐藏和显示
    props:["isshow"],//子接收父传递过来的值让他显示或者是隐藏
   //创建自定义的方法将点击的值传给父组件
   methods:{
       btnclose(){
           this.$emit('close')
       }
   },
    data(){
        return{
            //isshow:true
        }
    }
}
</script>

<style scoped>

</style>