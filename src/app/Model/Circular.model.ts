import { User } from "./User.model";

export class Circular{
    id: number;
    startTime: Date;
    deadTime: Date;
    name: string;
    seats: number;
    details: string;
    token: string;
    owner: User;
    applicants: User[] = [];
} 