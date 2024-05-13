export default class View {
    constructor() {
        this.ul = document.getElementById('list'); 
        
    }

    displayTask(task, index, toggleTaskCompletion, removeTask) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
           
            toggleTaskCompletion(index);
            removeTask(index);
            li.remove();
        });
        li.appendChild(checkbox);
        li.append(task.text);
        this.ul.appendChild(li);
    }
}
