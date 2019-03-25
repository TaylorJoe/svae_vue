<template>
    <el-container id="login_body">
        <!--<script src="https://unpkg.com/axios/dist/axios.min.js"></script>-->
        <img id="back" src="../../public/image/back.png"/>
        <h1 id="title">胖哒直通车</h1>
        <h2 id="title_2">旅游、上班用胖哒就够了</h2>
        <h6 id="title_3">未注册手机验证后完成注册</h6>
        <div style="margin-top: 15px;">
            <el-input  class="input" id="input1" placeholder="请输入手机号" v-model="form.username" type="number" clearable></el-input>
        </div>
        <div style="margin-top: 15px;">
            <el-input  class="input" id="input2" placeholder="请输入密码" v-model="form.password" type="password" clearable></el-input>
        </div>
        <el-button :disabled="isclickab"  @click="login" id="button" type="primary">登陆</el-button>
        <el-header></el-header>
        <el-main class="footer">
            <el-checkbox  v-model="checked" >同意
                <a href="http://www.baidu.com">《胖哒协议》</a>
            </el-checkbox>
        </el-main>
    </el-container>
</template>

<script>
    /* eslint-disable no-console */
    import axios from "axios";
    export default {
        name: "Login",
        data(){
            return{
                form: {
                    username: '',
                    password: '',
                },
                checked: true,
                isclickab:true,
                loading:true,
            }
        },

        computed: {
            getName() {
                return this.form.username;
            },
            getPwd() {
                return this.form.password;
            }
        },

        watch: {
            getName(val) {
                if (val.length==0){
                    this.isclickab=true
                }else if (this.form.password.length!=0) {
                    this.isclickab=false
                }
            },
            getPwd(val){
                if (val.length==0){
                    this.isclickab=true
                }else if (this.form.username.length!=0) {
                    this.isclickab=false
                }
            },
        },

        methods:{
            login() {
                let username = this.form.username
                let password = this.form.password
                if (username.length>0 && password.length>0){
                    let config ={
                        baseURL:"http://192.168.2.166:8000/"
                    }
                    let params = new URLSearchParams();
                    params.append('username', username);
                    params.append('password', password);
                    axios
                        .post('user/login', params,config)
                        .then(response => {
                            alert(response.data.message)
                            console.log(response.data)
                        })
                        .catch(error => {
                            console.log(error)
                            this.errored = true
                        })
                        .finally(() => this.loading = false)
                }

            },
        }

    }
</script>

<style scoped>
    #login_body{
        min-height: 100vh;
        max-height: 100vh;
        background: #262626;
    }
    #back{
        height: 2rem;
        width: 2rem;
        margin-top: 2rem;
        margin-left: 10%;
    }
    #title{
        text-align: left;
        color: white;
        margin-left: 10%;
        font-size: 2rem;
        margin-bottom: 0;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
    #title_2{
        text-align: left;
        color: white;
        margin-left: 10%;
        font-size: 1.5rem;
        margin-top: 1rem;
        font-family:"Microsoft YaHei"
    }
    #title_3{
        text-align: left;
        color: white;
        margin-left: 10%;
        font-size: 1rem;
        margin-top: 3rem;
        margin-bottom: 0;
        font-family:"Microsoft YaHei"
    }

    .input{
        margin-left: 10%;
        margin-right: 10%;
        width: 80%;
    }

    #button{
        /*background: white;*/
        /*color: #262626;*/
        width: 80%;
        margin: 10%;
        padding: 1rem 0 1rem 0;
    }

    .footer{
        /*margin-top: -20%;*/
        padding-bottom: 10%;
    }



</style>
