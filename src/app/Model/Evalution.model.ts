import { Circular } from "./Circular.model";
import { User } from "./User.model";

export class Evalution{
    id: number;
    marks: number;
    comment: string;
    status: string;
    applicant: User;
    circular: Circular;
}