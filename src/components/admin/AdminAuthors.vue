<script>
    import Author from "./Author.vue"
    import axios from "axios"
    export default{
        components: {Author},
        created:async function(){
            var a = await axios.get("http://localhost:6969/api/authors/");
            this.list = a.data;
        },
        data(){
            return {
                list: []
            }
        }
    }
</script>
<template>
    <div class="container">
        <div class="header text-center bg-success text-light d-flex justify-content-between">
            <h1 class="">TÁC GIẢ</h1>
            <router-link class="add_button" to="/admin/addauthor">
                <button class="add_button-active">Thêm</button>
            </router-link>
        </div >
        <div class="content body container d-flex row text-center">
            <author class="col-3" v-for="author in list" :key="author" :data="author"/>
        </div>
        <div class="d-flex justify-content-center font-weight-bold ">
            <router-link to="/admin">Trang chủ</router-link>
        </div>
        <div class="footer bg-success text-center font-weight-bold ">Make by BangB1910344</div>
    </div>
</template>
<style scoped>
.add_button{
    padding-top:13px;
}
.add_button-active:hover{
    background-color:crimson;
    color:floralwhite;
    border:1px solid #fff;
}
</style>