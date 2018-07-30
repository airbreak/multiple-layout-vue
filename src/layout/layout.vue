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

<style scoped>
</style>
