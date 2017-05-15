<template>
<div class="app">
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <h3 class="text-center">Header</h3>
      <button type="button" class="btn btn-default">
        <router-link to="/authors">Authors</router-link>
      </button>
      <button type="button" class="btn btn-default">
        <router-link to="/">Books</router-link>
      </button>
    </div>
  </nav>
</div>
</template>

<script>
// import { isLoggedIn, login, logout } from '../../utils/auth';

export default {
  name: 'app-nav',
};
</script>

<style scoped>
/*.navbar-right {
  margin-right: 0px !important
}

.log {
  margin: 5px 10px 0 0;
}*/
</style>
