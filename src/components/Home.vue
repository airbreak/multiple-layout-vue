<template>
  <div>
    <el-menu :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">运营</el-menu-item>
      <el-menu-item index="3">司管</el-menu-item>
      <el-menu-item index="4">风控</el-menu-item>
      <el-menu-item index="5">客服</el-menu-item>
    </el-menu>
    <a :href="link">查看详情</a>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      link:'#/home/detail/1'
    }
  },
  methods: {
    handleSelect(key, keyPath){
      console.log(key,keyPath)
    }
  }
}
</script>

<style scoped lang="sass">

</style>
