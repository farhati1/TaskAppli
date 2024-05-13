class Task {
  constructor(text, category) {
    this.text = text;
    this.category = category;
    this.completed = false;
  }
}

class Model {
  constructor() {
    if (!Model.instance) {
      this.tasks = [];
      Model.instance = this;
    }

    return Model.instance;
  }

  addTask(taskText, taskCategory, taskType) { 
    const task = new Task(taskText, taskCategory, taskType); 
    this.tasks.push(task);
  }

  toggleTaskCompletion(taskIndex) {
    this.tasks[taskIndex].completed = !this.tasks[taskIndex].completed;
  }

  getTasks() {
    return this.tasks;
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
  }
}

const modelInstance = new Model();
Object.freeze(modelInstance);

export default modelInstance;