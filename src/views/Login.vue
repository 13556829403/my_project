<template>
  <div>
    <!-- 登录表单 -->
    <el-form label-position="right" label-width="80px" :model="loginForm" ref="loginForm" class="loginContainer" :rules="rules">
      <!-- 标题 -->
      <h3 class="loginTitle">系统登录</h3>

      <!-- 表单 -->
      <el-form-item label="用户名" label-position="left" prop="username">
        <el-input
          type="text"
          v-model="loginForm.username"
          autocomplete="off"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          type="text"
          v-model="loginForm.password"
          autocomplete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="code">
        <el-input
          type="text"
          v-model="loginForm.code"
          autocomplete="off"
          placeholder="点击图片更换验证码"
        ></el-input>

        <img :src="captchaUrl">
      </el-form-item>

      <!-- 登录 -->
      <el-button type="primary" style="width: 100%" @click="submit">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      captchaUrl: "",
      loginForm: {
        username: "",
        password: "",
        code: "",
      },
      //校验规则:rules="rules"   required：必填   message：提示信息  trigger：触发方式   blur失去焦点 / change数据改变
      rules: {
        username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
          ],
        code: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
          ],
      }

    };
  },
  methods: {
    submit(){
      // submit Regular  提交校验规则
      this.$refs.loginForm.validate((valid) => {
          if (valid) {
            alert('submit!');
            this.$router.push('/home')
          } else {
            this.$message.error('请根据提示，检查输入项后重新提交');
            return false;
          }
      });
    }
  },
};
</script>

<style>

  .loginContainer{
    /* 外边框圆角 */
    border-radius: 25px;
    /* 元素背景  padding-box 背景延伸至内边距（padding）外沿。不会绘制到边框处*/
    background-clip:padding-box ;
    /* 纵向（上下）外边距180px  左右居中*/
    margin: 180px auto;
    /* 宽度500px */
    width: 450px;
    /* 内边距 */
    padding: 15px 35px 15px 35px;
    /* 背景色 */
    background-color: aliceblue;
    /* 边框 1px 实线 制定色 */
    border: 1px solid rgb(178, 128, 34);
    /* 阴影 x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
    box-shadow: 2px 2px 5px 2px rgba(27, 194, 172, 0.2);
  }

  .loginTitle{
    /* 内边距 */
    margin: 15px auto 25px auto;
    /* 文本居中 */
    text-align:center;
  }

  .imgCode{
    width: 230px;
    margin-right: 10px;
  }


</style>