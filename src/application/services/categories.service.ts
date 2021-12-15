import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
    create(){
        return "This method create an category";
    }
}