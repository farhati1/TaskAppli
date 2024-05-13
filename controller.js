import View from './view.js';
import modelInstance from './model.js';


class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.form = document.getElementById('form');
        this.taskInput = document.getElementById('task');
        this.categoryInput = document.getElementById('category');
        this.categoryFilter = document.getElementById('categoryFilter'); // Ajout d'un filtre de catégorie
        this.form.addEventListener('submit', this.addTask.bind(this));
        this.categoryFilter.addEventListener('change', this.filterTasks.bind(this)); // Ajout d'un gestionnaire d'événements pour le filtre de catégorie
    }

    addTask(event) {
        event.preventDefault();
    
        const taskText = this.taskInput.value.trim();
        const taskCategory = this.categoryInput.value;
    
        if (taskText) {
            this.model.addTask(taskText, taskCategory); 
            this.displayTasks(); // Affiche toutes les tâches après l'ajout d'une nouvelle tâche
            this.taskInput.value = ''; 
        }
    }

    displayTasks() {
        const tasks = this.model.getTasks();
        const filteredTasks = tasks.filter(task => task.category === this.categoryFilter.value || this.categoryFilter.value === 'all'); // Filtrer les tâches en fonction de la catégorie sélectionnée
        this.view.displayTasks(filteredTasks, this.toggleTaskCompletion.bind(this), this.removeTask.bind(this)); // Affiche les tâches filtrées
    }

    filterTasks() {
        this.displayTasks(); // Affiche les tâches chaque fois que le filtre de catégorie change
    }

    toggleTaskCompletion(task) {
        this.model.toggleTaskCompletion(task);
        this.displayTasks(); // Affiche les tâches après avoir basculé l'achèvement d'une tâche
    }

    removeTask(index) {
        this.model.removeTask(index);
        this.displayTasks(); // Affiche les tâches après avoir supprimé une tâche
    }
}

const app = new Controller(modelInstance, new View());