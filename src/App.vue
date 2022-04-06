<template>
    <div id="app">
        <Search/>
    </div>
</template>

<script>
    import Search from './components/search.vue'

    export default {
        name: 'App',
        components: {
            Search
        }
    }
</script>
<style>
    html{
        width: 100%;
        height: 100%;
    }
    body{
        width: 100%;
        height: 100%;
    }
    #app{
        width: 100%;
        height: 100%;
        position: relative;
    }

</style>
