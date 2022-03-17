import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class UsersEntity{
    @PrimaryGeneratedColumn('increment')
    public id:number;

    @Column({name:'userName', type:'varchar'})
    public userName:string;

    @Column({name:'userEmail', type:'varchar'})
    public userEmail:string;

    @Column({name:'userPass', type:'varchar'})
    public userPassword:string;

    @Column({name:'userActive', type:'integer'})
    public userActive:number;
}