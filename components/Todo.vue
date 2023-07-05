<template>
    <div>
        <button @click="addToList">Add Todo</button>
    </div>
</template>

<script setup>
const {todoList , addTodo} = useTodo()

function addToList(){
    addTodo({id:5 , text:"first totdo"});
    console.log("added" , todoList.value)
}
</script>