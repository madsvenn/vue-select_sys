<script setup lang="ts">
import type { User } from '@/database/Type'
import { useSystemStore } from '@/stores/counter'
import { Lock, User as UserIco } from '@element-plus/icons'
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
    if (user.value.userName == user.value.password) {
      alert('账号密码相同，记得改一下喵')
    }
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
  <div class="outer">
    <div class="table111">
      <table>
        <tr>
          <th>姓名</th>
          <th>教学工号</th>
          <th>密码</th>
        </tr>
        <tr><td>老师</td></tr>
        <tr>
          <td>善老师</td>
          <td>001</td>
          <td>001</td>
        </tr>
        <tr>
          <td>梨老师</td>
          <td>002</td>
          <td>002</td>
        </tr>
        <tr>
          <td>鞠莉老师</td>
          <td>003</td>
          <td>003</td>
        </tr>
        <tr>
          <td>小千</td>
          <td>2001</td>
          <td>2001</td>
        </tr>
        <tr>
          <td>小曜</td>
          <td>2002</td>
          <td>2002</td>
        </tr>
        <tr>
          <td>小南</td>
          <td>2003</td>
          <td>2003</td>
        </tr>
        <tr>
          <td>小丸</td>
          <td>2004</td>
          <td>2004</td>
        </tr>
        <tr>
          <td>小露</td>
          <td>2005</td>
          <td>2005</td>
        </tr>
        <tr>
          <td>小黛</td>
          <td>2006</td>
          <td>2006</td>
        </tr>
      </table>
    </div>
    <div class="loginAll">
      <div class="container">
        <div class="bgDiv">
          <div class="login">
            <el-col :span="12" :offset="6" style="margin-top: 15px" center>
              <el-card class="box-card">
                <div style="margin-bottom: 15px">
                  <div class="username">
                    <i class="fa fa-address-book-o"></i>
                    <input
                      type="text"
                      class="pwdInp"
                      placeholder="请输入学工号"
                      v-model="user.userName"
                      :prefix-icon="UserIco"
                    />
                  </div>
                  <div class="pwd">
                    <i class="fa fa-eye"></i>
                    <input
                      class="pwdInp"
                      type="password"
                      placeholder="请输入密码"
                      v-model="user.password"
                    />
                  </div>
                  <div class="forgetPwd">
                    <label>
                      老师
                      <input
                        type="radio"
                        v-model="user.role"
                        value="teacher"
                        name="role"
                      />

                      <i class="fa fa-coffee"></i>
                    </label>
                    <br />
                    <label>
                      学生
                      <input
                        type="radio"
                        v-model="user.role"
                        value="student"
                        name="role"
                      />
                      <i class="fa fa-child"></i>
                    </label>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div class="btn1">
                    <button class="btn" @click="submit">登录</button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
table {
}
* {
  padding: 0;
  margin: 0;
}
th {
  color: red;
}
td {
  color: black;
}
/* #building {

} */
.table111 {
  position: absolute;
}
.loginAll {
  background: url('@/img/login.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: absolute;
  width: 70%;
  height: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  right: 15%;
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
  width: 300px;
  height: 300px;
  margin-top: 34px;
  margin-left: 50px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background-color: rgba(220, 38, 38, 0.2);
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
  width: 250px;
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
  width: 200px;
  height: 25px;
  margin-top: 18px;
  border: 100px;
  outline: none;
  margin-left: 20px;
}

.forgetPwd {
  border: none;
  line-height: 58px;
  color: blue;
  font-size: 16px;
}

.forgetLink {
  padding-left: 6px;
}

.btn1 {
  width: 50px;
  height: 40px;
  background: black;
  border: 1px solid #326dcc;
  color: #fff;
  font-size: 16px;
  margin: 0 auto;
}

.btn {
  width: 50px;
  height: 40px;
  background: black;
  border: 1px solid #326dcc;
  color: #fff;
  font-size: 16px;
  margin: 0 auto;
}
</style>
