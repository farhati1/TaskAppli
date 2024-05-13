import View from './view.js';
import Model from './model.js';

// Importe tes classes Model et View ici si nécessaire

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        
        this.form = document.getElementById('form');
        this.taskInput = document.getElementById('task');
        this.form.addEventListener('submit', this.addTask.bind(this));
    }

    addTask(event) {
        event.preventDefault();
    
        const taskText = this.taskInput.value.trim();
    
        if (taskText) {
            this.model.addTask(taskText); 
            const task = this.model.tasks[this.model.tasks.length - 1]; 
            this.view.displayTask(task, this.model.tasks.length - 1, this.toggleTaskCompletion.bind(this), this.removeTask.bind(this)); // Affiche la tâche dans la vue
            this.taskInput.value = ''; 
        }
    }

    toggleTaskCompletion(task) {
        this.model.toggleTaskCompletion(task);
        // this.view.toggleTaskCompletion(task);
    }

    removeTask(index) {
    this.model.removeTask(index);
  
}
}


const app = new Controller(new Model(), new View());
