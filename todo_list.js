function TodoList() {
  this.tasks = []
};

function Task(description){
  this.description = description;
  this.completed = false;
  this.id = function(){
    this.id = idCounter;
    idCounter += 1;
  };
};


  TodoList.prototype.add = function(task){
    console.log(this.tasks.push(new Task(task)))
  };

  TodoList.prototype.list = function(){
    for(var i = 0; i < this.tasks.length; i++){
      console.log(this.tasks[i])
    };

  Task.prototype.complete = function(task){
    return this.completed = true
    }

  TodoList.prototype.remove = function(task){
    for(var i = 0; i < this.tasks.length; i++){
      if(task === this.tasks[i]){
        tasks.slice(i)
      }
    }
  }


};


// Driver code


var todoList = TodoList();



// Note we are using a JavaScript constructor now.
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
