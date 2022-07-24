// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">
import type { Student, Teacher } from '@/database/Type'
import { useSystemStore } from '@/stores/counter'
import { ref, type Ref, defineAsyncComponent } from 'vue'
const StudentChangePassword = defineAsyncComponent(
  () => import('./StudentChangePassword.vue')
)
const role = sessionStorage.getItem('role')
const store = useSystemStore()
store.getlistStudents()
store.getlistTeachers()
const teachers = store.getlistTeachers()
const students = store.getlistStudents()
const student: Ref<Student> = ref({
  userName: '',
  password: '',
  teacherName: '',
  teacherSelect: false,
})
const username = sessionStorage.getItem('token')
for (let i = 0; i < students.length; i++) {
  if (students[i].userName == username) {
    student.value.name = students[i].name
    student.value.userName = students[i].userName
    student.value.password = students[i].password
    student.value.teacherName = students[i].teacherName
    student.value.teacherSelect = students[i].teacherSelect
  }
}
const t: Ref<Teacher> = ref({
  name: '',
  userName: '',
  password: '',
  studentNumber: '',
  studentsList: '',
})
if (student.value.teacherSelect) {
  for (let i = 0; i < teachers.length; i++) {
    if (teachers[i].userName == student.value.teacherName) {
      console.log(student.value.teacherName)
      t.value.name = teachers[i].name
      t.value.userName = teachers[i].userName
      t.value.password = teachers[i].password
      t.value.studentNumber = teachers[i].studentNumber
      t.value.studentsList = teachers[i].studentsList
    }
  }
}
const ifShow = ref(student.value.teacherSelect)
const selectedNumber = (students: Student[]) => {
  return students.length
}
const select = (index: number) => {
  const ifselect = confirm('是否要选择，选择后不能更改哦')
  if (ifselect) {
    if (teachers[index].studentsList.length == teachers[index].studentNumber) {
      alert('满人咯！')
    } else {
      store.addstudent(username ?? '', teachers[index].userName)
      ifShow.value = true
      student.value.teacherName = teachers[index].userName
      t.value.name = teachers[index].name
      t.value.userName = teachers[index].userName
      t.value.password = teachers[index].password
      t.value.studentNumber = teachers[index].studentNumber

      console.log(students)
      console.log(teachers)
    }
  }
}
const active = ref(false)
const showiron = ref(false)
const click_iron = () => {
  showiron.value = !showiron.value
}
</script>
<template>
  <div class="container">
    <div class="nav1">
      <p>{{ student.name }}</p>
      <i class="fa fa-gear" style="font-size: 2em" @click="click_iron"></i>
      <div class="nav2" v-if="showiron">
        <router-link to="/">
          <i class="fa fa-close" style="font-size: 2em"></i>
        </router-link>
        <br />
        <i class="fa fa-lock" style="font-size: 2em" @click="active = true"></i>
      </div>
    </div>
    <div v-if="ifShow">
      <h3>我的导师</h3>
      <table>
        <thead>
          <tr>
            <th>姓名</th>
            <th>教工号</th>
          </tr>
          <tr>
            <td>{{ t.name }}</td>
            <td>{{ t.userName }}</td>
          </tr>
        </thead>
      </table>
    </div>
    <br />

    <div v-show="!ifShow">
      <table>
        <thead>
          <tr>
            <th>姓名</th>
            <th>教工号</th>
            <th>可选人数</th>
            <th>已选人数</th>
            <th>操作</th>
          </tr>
          <tr v-for="(t, index) of teachers" :key="index">
            <td>{{ t.name }}</td>
            <td>{{ t.userName }}</td>
            <td>{{ t.studentNumber }}</td>
            <td>{{ selectedNumber(t.studentsList) }}</td>
            <td><button @click="select(index)">select</button></td>
          </tr>
        </thead>
      </table>
    </div>
    <StudentChangePassword v-if="active" @emitClose="active = false" />
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
