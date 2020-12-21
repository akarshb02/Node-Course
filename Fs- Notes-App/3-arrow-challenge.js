const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],


    getTasksToDo() {
        const tasksTodo = this.tasks.filter((task) => {
            return task.completed === false

        });
        return tasksTodo

    }


}

console.log(tasks.getTasksToDo())