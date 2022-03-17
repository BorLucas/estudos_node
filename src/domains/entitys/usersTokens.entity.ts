import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("usersTokens")
export class UsersTokensEntity{
    @PrimaryGeneratedColumn('increment')
    public id:number;

    @Column({name:'userId', type:'integer'})
    public userId:string;

    @Column({name:'userToken', type:'varchar'})
    public userToken:string;
}