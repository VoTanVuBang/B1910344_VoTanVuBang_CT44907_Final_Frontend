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
        methods: {
            submitAuthor(){
                alert("Thêm thành công");
                axios.post("http://localhost:6969/api/authors/",{
                    "name": this.authorName,
                    "email": this.authorEmail,
                    "phone": this.authorPhone,
                });
                //Reset lại trang
                this.$router.push("/admin/authors");
            }
            
        },
        data(){
            const authorFormSchema = yup.object().shape({
                name: yup
                        .string()
                        .required("Tên phải có giá trị."),
                    email:yup
                        .string()
                        .required("Email không hợp lệ.")
                        .email("E-mail không đúng.")
                        .max(50, "E-mail tối đa 50 ký tự."),
                    phone: yup
                        .string()
                        .matches(
                        /((09|03|07|08|05)+([0-9]{8})\b)/g,
                         "Số điện thoại không hợp lệ."
                        ),
                    });
                    
            return {
                authorName: "",
                authorEmail:"",
                authorPhone: "",
                authorFormSchema,
            }
        }
    }

</script>
<template>
    <Form
        class="form_add"
        @submit = "submitAuthor"
        :validation-schema="authorFormSchema"
    >
    <div class="title text-center bg-primary">THÊM TÁC GIẢ</div>
    <div class="form-group">
            <label for="name">Tên tác giả</label>
                <Field
                    name="name"
                    type="text"
                    class="form-control"
                    v-model="  authorName"
                />
                <ErrorMessage name="name" class="error-feedback" />
    </div>
    <div class="form-group">
            <label for="price">Email</label>
                <Field
                    name="email"
                    type="text-area"
                    class="form-control"
                    v-model="authorEmail"
                />
                <ErrorMessage name="email" class="error-feedback" />
    </div>
    <div class="form-group">
            <label for="detail">Phone:</label>
                <Field
                    name="phone"
                    type="text-area"
                    class="form-control"
                    v-model="authorPhone"
                />
                <ErrorMessage name="phone" class="error-feedback" />
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