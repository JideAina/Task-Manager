const createTaskHtml = (name,description,assigned,date,status) => {
    const html = `
    <li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge badge-danger">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assigned}</small>
            <small>Due: ${date}</small>
        </div>
        <p>${description}</p>
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
            id : this.currentId,
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
            let currentTask = this.task[i];
            let currentDate = new Date(currentTask[date]);
            let formattedDate = currentDate.toDateString();
            let taskHtml = createTaskHtml(currentTask.name,currentTask.description,currentTask.assigned,formattedDate,currentTask.status);

            tasksHtmlList.push(taskHtml)


        }
    }
    save(){
        let tasksJson = JSON.stringify(this.tasks);
        localstorage.setItem('tasks', JSON.stringify(tasksJson));
        let currentId = JSON.stringify(this.currentId); 
        localstorage.setItem('currentId', JSON.stringify(currentId));
    }
}