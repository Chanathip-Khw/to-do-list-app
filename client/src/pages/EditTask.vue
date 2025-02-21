<template>
  <div class="edit-page">
    <header>
      <router-link to="/home">
        <img class="go-back" src="../assets/images/arrowback.svg" />
      </router-link>
      <div>Edit Your Task</div>
      <img class="menu" src="../assets/images/menu.svg" />
    </header>

    <form class="task-detail" @submit.prevent="saveChanges" v-if="task.name">
      <TaskName v-model="task.name" />
      <CategorySelector
        :categories="categories"
        :selectedCategory="task.category"
        @update:selectedCategory="task.category = $event"
      />
      <DateSelector v-model="task.date" />
      <div class="time">
        <TimeSelector v-model="task.startTime" label="Start Time" />
        <TimeSelector v-model="task.endTime" label="End Time" />
      </div>
      <PrioritySelector
        :priorities="priorities"
        :selectedPriority="task.priority"
        @update:selectedPriority="task.priority = $event"
      />
      <DescriptionBox v-model="task.description" />
      <button class="save-button" type="submit">Save Changes</button>
    </form>

    <p v-else>Loading...</p>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import TaskName from "../components/create/TaskName.vue";
import CategorySelector from "../components/create/CategorySelector.vue";
import DateSelector from "../components/create/DateSelector.vue";
import TimeSelector from "../components/create/TimeSelector.vue";
import PrioritySelector from "../components/create/PrioritySelector.vue";
import DescriptionBox from "../components/create/DescriptionBox.vue";

export default {
  name: "EditTask",
  components: {
    TaskName,
    CategorySelector,
    DateSelector,
    TimeSelector,
    PrioritySelector,
    DescriptionBox,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const taskId = Number(route.params.id); 

    const task = ref({
      id: taskId,
      name: "",
      category: "",
      date: "",
      startTime: "",
      endTime: "",
      priority: "",
      description: "",
    });

    const categories = ref(["Dailytasks", "Work", "Learning", "Groceries"]);
    const priorities = ref(["Low", "Medium", "High"]);

    onMounted(() => {
      setTimeout(() => {
        task.value = {
          id: taskId,
          name: "Mock Task",
          category: "Work",
          date: "2025-02-18",
          startTime: "09:00",
          endTime: "10:00",
          priority: "High",
          description: "This is a mock task for editing.",
        };
      }, 500);
    });

    const saveChanges = () => {
      router.push("/home");
    };

    return {
      task,
      categories,
      priorities,
      saveChanges,
    };
  },
};
</script>

<style scoped>
.edit-page {
  margin: 50px 30px;
}

header {
  display: flex;
  justify-content: space-between;
}

header div {
  font-weight: 700;
}

form {
  margin-top: 50px;
}

form .time {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

form .save-button {
  margin-top: 40px;
  padding: 10px 50px;
  background-color: #9747ff;
  color: white;
  border: none;
}
</style>
