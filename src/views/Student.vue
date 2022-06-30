// eslint-disable-next-line vue/multi-word-component-names
<script setup lang="ts">
import type { Student } from '@/database/Type'
import { useSystemStore } from '@/stores/counter'
import { ref, type Ref } from 'vue'
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
    student.value.userName = students[i].userName
    student.value.password = students[i].password
    student.value.teacherName = students[i].teacherName
    student.value.teacherSelect = students[i].teacherSelect
  }
}
const ifShow = ref(student.value.teacherSelect)
const selectedNumber = (students: Student[]) => {
  return students.length
}
const select = (index: number) => {
  if (teachers[index].studentsList.length == 3) {
    alert('已满（3人），请重新选择')
  } else {
    store.addstudent(username ?? '', teachers[index].userName)
    ifShow.value = true
    student.value.teacherName = teachers[index].userName
    // console.log(students)
    // console.log(teachers)
  }
}
</script>
<template>
  <div>
    <h1>Hello{{ username }}({{ role }})!</h1>
    <router-link to="/">退出</router-link>
    ||
    <router-link to="/studentChangePassword">修改密码</router-link>
    <div v-show="ifShow">
      <h3>我的导师 -----teacherName:{{ student.teacherName }}</h3>
      <br />
    </div>
    <div v-show="!ifShow">
      <table>
        <thead>
          <tr>
            <th>teacher name</th>
            <th>studentNumber</th>
            <th>studentSelectedNumber</th>
            <th>option</th>
          </tr>
          <tr v-for="(t, index) of teachers" :key="index">
            <td>{{ t.userName }}</td>
            <td>{{ t.studentNumber }}</td>
            <td>{{ selectedNumber(t.studentsList) }}</td>
            <td><button @click="select(index)">select</button></td>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>
<style scoped>
/* 居中显示 */
h1 {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

/* 表格美化 */
table {
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
}

table td,
table th {
  border: 1px solid #cad9ea;
  color: #666;
  height: 30px;
  width: 150px;
}

table thead th {
  background-color: #cce8eb;
  width: 100px;
}

table tr:nth-child(odd) {
  background: #fff;
}

table tr:nth-child(even) {
  background: #f5fafa;
}
</style>
