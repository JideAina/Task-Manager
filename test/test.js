const TaskManager = require('../js/taskManager.js')
// const addTask = require('../js/taskManager.js').addTask;
const {assert} = require('chai');
const {describe, it} = require('mocha');
const expect = require('chai').expect;

// class TaskManagerTest  extends TaskManager{};
    
    








describe('addTask',() => {
    it('adds tasks to the task manager',() => {
        TaskManager.tasks = [];
        TaskManager.addTask(name = 'dave',description  = 'find john wick');
        console.log(TaskManager.tasks);
        assert.deepEqual(TaskManager.tasks , [{id: NaN,
            name: 'dave',
            description: 'find john wick',
            assignedTo: undefined,
            date: undefined,
            status: 'TODO'}]);    
    })
});





describe('deleteTask',()=>{
    it('deletes tasks from the taskmanager',()=>{
        TaskManager.tasks = [{id: 1, name:'dave',description:'find john wick',assigned:'anyone',date:2015,status:'failed'}];
        TaskManager.deleteTask(1);
        //console.log(TaskManager.tasks);
        assert.deepEqual(TaskManager.tasks, []);
    })
});





describe('getTaskById',()=>{
    it('selects the task from the task manager',()=>{
        TaskManager.tasks = [{id: 1, name:'dave',description:'find john wick',assigned:'anyone',date:2015,status:'failed'}];
        let task1 = TaskManager.tasks;
        const task2 = TaskManager.addTask(name = 'mike',description  = 'run',assigned = 'him',date = 2015,status = 'escaped');
        // console.log(task1);
        // console.log(task2);
        assert.ok(TaskManager.getTaskById(2)  === task2);


    })
});