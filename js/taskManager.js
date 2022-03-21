const createTaskHtml = (name,description,assigned,date,status,id) => {
    const html = `
    <li class="list-group-item w-25 mb-3" id=${id}>
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge badge-danger">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assigned}</small>
            <small>Due: ${date}</small>
        </div>
        <p>${description}</p>
        <button class="done-button btn btn-primary" type="button">Mark As Done</button>
    </li>
    `
    return html;
}






class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        // this.currentId = 0;
        this.currentId = currentId;
    }

  
    
    addTask(name,description,assigned,date,status = "TODO"){
        this.currentId++;
        const newTask = {
            id: this.currentId,
            name: name,
            description : description,
            assignedTo : assigned,
            date: date,
            status: status
        }

        this.tasks.push(newTask);
    }

    render(){
        let tasksHtmlList = [];
        for(let i = 0; i < this.tasks.length; i++){
            let currentTask = this.tasks[i];
            // console.log(currentTask.date)
            let currentDate = new Date(currentTask.date);
            let formattedDate = currentDate.toDateString();
            let taskHtml = createTaskHtml(currentTask.name,currentTask.description,currentTask.assignedTo,formattedDate,currentTask.status,currentTask.id);

            tasksHtmlList.push(taskHtml)


        }

        const tasksHtml = tasksHtmlList.join('\n')
        const taskList = document.getElementById('taskList');

        taskList.innerHTML = tasksHtml;
    }
    


    getTaskById(taskId){
        let foundTask;
        for (let i = 0; i < this.tasks.length; i++){
            let task = this.tasks[i];
            if(taskId === task.id){
                foundTask = task;
            }
        }

        return foundTask;
    }

    save(){
        let tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasksJson);
        let currentId = JSON.stringify(this.currentId); 
        localStorage.setItem('currentId', currentId);
    }

    load(){
        localStorage.getItem('tasks', JSON.stringify(this.tasks));
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
        localStorage.getItem('currentId', JSON.stringify(this.currentId));
        this.currentId = JSON.parse(localStorage.getItem('currentId'));
    }
}


