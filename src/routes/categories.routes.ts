import {Router} from 'express';
import {v4 as uuidV4} from 'uuid'
import { Category } from '../model/Category';

const categoriesRoutes = Router()

const categories = []

categoriesRoutes.post("/", (request, response) => {
    const {name, description} = request.body

    
    const category: Category = {
        name,
        description,
        created_at: new Date()
    }
    categories.push(category)
    console.log(categories)

    return response.status(201).send()
})

export {categoriesRoutes}