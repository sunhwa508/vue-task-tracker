<template>
  <div class="container">
    <Header
      title="Task Tracker"
      :showAddTask="showAddTask"
      @toggle-add-task="toggleAddTask"
    />
    <div v-if="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks
      @toggle-reminder="toggleReminder"
      :tasks="tasks"
      @delete-task="deleteTask"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";

export interface ITasks {
  id?: string;
  text: string;
  day: string;
  reminder: boolean;
}

export default defineComponent({
  name: "App",
  components: { Header, Tasks, AddTask },
  data() {
    return {
      tasks: [] as ITasks[],
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    async addTask(task: ITasks) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();
      console.log(task);
      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id: string) {
      if (confirm("Are you sure")) {
        const res = await fetch(`/api/tasks/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("Error deleting task");
      }
    },
    async fetchTasks() {
      const res = await fetch("api/tasks");

      const data = await res.json();
      return data;
    },
    async fetchTask(id: string) {
      const res = await fetch(`api/tasks/${id}`);

      const data = await res.json();
      return data;
    },
    async toggleReminder(id: string) {
      const taskToToggle = await this.fetchTask(id);
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
      const res = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updTask),
      });
      const data = await res.json();

      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap");
* {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
