<template>
  <div class="category-selector">
    <div style="text-align:left">Category</div>
    <div class="category-button-container">
      <button
        v-for="category in categories"
        :key="category"
        :class="{ selected: selectedCategory === category }"
        @click="handleSelectCategory(category)"
      >
        {{ category }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CategorySelector",
  props: {
    categories: {
      type: Array,
      required: true,
    },
    selectedCategory: {
      type: String,
      default: null,
    },
  },
  emits: ["update:selectedCategory"],
  setup(props, { emit }) {
    const handleSelectCategory = (category: string) => {
      emit("update:selectedCategory", category);
    };

    return {
      handleSelectCategory,
    };
  },
});
</script>

<style scoped>
.category-selector {
  margin-top: 30px;
}

.category-selector div {
  font-size: 14px;
  font-weight: 700;
}

.category-button-container {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.category-button-container button {
  background-color: rgba(151, 71, 255, 0.3);
  font-size: 10px;
  font-weight: 700;
  padding: 10px 30px;
}

.category-button-container button.selected {
  background-color: #9747ff;
  color: white;
  border: none;
}
</style>
