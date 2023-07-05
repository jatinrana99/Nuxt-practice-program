<template>
    <div>
        <Head>
            <Title>Home - Nuxt 3 Demo</Title>
            <Meta name="description" content="This is nuxt 3 demo program"/>
            <Meta property="og:title" content="OG title"/>
            <Link ref="stylesheet" href="/style.css"/>
        </Head>
        
        <NuxtLayout name="guestlayout">
            <h1>Hello from Main Page</h1>
            <Todo/>
        </NuxtLayout>
    </div>
</template>

<script setup>
// import Todo from 'components/Todo.vue';

// useHead({
//     title : "Nuxt 3 Practice",
//     meta:[{name: "Demo" , content: "Nuxt 3 practice demo program"} , 
//             {property: "og:title" , content: "this is og title"}]
// })
// here we are use SEO tags and there are two different ways to do it 
</script>