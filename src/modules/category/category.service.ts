/* 
   ele será reponsavel por 
    . criar categoria
    . listar categoria
    . buscar categoria por id
    . atualizar  categoria
    . excluir categoria



    não recebe req e resp
    não define rotas
    não sabe nada de HTTP

*/

import Category from "./category.model.js";
import type {
  ICreateCategoryDTO,
  IUpdateCategoryDTO
} from"./category.types.js";

class CategoriyService{


    public async create(data: ICreateCategoryDTO){
            const category = await  Category.create({
            
              name: data.name,
              description : data.description ??"",
              active:data.active?? true
            });

    }
}

export default new  CategoriyService();