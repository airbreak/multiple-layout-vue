<template>
  <div id="app">
    <transition name="slide-left">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
        </keep-alive>
    </transition>
    <transition name="slide-left">
      <router-view v-if="!$route.meta.keepAlive"/>
    </transition>
    <div class="bottom-menu">
      <div>Home</div>
      <div>My</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.bottom-menu{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0,0,0,.1);
  div{
    flex:1;
  }
}
</style>
