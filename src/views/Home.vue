<template>
  <div>
    <h2>主页</h2>
    <button @click="api1">点一下</button>
    <button @click="api2">点一下2</button>
    <router-view></router-view>
  </div>
</template>

<script>
import { getUsers, getResource } from "../utils/requests";
export default {
  name: "Home",
  methods: {
    api1() {
      getUsers().then((res) => {
        console.log("res.执行了");
        console.log(res.data);
      });
    },
    api2() {
      getResource().then((res) => {
        console.log("res.执行了");
        console.log(res.data);
      });
    },
  },
};
</script>

<style>
</style>