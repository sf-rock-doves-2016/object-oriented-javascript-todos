var idCounter = 1

var TodoList = function() {
  this.tasks = [];
}

      TodoList.prototype.add = function(item) {
        newTask = new Task(item);
        this.tasks.push(newTask);
      };

      TodoList.prototype.list = function() {
        for (var i in this.tasks) {
          console.log(this.tasks[i]);
        };
      };

      TodoList.prototype.remove = function(taskToRemove) {
        var index = this.tasks.indexOf( taskToRemove );
        if (index >= 0) { this.tasks.splice(index, 1) };
      };

var Task = function(item) {
  this.description = item;
  this.completed = false;
  this.id = idCounter;
  idCounter += 1;
};

      Task.prototype.complete = function() {
        this.completed = true;
      };
