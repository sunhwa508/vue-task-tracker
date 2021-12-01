<template>
  <div v-if="showAddTask">
    <AddTask @add-task="addTask" />
  </div>
  <Tasks @toggle-reminder="toggleReminder" :tasks="tasks" @delete-task="deleteTask" />
</template>

<script lang="ts">
import Tasks from "/src/components/Tasks.vue";
import AddTask from "/src/components/AddTask.vue";

export interface ITasks {
  id?: string;
  text: string;
  day: string;
  reminder: boolean;
}

export default {
  name: "Home",
  props: {
    showAddTask: Boolean,
  },
  components: { Tasks, AddTask },
  data() {
    return {
      tasks: [] as ITasks[],
    };
  },
  methods: {
    async addTask(task: ITasks): Promise<void> {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id: string): Promise<void> {
      if (confirm("Are you sure")) {
        const res = await fetch(`/api/tasks/${id}`, {
          method: "DELETE",
        });
        res.status === 200 ? (this.tasks = this.tasks.filter(task => task.id !== id)) : alert("Error deleting task");
      }
    },
    async fetchTasks(): Promise<ITasks[]> {
      const res = await fetch("api/tasks");

      const data = await res.json();
      return data;
    },
    async fetchTask(id: string): Promise<ITasks> {
      const res = await fetch(`api/tasks/${id}`);

      const data = await res.json();
      return data;
    },
    async toggleReminder(id: string): Promise<void> {
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

      this.tasks = this.tasks.map(task => (task.id === id ? { ...task, reminder: data.reminder } : task));
    },
  },
  async created(): Promise<void> {
    this.tasks = await this.fetchTasks();
  },
};
</script>
