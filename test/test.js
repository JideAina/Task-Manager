const TaskManager = require('../js/taskManager.js')
// const addTask = require('../js/taskManager.js').addTask;
const {assert} = require('chai');
const {describe, it} = require('mocha');
const expect = require('chai').expect;

// class TaskManagerTest  extends TaskManager{};
    
    








describe('addTask',() => {
    it('adds tasks to the task manager',() => {
        TaskManager.tasks = [];
        TaskManager.addTask(name = 'dave',description  = 'find john wick',assigned = 'anyone',date = 2015,status = 'failed');
        //console.log(TaskManager.tasks);
        expect(TaskManager.tasks).to.deep.include([{name: 'dave',description: 'find john wick'}]);    
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
    })
});