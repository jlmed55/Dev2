import type { Request , Response} from"express";
import categoryService from "./category.service.js";
/*
 lidar com HTTP
 Receber request 
 Devolver response
*/

class CategoryController {

    public async create( request:Request, response: Response):Promise<Response>{
       // const name = request.body.name?? null;
        const {name, description,active} = request.body ?? {};

        const category = await categoryService.create({
            name,
            description,
            active
        });
        return response.status(201).json(category);
    }

}
export default new CategoryController();