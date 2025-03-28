<template>
  <div class="task-card">
    <input type="checkbox" v-model="isComplete" class="complete-checkbox" />
    <div class="task-info">
      <div class="task-name">{{ task.name }}</div>
      <div class="task-time">{{ task.startTime }} - {{ task.endTime }}</div>
    </div>
    <div class="task-actions">
      <button class="edit-button" @click="navigateToEdit">
        <img :src="editImg" />
      </button>
      <button class="delete-button">
        <img :src="deleteImg" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import editImg from "../assets/images/edit.svg";
import deleteImg from "../assets/images/delete.svg";

// Props
const props = defineProps<{
  task: {
    id: string;
    name: string;
    startTime: string;
    endTime: string;
  };
}>();

// State
const isComplete = ref(false);

// Router
const router = useRouter();

// Methods
const navigateToEdit = () => {
  router.push(`/edit/${props.task.id}`);
};
</script>

<style scoped>
.task-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  border: 1px solid #d5d5d5;
  border-radius: 12px;
  margin-bottom: 15px;
}

.complete-checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(117, 117, 117, 0.77);
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  margin-left: 20px;
}

.complete-checkbox:checked {
  background-color: #4caf50;
  border-color: #4caf50;
}

.complete-checkbox:checked::after {
  content: "";
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.task-info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.task-name {
  font-weight: bold;
  font-size: 17px;
}

.task-time {
  font-size: 11px;
  color: #757575;
}

.task-actions button {
  background-color: white;
  padding: 10px;
}

.task-actions button:hover {
  border: 1px solid #ddd;
}

.task-actions img {
  width: 15px;
}
</style>
