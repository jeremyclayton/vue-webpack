import Vue from 'vue'
import Router from 'vue-router'
import Books from '@/components/Books'
import Book from '@/components/Book'
import editBook from '@/components/editBook'
import newBook from '@/components/newBook'
import authors from '@/components/Authors'





Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Books',
    component: Books
  }, {
    path: '/book',
    name: 'Book',
    component: Book
  }, {
    path: '/editBook',
    name: 'editBook',
    component: editBook
  }, {
    path: '/newBook',
    name: 'newBook',
    component: newBook
  }, {
    path: '/authors',
    name: 'authors',
    component: authors
  }]
})
