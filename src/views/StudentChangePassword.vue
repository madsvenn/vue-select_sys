<script setup lang="ts">
import router from '@/router'
import { useSystemStore } from '@/stores/counter'
import { ref } from 'vue'

const userName = sessionStorage.getItem('token')
const password = ref('')
const newPassword = ref('')
const store = useSystemStore()
const submit = () => {
  if (
    password.value != newPassword.value ||
    !password.value ||
    !newPassword.value
  ) {
    alert('两次输入需一致且不能为空')
    password.value = ''
    newPassword.value = ''
  } else {
    store.changeStudentPassword(userName ?? '', password.value)
    router.push('/')
  }
}
</script>
<template>
  <div class="bg">
    <div class="box">
      <p>用户名：{{ userName }}</p>
      <input
        type="password"
        required
        placeholder="新密码"
        v-model="password"
        style="height: 40px; width: 200px"
      />
      <input
        type="password"
        id="2"
        required
        placeholder="确认密码"
        v-model="newPassword"
        style="height: 40px; width: 200px"
      />
      <br />
      <br />
      <botton @click="submit">修改</botton>
      <br />
    </div>
  </div>
</template>
<style scoped>
.bg {
  color: rgb(170, 157, 157);
}
.box {
  width: 422px;
  height: 200px;
  background: rgb(236, 239, 244);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border: 1px solid #0e0f0f;
}
input {
  width: 366px;
  height: 60px;
  margin: 0 28px;
}
botton {
  background-color: #ffffff;
  border: 2px solid #008cba;
  border-radius: 8px;
  font-size: 18px;
  color: #87cefa;
  padding: 10px 20px;
  margin: 4px 2px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}
</style>
