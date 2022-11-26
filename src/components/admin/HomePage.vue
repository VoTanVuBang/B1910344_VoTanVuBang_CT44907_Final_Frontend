<script>
    import Product from "./Product.vue"
    import axios from "axios"
    export default{
        components: {Product},
        created:async function(){
            var a = await axios.get("http://localhost:6969/api/books/");
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
            <h1>Danh sách sản phẩm</h1>
            <router-link class="add_button" :to="{path:'/admin/addbook'}">
                <button class="add_button-active">Thêm</button>
            </router-link>
            <router-link class="author_button" :to="{path:'/admin/authors'}">
                <button class="author_button-active">Tác giả</button>
            </router-link>
        </div>

        <div class="body container d-flex row text-center">
            <product class="col-3" v-for="book in list" :key="book" :data="book"/>
        </div>

        <div class="footer bg-success text-light text-center font-weight-bold">
            <p>Make by Bangb1910344</p>
        </div>
    </div>
</template>

<style scoped>
.add_button{
    padding-top:13px
}
.author_button{
    padding-top:13px;
}
.author_button-active:hover{
    background-color:crimson;
    color:floralwhite;
    border:1px solid #fff;
}
.add_button-active:hover{
    background-color:crimson;
    color:floralwhite;
    border:1px solid #fff;
}
.footer p {
    text-align: center;
    font-weight: 900;
}
</style>