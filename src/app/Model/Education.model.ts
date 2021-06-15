import { User } from "./User.model";

export class Education{
    id: number;
    instituteName: string;
    degreeName: string;
    location: string;
    startTime: Date;
    endTime: Date;
    continuing: boolean;
    user: User = new User();
}