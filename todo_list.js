

var TodoList = function() {
  this.tasks = [];
  this.add = function(item) {
    this.tasks.push(new Task(item));
  }
  this.list = function() {
    for (var i = 0; i < this.tasks.length; i++) {
      return this.tasks[i];
    }
  }
  this.remove = function(item) {
    for (var i = 0; i < this.tasks.length; i++) {
      if (item === this.tasks[i]) {
        delete this.tasks[i];
      }
    }
  }
};

var id_counter = 1
var Task = function(description) {
  var completed = false
  this.id = function() {
    this.id = id_counter
    id_counter += 1
  }
  this.description = description
  this.completed = completed
  this.complete = function () {
    completed = true
  }
}

// Driver code

var groceryList = new TodoList();
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
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}

