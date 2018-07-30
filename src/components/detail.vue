<template>
  <div>
    {{id}}
  </div>
</template>

<script>
export default {
  data() {
    return {
        id:0
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.id = this.$route.params.id
    })
  }
}
</script>

<style scoped>
</style>
