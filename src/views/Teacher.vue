<script setup lang="ts">
import type { Student, Teacher } from '@/database/Type'
import { useSystemStore } from '@/stores/counter'
import { ref, type Ref } from 'vue'
const role = sessionStorage.getItem('role')
const store = useSystemStore()
store.getlistStudents()
store.getlistTeachers()
const teachers = store.getlistTeachers()
const username = sessionStorage.getItem('token')
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
const studentlist: Student[] = teacher.value.studentsList
</script>

<template>
  <div>
    <h1>Hello{{ username }}({{ role }})!</h1>
    <router-link to="/">退出</router-link>
    ||
    <router-link to="/TeacherChangePassword">修改密码</router-link>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
        </tr>
      </thead>
      <tr v-for="(s, index) of studentlist" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ s.userName }}</td>
      </tr>
    </table>
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
