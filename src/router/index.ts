import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:'login',
      component:()=>import("@/views/LogIn.vue"),
    },
    {
      path: '/student',
      component:()=>import("@/views/Student.vue"),
      meta:{
        role:"student"
      }
    },
    {
      path: '/studentChangePassword',
      component:()=>import("@/views/StudentChangePassword.vue"),
      meta:{
        role:"student"
      }
    },
    {
      path: '/teacher',
      component:()=>import("@/views/Teacher.vue"),
      meta:{
        role:"teacher"
      }
    },
    {
      path: '/teacherChangePassword',
      component:()=>import("@/views/TeacherChangePassword.vue"),
      meta:{
        role:"teacher"
      }
    },
    
    {
      path: '/1',
      component:()=>import("@/views/HomeView.vue")
    },
  ]
})

router.beforeEach((to,from,next)=>{
  if(!to.meta.role){
    next()
    return
  }
  if(to.meta.role!=sessionStorage.getItem('role')){
    next({name:'login'})
    alert("无权限")
    return
  }
  next()
})

export default router
