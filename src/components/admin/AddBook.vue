<script>
    import * as yup from "yup";
    import {Form,Field, ErrorMessage,} from "vee-validate";
    import axios from "axios";
    export default{
        components: {
            Form,
            Field,
            ErrorMessage,
        },
        created:async function() {
            this.author_list =await axios.get("http://localhost:6969/api/authors/");
            this.author_list =  this.author_list.data;
        },
        methods: {
            submitBook(){
                alert("Thêm thành công");
                axios.post("http://localhost:6969/api/books/",{
                    "name": this.bookName,
                    "price": this.bookPrice,
                    "detail": this.bookDetail,
                    "id_author": this.selected,
                });
                //Reset lại trang
                this.$router.push("/admin");
            }
            
        },
        data(){
            const bookFormSchema = yup.object().shape({
                    name: yup
                        .string()
                        .required("Tên phải có giá trị."),
                    price: yup.string().required("Vui lòng thêm giá!"),
                    detail: yup.string().required("Vui lòng thêm chi tiết!")
                    });
                    
            return {
                bookName: "",
                bookPrice:"",
                bookDetail: "",
                bookFormSchema,
                selected:"",
                author_list:""

            }
        }
    }

</script>
<template>
    <Form
        class="form_add"
        @submit = "submitBook"
        :validation-schema="bookFormSchema"
    >
    <div class="title text-center bg-primary">THÊM SẢN PHẨM</div>
    <div class="form-group">
            <label for="name">Tên sách</label>
                <Field
                    name="name"
                    type="text"
                    class="form-control"
                    v-model=" bookName"
                />
                <ErrorMessage name="name" class="error-feedback" />
    </div>
    <div class="form-group">
            <label for="price">Giá sản phẩm</label>
                <Field
                    name="price"
                    type="text-area"
                    class="form-control"
                    v-model="bookPrice"
                />
                <ErrorMessage name="price" class="error-feedback" />
    </div>
    <div class="form-group">
            <label for="detail">Chi tiết:</label>
                <Field
                    name="detail"
                    as="textarea"
                    class="form-control"
                    v-model="bookDetail"
                />
                <ErrorMessage name="detail" class="error-feedback" />
    </div>
    <div class="form-group">
        <div>Tác giả:</div>
        <select name="" id="" v-model="selected">
                <option disabled value="">Chọn tác giả</option>
                <option v-for="author in author_list" :key="author"  :value="author._id">{{author.name}}</option>
        </select>
    </div>
    
    
    <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
    </div>
    </Form>
</template>
<style scoped>
    .form_add{
        /* border: 1px solid #333; */
        width: 300px;
        margin-left:auto ;
        margin-right:auto ;
    }
    .title{
        font-size: 30px;
        font-weight: bold;
        color: aliceblue;
    }
    .error-feedback{
        color: red;
    }
</style>