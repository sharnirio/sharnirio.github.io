var app = new Vue({
  el: '#app',
  data: {
    inputValue: "",
    allCheck: false,
    todos: [{ text: 'Изучить JavaScript', compleate: false, disable: true }, ],
  },
  methods: {
    addTask() {
      this.todos.push({ text: this.inputValue, compleate: false, disable: true });
      this.inputValue = "";
    },
    removeTask(index) {
      this.todos.splice(index, 1);
    },
    removeAllCompleateTask() {
      this.todos = this.todos.filter(function(el) {
        return !el.compleate;
      });;
    },
    checkAllTask() {
      if (!this.allCheck) {
        this.todos.map(function(elem) {
          return elem.compleate = true;
        })
      } else {
        this.todos.map(function(elem) {
          return elem.compleate = false;
        })
      }
    },
    editTask(index) {
        this.todos[index].disable = false;
    }
  }
})