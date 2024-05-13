export default class View {
    constructor() {
        this.ul = document.getElementById('list'); 
    }

    displayTasks(tasks, toggleTaskCompletion, removeTask) {
        this.ul.innerHTML = ''; // Efface toutes les tâches existantes
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => {
  toggleTaskCompletion(index);
  if (task.completed) {
    removeTask(index);
    li.remove();
  }
});
            li.appendChild(checkbox);
            li.append(task.text);
            li.style.color = this.getColorForCategory(task.category); 
            this.ul.appendChild(li);
        });
    }

    getColorForCategory(category) {
        switch (category) {
            case 'travail': return 'red';
            case 'maison': return 'blue';
            case 'divers': return 'green';
            default: return 'black';
        }
    }
}