import { User } from "./User.model";

export class Role{
    id: number;
    name: string;
    type: string;
    users: User[] = []
}