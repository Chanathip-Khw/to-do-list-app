<template>
  <div class="description-box">
    <label for="description">Description</label>
    <textarea
      id="description"
      v-model="description"
      placeholder="Enter task description"
      @input="updateDescription"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DescriptionBox",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const description = ref(props.modelValue);

    const updateDescription = (event: Event) => {
      description.value = (event.target as HTMLTextAreaElement).value;
      emit("update:modelValue", description.value);
    };

    return {
      description,
      updateDescription,
    };
  },
});
</script>

<style scoped>
.description-box {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.description-box label {
  font-size: 14px;
  font-weight: 700;
}

textarea {
  font-family: Inter;
  border: 1px solid grey;
  border-radius: 8px;
  padding: 8px 15px;
  font-size: 12px;
  resize: vertical;
  min-height: 100px;
}
</style>
