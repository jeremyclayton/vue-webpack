<template>
<div>
  <app-nav></app-nav>
  <div class="container">
    <form>
      <div class="form-group">
        <label v-model="title" for="title">Title</label>
        <input type="title" class="form-control" id="title" placeholder="Enter Title">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label v-model="genre" for="genre">Genre</label>
        <input type="genre" class="form-control" id="genre" placeholder="Enter Genre">
      </div>
      <div class="form-group">
        <label v-model="description" for="description">Description:</label>
        <textarea class="form-control" rows="5" id="description"></textarea>
      </div>
      <div class="form-group">
        <label v-model="cover_url" for="cover_url">Cover URL</label>
        <input type="over_url" class="form-control" id="over_url" placeholder="Enter Cover Url">
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="edit()">Submit</button>
    </form>
  </div>
</div>
</template>

<script>
import AppNav from './AppNav';
import axios from 'axios'
import store from '../store.js'
console.log(store);

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
  created() {
    axios.get(`http://localhost:3000/books/${this.book.id}`).then(response => {
      console.log(response.data);
      this.editBook = response.data
    })
  },
  methods: {
    edit: function() {
      axios.put(`http://localhost:3000/books/${this.book.id}`, {
        title: this.title,
        genre: this.genre,
        description: this.description,
        cover_url: this.cover_url,
      }).then(response => {
        console.log(response.data);
      })
    }
  }
}
</script>

<style lang="css">
</style>
