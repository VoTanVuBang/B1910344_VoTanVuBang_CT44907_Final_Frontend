<script>
import axios from "axios";
    export default{
        props: ['data'],
        methods: {
            async onDelete(){
                alert("Xóa thành công");
                await axios.delete("http://localhost:6969/api/authors/"+this.data._id);

                this.$router.go();
            }
        }
    }
    
</script>
<template>
    <div class="product">
            <div>
                <div class="title mr-2 ">
                   <h1>Tên tác giả:{{data.name}}</h1>
                </div>
                <div class="email">
                    <p>Email:{{ data.email}}</p>
                </div>
                <div class="phone">
                    <p>SĐT:{{ data.phone}}</p>
                </div>
            </div>
            <div class="d-flex  justify-content-between ">
                <router-link :to="{path:'/admin/editauthor', query: {id: data._id}}">
                    <button class="edit_button">Sửa</button>
                </router-link>
                <button class="delete_button" @click="onDelete">Xóa</button>
            </div>
        </div>
</template>

<style scoped>
.title{
    text-align: center;
    font-size: 36px;
}
.title h1{
    font-size:16px;
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

.edit_button:hover{
    background-color:crimson;
    color:floralwhite;
    border:1px solid #fff
    
}
.delete_button:hover{
    background-color:crimson;
    color:floralwhite;
    border:1px solid #fff
    
}
</style>