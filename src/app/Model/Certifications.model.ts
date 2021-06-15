import { User } from "./User.model";

export class Certifications{
    id: number;
    name: string;
    instituteName: string;
    startTime: Date;
    endTime: Date;
    continuing: boolean;
    user: User = new User();
}