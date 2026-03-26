import type { AxiosResponse } from "axios";
import api from "../api/axios";
import type { Product } from "../types/productTypes";

export const ProductService = {
    async getAll(): Promise<AxiosResponse<Product[]>>{
        return api.get('/products')
    },

    async get(id:number): Promise<AxiosResponse<Product>>{
        return api.get(`/products/${id}`)
    },

    async create(product: Product):Promise<AxiosResponse<Product>> {
        return api.post('/products',product)
    },

    async update(id:number, product:Product):Promise<AxiosResponse<Product>>{
        return api.patch(`/products/${id}`,product)
    },

    async delete(id:number):Promise<AxiosResponse<void>> {
        return api.delete(`/products/${id}`)
    }
}
