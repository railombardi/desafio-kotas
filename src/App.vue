<template>
  <div id="app">
    <div class="nav">
      <SvgIcons icon="kotas" :width="80" :height="24" />
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import SvgIcons from "./components/SvgIcons.vue";

export default {
  components: { SvgIcons },
};
</script>
<style lang="scss" scoped>
#app {
  font-family: $font-mulish;
  overflow: hidden;
  height: 100%;
  .nav {
    background: white;
    padding: 12px 0 8px 16px;
    box-shadow: 0px 1px 1px #e1e1e1;
    @include mobile() {
      display: flex;
      justify-content: center;
    }
  }
  .container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding-top: 18px;
    @include desktop() {
      padding-right: 36px;
    }
  }
}
</style>
