import { createRouter, createWebHistory } from "vue-router";

import ProductListView from "../views/products/ProductListView.vue";
import ProductCreateView from "../views/products/ProductCreateView.vue";
import ProductEditView from "../views/products/ProductEditView.vue";

const routes = [
    {
        path: '/',
        name: 'products',
        component: ProductListView
    },
    {
        path: '/create',
        name: 'product-create',
        component: ProductCreateView
    },
    {
        path: '/edit/:id',
        name: 'product-edit',
        component: ProductEditView
    },
    {
        path: '/tasks',
        name: 'tasks',
        component: ()=> import('../views/tasks/TaskListView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router