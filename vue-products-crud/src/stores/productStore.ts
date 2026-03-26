import { defineStore } from "pinia";
import type { Product } from "../types/productTypes";
import { ProductService } from "../services/productService";
import type { AxiosError } from "axios";

export const useProductStore = defineStore('product', {
    state: () => ({
        loading: false,
        products: [] as Product[],
        product: {},
    }),
    actions: {
        async getAllProducts() {
            this.loading = true
            try {
                const { data } = await ProductService.getAll()
                this.products = data
            } catch (error) {
                const err = error as AxiosError<{ message: string }>
                console.log(err.response?.data.message)
            } finally {
                this.loading = false
            }
        },
        async createProduct(product: Product){
            try {
                const { data } = await ProductService.create(product)
                console.log(data)
            } catch (error) {
                const err = error as AxiosError<{ message: string }>
                console.log(err.response?.data.message)
            }
        },
        async getById(id: number) {
            try {
                const { data } = await ProductService.get(id)
                this.product = data
            } catch (error) {
                const err = error as AxiosError<{ message: string }>
                console.log(err.response?.data.message)
            }
        },
        async update(id: number, product: Product){
            try {
                const { data } = await ProductService.update(id, product)
                this.product = data  
            } catch (error) {
                const err = error as AxiosError<{ message: string }>
                console.log(err.response?.data.message)
            }
        },
        async delete(id: number){
            try {
                await ProductService.delete(id)
            } catch (error) {
                const err = error as AxiosError<{ message: string }>
                console.log(err.response?.data.message)
            }

        }
    }
})