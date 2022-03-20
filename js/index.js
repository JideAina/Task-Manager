const nameInput = document.querySelector('#name');
// const name = nameInput.value;
const descriptionInput = document.querySelector('#description');
// const description = descriptionInput.value;
const assignedInput = document.querySelector('#assigned');
// const assigned = assignedInput.value;
const dueDateInput = document.querySelector('#due_date');
// const dueDate = dueDateInput.value;
const statusInput = document.querySelector('#status');
// const status = statusInput.value;
const alert = document.querySelector('#alert');
const newTaskForm = document.getElementById('form');


const validFormFieldInput = () => {
    if (!nameInput.value || !descriptionInput.value || !assignedInput.value || !dueDateInput.value || !statusInput.value) {
        let errorList = [];
        if (!nameInput.value) {
            errorList.push(" name");
        }
        if (!descriptionInput.value) {
            errorList.push(" description");
        }
        if (!assignedInput.value) {
            errorList.push(" assigned to");
        }
        if (!dueDateInput.value) {
            errorList.push(" due date");
        }
        if (!statusInput.value) {
            errorList.push(" status");
        }
        alert.classList.add("invalid-form-alert");
        alert.classList.remove("hide-alert");
        alert.innerHTML = `Something went wrong! Please check the following field(s):${errorList.toString()}`;
        return false;
    }
    else {
        if (alert.classList.contains("invalid-form-alert")) {
            alert.classList.remove("invalid-form-alert");
            console.log("yay");
        }
        if (!alert.classList.contains("hide-alert")) {
            alert.classList.add("hide-alert");
        }
        console.log(`name: ${nameInput.value} description: ${descriptionInput.value} assigned: ${assignedInput.value} due date: ${dueDateInput.value} status: ${statusInput.value}`);
        return true;
    }


}
const taskManager = new TaskManager();

newTaskForm.addEventListener('submit',function(e){
    e.preventDefault();
    let isFormValidation = validFormFieldInput();
    
    if(isFormValidation){
        
        taskManager.addTask(nameInput.value,descriptionInput.value,assignedInput.value,dueDateInput.value,statusInput.value);
        console.log(taskManager.tasks);
        nameInput.value = '';
        descriptionInput.value = '';
        assignedInput.value = '';
        dueDateInput.value = '';
        statusInput.value = '';
    }
    
});

// console.log(createTaskHtml('Take out trash','Take out trash in the bedrooms','Mathew','Today','done'))