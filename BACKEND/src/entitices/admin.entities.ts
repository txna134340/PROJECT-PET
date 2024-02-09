import { Type } from "class-transformer";
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn,ManyToOne,ManyToMany,OneToMany} from "typeorm";
import User from 'src/entitices/user.entities';
import PetBaseEntity from './Petbaseentity.entities';


@Entity()
export default class Admin  {

    @Column()
    name : string;

    @Column()
    email : number;

    @Column()
    password : string;

    @ManyToOne(() => User, (user)=>user.pets)
    owner : User;

    @Column()
    status : string
}