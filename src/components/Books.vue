<template>
<div>
  <app-nav></app-nav>
  <body>

  <div class="container">

    <div class="row">
      <div v-for="book in books" class="card col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <img class="card-img-top" :src="book.cover_url" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">{{book.title}}</h4>
          <p v-for="author in book.authors" class="card-text">{{author.first_name}} {{author.last_name}}</p>
        </div>
        <router-link to="book"><a href="#" class="btn btn-info" style="margin-bottom: 0 auto;" v-on:click="onClick(book)">View Book</a></router-link>
      </div>
    </div>
    <router-link to="newBook" class="btn btn-primary">Add New Book</router-link>
  </div>
</body>

</div>
</template>

<script>
import AppNav from './AppNav';
import axios from 'axios'
import store from '../store.js'

export default {
  name: 'Books',
  components: {
    AppNav,
  },
  created() {
    axios.get(`http://localhost:3000/books`).then(response => {
      this.books = response.data
      
    });
  },
  data() {
    return {
      books: store.books,
    }
  },
  methods: {
    onClick: function(book) {
      store.selectedBook = book
    }
  }
};
</script>

<style>
.card {
  border: solid black 1px;
  height: 30em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-img-top {
  width: 15em;
  height: 22em;
  display: flex;
  margin-top: 2em;
  /*align-self: flex-end;*/
}

body {
  padding-top: 70px;
}
</style>
