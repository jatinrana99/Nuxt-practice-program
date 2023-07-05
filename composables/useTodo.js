export default function useTodo()
{
     const todoList =  ref([])

     function addTodo(payload){
        todoList.avlue =[...todoList.value ,  payload]
     }

     return {
        todoList , addTodo
     }
}