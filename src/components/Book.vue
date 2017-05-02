<template>
<div>
  <app-nav></app-nav>

  <div class="container">
    <div class="row">
      <div v-for="book in oneBook" class="card col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <img class="card-img-top" :src="book.cover_url" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">{{book.title}}</h4>
          <p v-for="author in book.authors" class="card-text">{{author.first_name}} {{author.last_name}}</p>
          <router-link to="book"><a href="#" class="btn btn-primary" style="margin-bottom: 0 auto;" v-on:click="onClick(book)">View Book</a></router-link>
          <router-link to="/"><a href="#" class="btn btn-primary" style="margin-bottom: 0 auto;">Go back</a></router-link>
          <router-link to="editBook"><a href="#" class="btn btn-primary" style="margin-bottom: 0 auto;">Edit</a></router-link>
          <span v-on:click="del()" class="btn btn-primary" style="margin-bottom: 0 auto;">Delete</a></span>

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import AppNav from './AppNav';
import axios from 'axios'
import store from '../store.js'


export default {
  name: 'Book',
  components: {
    AppNav,
  },
  data() {
    return {
      book: store.selectedBook,
      oneBook: []
    }
  },
  created() {
    axios.get(`http://localhost:3000/books/${this.book.id}`).then(response => {
      console.log(response.data);
      this.oneBook = response.data
    });
  },
  methods: {
    del: function() {
      console.log("clicked");
      axios.delete(`http://localhost:3000/books/${this.book.id}`).then(() => {
        this.$router.push('/')
      })
    }
  }

}
</script>

<style lang="css">
</style>
