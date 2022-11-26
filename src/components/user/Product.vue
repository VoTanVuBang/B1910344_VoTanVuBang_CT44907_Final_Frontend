<script>
import axios from "axios";
    export default{
        props: ['data'],
        methods: {
            async onDelete(){
                alert("Xóa thành công");
                await axios.delete("http://localhost:6969/api/books/"+this.data._id);

                this.$router.go();
            }
        }
    }
    
</script>
<template>
    <div class="product">
        <router-link :to="{path: '/detail', query: { id:  data._id}}">
                <div class="title mr-2 text-uppercase ">
                   <h1>Tên sách:{{data.name}}</h1>
                </div>
                <div class="price">
                    <p>Giá:{{ data.price}} VNĐ</p>
                </div>
            </router-link>
        </div>
</template>

<style scoped>
.title{
    text-align: center;
    font-size: 16px;
    color:#333;
    padding-bottom: 20px;
    padding-top: 10px;
    
}
.title h1{
    font-size:16px
}
.product:hover{
    background-color:rgb(0, 255, 153);
}
.product:hover h1{
    color:ghostwhite;
}
.product{
    padding-right:36px ;
    padding-bottom: 20px;
    margin: 20px 36px;
    border: 1px solid chartreuse;
}
.price{
    color:red;
    margin-top: 20px;
}
</style>