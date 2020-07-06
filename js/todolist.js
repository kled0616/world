var app = new Vue({
    el: "#app",
    data:{
    TodoList: [
        {
        id:123,
        title: '待辦1',
        isComplete: false
        }
    ],
    newTodo: '',
    editId: '',
    newTitle: '',
    page:'all'
    },
    methods:{
    addTodo(){
        var newVal = this.newTodo.trim();
        var idx = Math.floor(Date.now());
        
        if(!newVal)
        return;
        
        this.TodoList.push({
        id: idx,
        title: newVal,
        isComplete: false
        });
        
        this.newTodo = '';
    },
    delTodo(todo){
        var newKey = this.TodoList.findIndex(function(item, key){
        return todo.id == item.id;
        })
        this.TodoList.splice(newKey,1);
    },
    editTodo(item){
        this.editId = item.id;
        this.newTitle = item.title;
    },
    cancelEdit(){
        this.editId = '';
    },
    saveEdit(item){
        item.title = this.newTitle;
        this.cancelEdit();
    }
    },
    computed:{
    pageTodoList: function(){
        var result = this.TodoList;
        
        if(this.page == 'ing'){
        result = [];
        this.TodoList.forEach(function(item){
            if(!item.isComplete)
            result.push(item);
        })
        }else if(this.page == 'finish'){
        result = [];
        this.TodoList.forEach(function(item){
            if(item.isComplete)
            result.push(item);
        })
        }
        
        return result;
    },
    IngTodos: function(){
        var result = this.TodoList.filter(function(item){
        return item.isComplete == false;
        });
        return result.length;
    }
    }
})