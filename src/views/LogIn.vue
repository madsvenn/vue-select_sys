<script setup lang="ts">
import type { User } from '@/database/Type'
import { useSystemStore } from '@/stores/counter'
import { ref } from 'vue'
const store = useSystemStore()
store.getlistStudents()
store.getlistTeachers()
// console.log('store.teacher')
// console.log(store.teachers)
// console.log('store.student')
// console.log(store.students)
const user = ref<User>({ userName: '', password: '', role: '' })
const submit = () => {
  if (!user.value.userName || !user.value.password || !user.value.role) {
    alert('选项不能为空')
  } else {
    const theUser: User = {
      userName: user.value.userName,
      password: user.value.password,
      role: user.value.role,
    }
    user.value.password = ''
    // console.log(theUser)
    store.login(theUser)
  }
}
</script>

<template>
  <div class="loginAll">
    <table>
      <thead>
        <tr>
          <th>角色</th>
          <th>账号</th>
          <th>密码</th>
        </tr>
      </thead>
      <tr>
        <td>teacher</td>
        <td>2001</td>
        <td>2001</td>
      </tr>
      <tr>
        <td>teacher</td>
        <td>2002</td>
        <td>2002</td>
      </tr>
      <tr>
        <td>teacher</td>
        <td>2003</td>
        <td>2003</td>
      </tr>
      <tr>
        <td>teacher</td>
        <td>2004</td>
        <td>2004</td>
      </tr>
      <tr>
        <td>student</td>
        <td>1001</td>
        <td>1001</td>
      </tr>
      <tr>
        <td>student</td>
        <td>1002</td>
        <td>1002</td>
      </tr>
      <tr>
        <td>student</td>
        <td>1003</td>
        <td>1003</td>
      </tr>
      <tr>
        <td>student</td>
        <td>1004</td>
        <td>1004</td>
      </tr>
      <tr>
        <td>student</td>
        <td>1005</td>
        <td>1005</td>
      </tr>
      <tr>
        <td>student</td>
        <td>1006</td>
        <td>1006</td>
      </tr>
    </table>
    <div>
      <div class="bgDiv">
        <div class="login">
          <p><strong>东北林业大学毕设选导师系统</strong></p>
          <div class="username">
            <i class="fa fa-user"></i>
            <input
              class="userInp"
              type="text"
              placeholder="请输入学号/工号"
              v-model="user.userName"
            />
          </div>
          <div class="pwd">
            <i class="fa fa-book"></i>
            <input
              class="pwdInp"
              type="password"
              placeholder="请输入密码"
              v-model="user.password"
            />
          </div>
          <div class="forgetPwd">
            <span>请选择您的角色 ：</span>
            <i class="fa fa-arrow-right"></i>
            <label>
              <input
                type="radio"
                v-model="user.role"
                value="teacher"
                name="role"
              />
              teacher
            </label>
            <label>
              <input
                type="radio"
                v-model="user.role"
                value="student"
                name="role"
              />
              student
            </label>
          </div>
          <button class="btn" @click="submit">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
table {
  color: #fff;
}
* {
  padding: 0;
  margin: 0;
}
/* #building {
  
} */

.loginAll {
  background: url('@/img/pic.jpg');
  background-color: #4892ff;
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

body {
  background: skyblue;
}

.bgDiv {
  width: 547px;
  height: 403px;
  overflow: hidden;
}

.login {
  width: 422px;
  height: 339px;
  background: #fff;
  margin-top: 34px;
  margin-left: 50px;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.logoImg {
  width: 141px;
  height: 37px;
  margin-top: 32px;
  margin-left: 140px;
  margin-bottom: 8px;
}

.username,
.pwd,
.forgetPwd {
  width: 366px;
  height: 60px;
  border-bottom: 1px solid #efefef;
  margin: 0 28px;
}

.userImg,
.pwdImg {
  margin-top: 18px;
  float: left;
}

.userInp,
.pwdInp {
  width: 320px;
  height: 25px;
  margin-top: 18px;
  border: none;
  outline: none;
  margin-left: 20px;
}

.forgetPwd {
  border: none;
  line-height: 58px;
  color: #3e82bf;
  font-size: 16px;
}

.forgetLink {
  padding-left: 5px;
}

.btn {
  width: 364px;
  height: 40px;
  background: #4892ff;
  border: 1px solid #326dcc;
  color: #fff;
  font-size: 16px;
  margin-left: 30px;
}
</style>
