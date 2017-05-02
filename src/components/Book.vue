<template>
<div>
  <app-nav></app-nav>
  <h1 style="padding-top: 10em;">Hello From Book Component</h1>
</div>
</template>

<script>
import AppNav from './AppNav';
export default {
  name: 'book',
  components: {
    AppNav,
  },
};
</script>

<style lang="css">
</style>
