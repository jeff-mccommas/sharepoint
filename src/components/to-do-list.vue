<template>
  <div class="container" id="todo">
    <section class="panel">
      <input type="checkbox" id="mark-all" @click="selectAll" :checked="areAllSelected">
      <input
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="What do you need to do?"
        autofocus
        class="text-input"
      >
      <button @click="clearList">Clear List</button>
    </section>

    <section class="list">
      <ul class="list-item">
        <li v-for="(task,index) in tasks" :key="`task-${index}`" :class="{done: isChecked(task)}">
          <input type="checkbox" class="checkbox" @click="check" v-model="task.checked">

          <input
            type="text"
            v-if="task === editingTask"
            v-auto-focus
            class="text-input"
            @keyup.enter="endEditing(task)"
            @blur="endEditing(task)"
            v-model="task.text"
          >

          <label
            for="checkbox"
            v-if="task !== editingTask"
            @dblclick="editTask(task)"
          >{{ task.text }}</label>

          <button class="delete" @click="removeTask(task)">X</button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  el: '#todo',
  name: 'ToDoList',
  directives: {
    autofocus: {
      inserted(el) {
        el.focus();
      }
    }
  },
  data: {
    newTask: '',
    tasks: [
      {
        text: 'This is an example task. Delete or add your own',
        checked: false
      }
    ],

    editingTask: {}
  },

  computed: {
    areAllSelected: function() {
      return (
        this.tasks.every(function(task) {
          return task.checked;
        }) && this.tasks.length > 0
      );
    }
  },
  methods: {
    addTask: function() {
      var task = this.newTask.trim();
      if (task) {
        this.tasks.push({ text: task, checked: false });
        this.newTask = '';
      }
    },

    removeTask: function(task) {
      var index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    },

    editTask: function(task) {
      this.editingTask = task;
    },

    endEditing: function(task) {
      this.editingTask = {};
      if (task.text.trim() === '') {
        this.removeTask(task);
      }
    },

    clearList: function() {
      this.tasks = [];
    },

    selectAll: function(task) {
      var targetValue = this.areAllSelected ? false : true;
      for (var i = 0; i < this.tasks.length; i++) {
        this.tasks[i].checked = targetValue;
      }
    },

    check: function(task) {
      task.checked = true;
    },

    isChecked: function(task) {
      return task.checked;
    }
  }
};
</script>
  <style>
/* .panel,
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  padding: 10px;
  border-bottom: 1px solid #efefef;
  background-color: #e7e8eb;
} */

.text-input {
  border: 1px solid #dedede;
  padding-left: 10px;
  width: 70%;
  height: 35px;
  color: #555;
}
</style>
