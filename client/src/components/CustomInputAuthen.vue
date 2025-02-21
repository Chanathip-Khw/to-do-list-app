<template>
  <div class="input-container">
    <slot name="input-slot">
      <input
        v-bind="$attr"
        :type="type"
        :value="modelValue"
        @input="updateValue($event)"
        :placeholder="placeholder"
      />
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, emit } from "vue";

export default defineComponent({
  name: "CustomInput",
  props: {
    modelValue: {
      type: [String, Number] as PropType<string | number>,
      required: true,
    },
    type: {
      type: String as PropType<string>,
      default: "text",
    },
    placeholder: {
      type: String as PropType<string>,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const updateValue = (event: Event) => {
      const value = (event.target as HTMLInputElement).value
      emit('update:modelValue', value)
    }

    return { updateValue }
  },
});
</script>

<style scoped>
.input-container {
width: 100%;

}

input {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid rgba(117, 117, 117, 0.3);
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.3);
}

input:focus {
  border-color: black;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.4);
}
</style>
