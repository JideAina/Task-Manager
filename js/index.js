const validFormFieldInput = (event) => {
    event.preventDefault();
    const nameInput = document.querySelector('#name');
    const name = nameInput.value;
    const descriptionInput = document.querySelector('#description');
    const description = descriptionInput.value;
    const assignedInput = document.querySelector('#assigned');
    const assigned = assignedInput.value;
    const dueDateInput = document.querySelector('#due_date');
    const dueDate = dueDateInput.value;
    const statusInput = document.querySelector('#status');
    const status = statusInput.value;
    const alert = document.querySelector('#alert');
    if (!name || !description || !assigned || !dueDate || !status) {
        let errorList = [];
        if (!name) {
            errorList.push(" name");
        }
        if (!description) {
            errorList.push(" description");
        }
        if (!assigned) {
            errorList.push(" assigned to");
        }
        if (!dueDate) {
            errorList.push(" due date");
        }
        if (!status) {
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
        console.log(`name: ${name} description: ${description} assigned: ${assigned} due date: ${dueDate} status: ${status}`);
    }
}

const taskManager = new TaskManager()
console.log(taskManager.tasks);