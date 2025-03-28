<template>
  <div :class="['category-card', categoryData.class]">
    <div class="image-container">
      <div class="circle">
        <img :src="categoryData.image" alt="category image" class="category-image" />
      </div>
    </div>
    <div class="text-container">
      <div class="category-name">{{ category }}</div>
      <div class="task-count">{{ count }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import dailytasksImg from "../assets/images/tasks/dailytasks.svg";
import workImg from "../assets/images/tasks/work.svg";
import learningImg from "../assets/images/tasks/learning.svg";
import groceriesImg from "../assets/images/tasks/groceries.svg";

// Props
const props = defineProps<{
  category: string;
  count: number;
}>();

// Computed property for category data
const categoryData = computed(() => {
  const categoryMap: Record<string, { class: string; image: string }> = {
    dailytasks: { class: "dailytasks", image: dailytasksImg },
    work: { class: "work", image: workImg },
    learning: { class: "learning", image: learningImg },
    groceries: { class: "groceries", image: groceriesImg },
  };

  // Normalize category string
  const key = props.category.toLowerCase();
  return categoryMap[key] || { class: "default", image: "" };
});
</script>

<style scoped>
.category-card {
  padding: 16px;
  border-radius: 12px;
}

.image-container {
  display: flex;
  justify-content: start;
  margin-bottom: 10px;
}

.circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.text-container {
  display: flex;
  justify-content: space-between;
  color: black;
  font-weight: bold;
}

.category-image {
  width: 50%;
  height: 50%;
  object-fit: cover;
}

.category-card.dailytasks {
  background-color: rgba(151, 71, 255, 0.6);
}

.category-card.work {
  background-color: #cff3e9;
}

.category-card.learning {
  background-color: #b4c4ff;
}

.category-card.groceries {
  background-color: rgba(237, 190, 125, 0.6);
}

.category-card.default {
  background-color: #f0f0f0;
}
</style>
