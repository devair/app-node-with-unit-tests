import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm";

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectId | undefined;

    @Column()
    name: string | undefined;

    @Column()
    email: string | undefined;
}
