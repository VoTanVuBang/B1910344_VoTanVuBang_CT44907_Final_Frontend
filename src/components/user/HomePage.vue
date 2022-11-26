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
        <div class="header bg-success text-light">
            <h1>Danh sách sản phẩm</h1>
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
.header h1{
    justify-content: center;
    display: flex;
    align-content: center;
}

.footer p {
    text-align: center;
    font-weight: 900;
}
</style>