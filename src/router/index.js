import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/components/Book'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Book',
      component: Book
    }
  ]
})
