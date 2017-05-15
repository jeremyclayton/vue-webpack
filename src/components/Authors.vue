<template lang="html">
    <div>
        <app-nav></app-nav>
    <ul v-for="author in authors">
        <li>{{author.first_name}} {{author.last_name}}</li>
    </ul>
    </div>
</template>

<script>
import axios from 'axios'
import AppNav from './AppNav'
export default {
    name: 'Authors',
    components: {
        AppNav
    },
    data (){
        return {
            authors: []
        }
    },
    mounted (){
        axios.get(`http://localhost:3000/authors`).then(response => {
            this.authors = response.data
        })
    }
}
</script>

<style lang="css">
</style>
