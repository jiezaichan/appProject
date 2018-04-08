import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/login'
import home from '@/views/home/home'
import movie from '@/views/movie/movie'
import movieDetail from '@/views/movie/movieDetail'
import top from '@/views/movie/top'
import music from '@/views/music/music'
import books from '@/views/books/books'
import bookDetail from '@/views/books/bookDetail'
import photos from '@/views/photos/photos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[{
        path: '/movie',
        name: 'movie',
        component: movie
      },
      {
        path: '/music',
        name: 'music',
        component: music
      },
      {
        path: '/books',
        name: 'books',
        component: books
      },
      {
        path: '/photos',
        name: 'photos',
        component: photos
      }]
    },{
      path:'/movieDetail:id',
      name:'movieDetail',
      component: movieDetail      
    },{
      path:'/bookDetail:id',
      name:'bookDetail',
      component: bookDetail      
    }
    

    
  ]
})
