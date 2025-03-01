<template>
  <div :class="['category-card', categoryClass]">
    <div class="image-container">
      <div class="circle">
        <img :src="categoryImage" alt="category image" class="category-image" />
      </div>
    </div>
    <div class="text-container">
      <div class="category-name">{{ category }}</div>
      <div class="task-count">{{ count }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, } from "vue";
import dailytasksImg from "../assets/images/tasks/dailytasks.svg";
import workImg from "../assets/images/tasks/work.svg";
import learningImg from "../assets/images/tasks/learning.svg";
import groceriesImg from "../assets/images/tasks/groceries.svg";

export default defineComponent({
  props: {
    category: { type: String, required: true },
    count: { type: Number, required: true },
  },
  computed: {
    categoryClass(): string {
      return this.category.toLowerCase().replace(" ", "-");
    },
    categoryImage(): string {
      switch (this.category.toLowerCase()) {
        case "dailytasks":
          return dailytasksImg;
        case "work":
          return workImg;
        case "learning":
          return learningImg;
        case "groceries":
          return groceriesImg;
        default:
          return "";
      }
    },
  },
  categoryImage(): string {
    switch (this.category.toLowerCase()) {
      case "dailytasks":
        return dailytasksImg;
      case "work":
        return workImg;
      case "learning":
        return learningImg;
      case "groceries":
        return groceriesImg;
      default:
        return "";
    }
  },
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
</style>
