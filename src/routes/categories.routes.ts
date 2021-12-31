import {Router} from 'express';
<<<<<<< HEAD

import { CategoriesRepository } from '../repositories/CategoriesRepository';


const categoriesRepository = new CategoriesRepository()
const categoriesRoutes = Router()

=======
import {v4 as uuidV4} from 'uuid'
import { Category } from '../model/Category';

const categoriesRoutes = Router()

const categories = []
>>>>>>> 3ef1d81e55a9d7b86ae8eeb862b9ac2b5cbf1ab9

categoriesRoutes.post("/", (request, response) => {
    const {name, description} = request.body

<<<<<<< HEAD
    const categoryAlreadyExists = categoriesRepository.findByName(name)

    if (categoryAlreadyExists){
        return response.status(400).json({error: "Category already exists"})
    }

    categoriesRepository.create({name,description})
    return response.status(201).send()
})

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list()
    return response.json(all)
})

=======
    
    const category: Category = {
        name,
        description,
        created_at: new Date()
    }
    categories.push(category)
    console.log(categories)

    return response.status(201).send()
})

>>>>>>> 3ef1d81e55a9d7b86ae8eeb862b9ac2b5cbf1ab9
export {categoriesRoutes}