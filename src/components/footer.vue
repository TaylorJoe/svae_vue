<template>
  <el-container id="login_body">
    <el-header></el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
export default {
  name: 'footer',
  data() {
      return {
          activeIndex: '1',
    };
  },
  props: {
    msg: String,
  },

  beforeCreate:{

  },
  methods:{

  }

}

</script>

<style scoped>
  .el-container{
    height: 100%;
  }
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 100%;
  }

</style>
