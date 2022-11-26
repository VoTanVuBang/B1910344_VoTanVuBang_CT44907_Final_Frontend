import { createWebHistory, createRouter } from "vue-router";
import AdminHomePage from "../components/admin/HomePage.vue";
import AdminDetailPage from "../components/admin/DetailPage.vue";
import AdminAddBook from "../components/admin/AddBook.vue";
import AdminEditBook from "../components/admin/EditBook.vue";
import HomePage from "../components/user/HomePage.vue";
import DetailPage from "../components/user/DetailPage.vue";
import  AdminAuthors from "../components/admin/AdminAuthors.vue"
import  AdminEditAuthors from "../components/admin/EditAthor.vue";
import  AdminAddAuthors from "../components/admin/AddAuthor.vue";

const routes = [
    {
        path: "/admin",
        name: "adminHomepage",
        component: AdminHomePage,
    },
    {
        path: "/admin/detail",
        name: "adminDetail",
        component:AdminDetailPage,
    },
    {
        path: "/admin/addbook",
        name: "adminAddbook",
        component: AdminAddBook,
    },
    {
        path: "/admin/editbook",
        name: "adminEditbook",
        component: AdminEditBook,
    },
    //Xem danh sách tác giả
    {
        path: "/admin/authors",
        name: "adminAuthors",
        component: AdminAuthors,
    },
    {
        path: "/admin/addauthor",
        name: "adminAddAuthors",
        component: AdminAddAuthors,
    },
    {
        path: "/admin/editauthor",
        name: "adminEditAuthors",
        component: AdminEditAuthors,
    },
    
    {
        path: "/",
        name: "homepage",
        component: HomePage,
    },
    {
        path: "/detail",
        name: "detail",
        component: DetailPage,
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;  