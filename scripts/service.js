export const features = {
    tasks:[],
    editTask: function(task){
       let editedTask = prompt("Edit Task");
       this.tasks.map((taskInArray)=> taskInArray.task == task.task ? taskInArray.task = editedTask : taskInArray.task = task.task );
        return true;

    },
    deleteTask: function(task){
        this.tasks = this.tasks.filter((taskInArray)=> taskInArray.task !== task.task);
        return true;
    },

}