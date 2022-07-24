<script setup lang="ts">
import type { Student, Teacher } from '@/database/Type'
import { useSystemStore } from '@/stores/counter'
import { ref, type Ref, defineAsyncComponent } from 'vue'
const role = sessionStorage.getItem('role')
const store = useSystemStore()
store.getlistStudents()
store.getlistTeachers()
const teachers = store.getlistTeachers()
const students = store.getlistStudents()
const username = sessionStorage.getItem('token')

const teachername = ref()
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].userName == username) {
    teachername.value = teachers[i].name
  }
}
const teacher: Ref<Teacher> = ref({
  userName: '',
  password: '',
  studentNumber: 3,
  studentsList: [],
})
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].userName == username) {
    teacher.value.userName = teachers[i].userName
    teacher.value.password = teachers[i].password
    teacher.value.studentNumber = teachers[i].studentNumber
    teacher.value.studentsList = teachers[i].studentsList
  }
}
const active = ref(false)
const studentlist: Student[] = ref(teacher.value.studentsList)
const showiron = ref(false)
const click_iron = () => {
  showiron.value = !showiron.value
}
const TeacherChangePassword = defineAsyncComponent(
  () => import('./TeacherChangePassword.vue')
)
const deletestu = (index) => {
  const ifdelete = confirm('是否删除？ (。•́︿•̀。)')
  console.log(ifdelete)
  if (ifdelete) {
    console.log(index)

    store.delstudent(index ?? '', username)
    for (let i = 0; i < teacher.value.studentsList.length; i++) {
      if (teacher.value.studentsList[i].userName == index) {
        teacher.value.studentsList = teacher.value.studentsList.filter(
          (item) => item.userName !== index
        )
        students[i].teacherName = ''
        students[i].teacherSelect = false
      }
      studentlist.value = teacher.value.studentsList
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="nav1">
      <p>{{ teachername }}</p>
      <i class="fa fa-gear" style="font-size: 2em" @click="click_iron"></i>
      <div class="nav2" v-if="showiron">
        <router-link to="/">
          <i class="fa fa-close" style="font-size: 2em"></i>
        </router-link>
        <br />
        <i class="fa fa-lock" style="font-size: 2em" @click="active = true"></i>
      </div>
    </div>
    <br />
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>我的学生</th>
          <th>删除</th>
        </tr>
      </thead>
      <tr v-for="(s, index) of studentlist" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ s.name }}</td>

        <td>
          <i
            class="fa fa-close"
            style="font-size: 1.5em"
            @click="deletestu(s.userName)"
          ></i>
        </td>
      </tr>
    </table>
    <!-- {{ teacher.value.studentsList.length }} -->
    <TeacherChangePassword v-if="active" @emitClose="active = false" />
  </div>
</template>
<style scoped>
/* 居中显示 */
.nav1 {
  margin-left: 100%;
  box-sizing: border-box;
}
.fa {
}
.container {
  max-width: 500px;
  box-sizing: border-box;
  min-height: 100vh;
  border-radius: 4px;
  margin: 0 auto;
}
/* 表格美化 */
table {
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table caption {
  font-size: 2em;
  font-weight: bold;
  margin: 1em 0;
}

th,
td {
  border: 1px solid #999;
  text-align: center;
  padding: 20px 0;
}

table thead tr {
  background-color: #008c8c;
  color: #fff;
}

table tbody tr:nth-child(odd) {
  background-color: #eee;
}

table tbody tr:hover {
  background-color: #ccc;
}

table tbody tr td:first-child {
  color: #f40;
}

table tfoot tr td {
  text-align: right;
  padding-right: 20px;
}
</style>
