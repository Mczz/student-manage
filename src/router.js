import Vue from 'vue'
import Router from 'vue-router'
import StudentList from './views/StudentList.vue'
import AddStudent from './views/AddStudent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/add_stu',
      name:'addStudent',
      component:AddStudent
    },
    {
      path:'/stu_list',
      name:'studentList',
      component:StudentList
    },
    {
      path:'*',
      redirect:'/stu_list',
    },

  ],
  linkActiveClass:'active'
})