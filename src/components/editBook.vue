<template>
<div>
  <app-nav></app-nav>
  <!-- <div v-for="book in editBook">
      <p>{{book.id}}</p>

  </div> -->
  <div class="container">
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input v-model="title" type="title" class="form-control" id="title" placeholder="Enter Title">
      </div>
      <div class="form-group">
        <label for="genre">Genre</label>
        <input type="genre" v-model="genre" class="form-control" id="genre" placeholder="Enter Genre">
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea v-model="description" class="form-control" rows="5" id="description"></textarea>
      </div>
      <div class="form-group">
        <label for="cover_url">Cover URL</label>
        <input v-model="cover_url" type="text" class="form-control" id="cover_url" placeholder="Enter Cover Url">
      </div>
      <button type="submit" class="btn btn-primary" v-on:click.prevent="edit()">Submit</button>
    </form>
  </div>
</div>
</template>

<script>
import AppNav from './AppNav';
import axios from 'axios'
import store from '../store.js'
// console.log(store);

export default {
  name: 'editBook',
  components: {
    AppNav,
  },
  data() {
    return {
      book: store.selectedBook,
      editBook: [],
      title: '',
      genre: '',
      description: '',
      cover_url: ''
    }
  },
  //  mounted() {
  //   axios.get(`http://localhost:3000/books/${this.editBook.id}`).then(response => {
  //     //   console.log(response.data);
  //     this.editBook = response.data
  //   })
  // },
  methods: {
    edit: function() {
      axios.put(`http://localhost:3000/books/${this.book.id}`, {
        title: this.title,
        genre: this.genre,
        description: this.description,
        cover_url: this.cover_url
      }).then(() => {
        this.$router.push('/');
      })
    }
  }
}
</script>

<style lang="css">
</style>
