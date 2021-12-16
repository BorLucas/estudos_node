import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class ProductsEntity{
    @PrimaryGeneratedColumn()
    public productId:number;

    @Column({name:'productName', type:'varchar'})
    public productName:string;

    @Column({name:'productValue', type:'varchar'})
    public productValue:string;

    @Column({name:'productQuantity', type:'integer'})
    public productQuantity:number;

    @Column({name:'productOwner', type:'varchar'})
    public productOwner:string;
}