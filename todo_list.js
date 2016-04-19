var newTodoList = function() {
  this.tasks = [];
};

var Task = function(description) {
  this.id = 0;
  this.description = description;
  this.completed = false;
};

Task.prototype.complete = function() {
  this.completed = true;
}

newTodoList.prototype.add = function(task) {
  var newTask = new Task(task);
  this.tasks.push(newTask);
  newTask.id = this.tasks.indexOf(newTask) + 1;
}

newTodoList.prototype.remove = function(task) {
  this.tasks.splice(this.tasks.indexOf(task), 1);
}

newTodoList.prototype.list = function() {
  for (var i in this.tasks) {
    console.log(this.tasks[i]);
  };
}

// Driver code


// var todoList = newTodoList();

var groceryList = new newTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
