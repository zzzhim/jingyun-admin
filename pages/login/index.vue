<template>
  <div class="page">
    <section class="block">
      <PageForm :list="list" :formData="formData" :rules="rules" />

      <el-button @click="handleClick">点击我</el-button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { PageFormList } from "@/types/PageForm";
import { reactive, ref } from "vue";

const list: PageFormList = [
  {
    list: [
      {
        span: 24,
        label: "Password",
        prop: "pass",
        component: "input",
        componentProps: {
          type: "password",
          autocomplete: "off",
        },
      },
      {
        span: 24,
        label: "Password",
        prop: "pass",
        component: "input",
        componentProps: {
          type: "password",
          autocomplete: "off",
        },
      },
      {
        span: 24,
        label: "Password",
        prop: "pass",
        component: "input",
        componentProps: {
          type: "password",
          autocomplete: "off",
        },
      },
    ],
  },
];

const formData = reactive({
  pass: "",
  checkPass: "",
});

const rules = {
  pass: [
    { required: true, message: "Please input the password", trigger: "blur" },
    { min: 6, max: 12, message: "Length should be 6 to 12", trigger: "blur" },
  ],
}

const handleClick = () => {
  console.log(formData);
};

</script>

<style scoped lang="scss">
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;

  .block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 400px;
    margin: 0px auto;
    background-color: #ffffff;
    border-radius: 10px;
  }
}
</style>
