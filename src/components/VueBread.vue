<template >
  <div class='Vuebread'>
      <nav class="nav-breadcrumb">
      <!-- <a href="/">首页</a> -->
      <!-- <span>商品列表</span>  这边直接用 插槽代替，因为这里的包含的名字是不一样的--> 
      <slot name="bread"></slot>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>