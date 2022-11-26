<script>
import { computed } from '@vue/reactivity';
import axios  from 'axios';
    export default{
        props: ['detail'],
        created:async function() {
            var b = await axios.get("http://localhost:6969/api/books/"+this.id)
            this.book = b.data;
            
            var c = await axios.get("http://localhost:6969/api/authors/"+this.book.id_author)
            this.author = c.data;
        },
        data(){
            return {
            id : this.$route.query.id,
            book: "",
            author:"",
            }
    },
}
</script>
<template>
    <div class="container" >
        <div class="header text-center bg-success text-light">
            <h1>Chi tiết sản phẩm</h1>
        </div>

      <div class="detail text-center ">
            <div class="title text-uppercase">
                <h1>{{book.name}}</h1>
            </div>
            <div class="price text-danger">
                <p>Giá: {{book.price}}</p>
            </div>
            <div class="content text-justify">
                <p>{{book.detail}}</p>
            </div>
            <div>
                <p class="font-weight-bold">TÁC GIẢ</p>
                <p>Tên tác giả:{{this.author.name}}</p>
                <p>Email:{{this.author.email}}</p>
                <p>SĐT:{{this.author.phone}}</p>
            </div>
            <router-link to="/admin">Trang chủ</router-link>
      </div>
        <div class="footer bg-success text-light text-center font-weight-bold">
            <p>Make by Bangb1910344</p>
        </div>
    </div>
</template>