<template>
    <div>
        <h1>This is about Page</h1>

        <CustomTitle>Hello from the Title</CustomTitle> 
        <!-- custom title is a component And if we want to use a component we just have to write the component name Nuxt will automatically import that component -->
        <LazyDashBoardHome></LazyDashBoardHome>
        <!-- if we have nested component means that the component is present inside the another folder  -->
        <!-- then first we have to write the folder name then we have to write the component name -->
        <!-- if we want to lazy load the component then just write lazy word before the component -->
    </div>
</template>