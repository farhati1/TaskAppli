

export default class Model {
   
    constructor() {
        this.tasks = [];
    }

    addTask(taskText) {
        const task = {
            text: taskText,
            completed: false
        }
        this.tasks.push(task);
    }

    toggleTaskCompletion(taskIndex) {
        this.tasks[taskIndex].completed = !this.tasks[taskIndex].completed;
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
    }
  }