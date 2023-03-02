<template>
  <div :class="backgroundTypeClass" class="tag">
    {{ type }}
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      default: "fire",
    },
  },
  data() {
    return {
      defaultTypes: [
        "grass",
        "poison",
        "water",
        "fire",
        "electric",
        "ground",
        "fairy",
        "normal",
        "flying",
        "default",
      ],
    };
  },
  computed: {
    backgroundTypeClass() {
      if (this.defaultTypes.includes(this.type)) {
        return `bg-type__${this.type}`;
      } else {
        return "bg-type__default";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 16px;
  border-radius: 8px;
  text-transform: uppercase;
  color: white;
  font-weight: 600;
  font-size: 8px;
}
</style>
