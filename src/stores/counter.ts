import { listStudents, listTeachers, type ResultVO, type Student, type Teacher, type User } from '@/database/Type'
import router from '@/router';
import axios from 'axios';
import { defineStore } from 'pinia'

export const useSystemStore = defineStore({
  id: 'system',
  state: () => ({
    teachers:[] as Teacher[],
    students:[] as Student[],
  }),
  actions: {
    getlistStudents(){
      if(this.students.length==0){
          this.students=listStudents()
      }
      return this.students
    },
     getlistTeachers(){
      if(this.teachers.length==0){
          this.teachers=listTeachers()
      }
      return this.teachers
    },
    changeStudentPassword(userName:String ,password :String){
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].userName == userName) {
          console.log(this.students[i].userName)
          console.log(this.students[i].password)
          this.students[i].password = password
        }
      }
    },
    changeTeacherPassword(userName:String ,password :String){
      for (let i = 0; i < this.teachers.length; i++) {
        if (this.teachers[i].userName == userName) {
          console.log(this.teachers[i].userName)
          console.log(this.teachers[i].password)
          this.teachers[i].password = password
        }
      }
    },addstudent(sName:String,tName:String){
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].userName == sName) {
          this.students[i].teacherSelect = true
          this.students[i].teacherName = tName
          for (let j = 0; j < this.teachers.length; j++) {
            if (this.teachers[j].userName ==tName) {
              this.teachers[j].studentsList.push(this.students[i])
              console.log("push")
              console.log(this.students[i])
              
            }
          }
        }
      }

    },
    remomeStudent(sName:String,tName:String){
      
    },
    async login(user:User){
      try{
        const resp = await axios.post<ResultVO>('login',user)
        console.log(resp.headers.token)
        sessionStorage.setItem('token',resp.headers.token)
        sessionStorage.setItem('role',resp.headers.role)
        let path = '/'
        switch (resp.headers.role) {
          case "teacher":
            path = '/teacher'
            break
          case "student":
            path = '/student'
            break
        }
        router.push(path)
      }
      catch(error){
       //sds
      }
    }

  },
  getters: {
   
  }
})
