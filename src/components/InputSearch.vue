<template>
  <label class="wrapper">
    <SvgIcons
      icon="search"
      class="input-search__icon"
      :width="13"
      :height="13"
    />
    <input :placeholder="placeholder" class="input-search" v-model="search" />
  </label>
</template>

<script>
import SvgIcons from "./SvgIcons.vue";
export default {
  components: { SvgIcons },
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      search: "",
    };
  },
  watch: {
    search(newVal) {
      this.$emit("input", newVal);
    },
  },
  created() {
    this.search = this.value;
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 48px;
  position: relative;
  padding-left: 7px;
  .input-search {
    background: #fff;
    border: 1px solid #e1e1e1;
    border-radius: 50px;
    width: 100%;
    padding: 13px 37px;
    @include mobile() {
      padding: 13px 31px;
    }
    &::placeholder {
      font-family: $font-mulish;
      font-weight: 400;
      font-size: 14px;
    }
    &:focus {
      outline: none;
    }
    &__icon {
      display: none;
      position: absolute;
      left: 20px;
      top: 14px;
      @include mobile() {
        display: block;
      }
    }
  }
}
</style>
