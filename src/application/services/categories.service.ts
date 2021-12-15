import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
    create(){
        return "This method create an category";
    }

    list(){
        return "This method list only one category";
    }

    listAll(){
        return "This method list all categories";
    }

    update(){
        return "This method updates an category";
    }

    delete(){
        return "This method deletes an category"
    }
}