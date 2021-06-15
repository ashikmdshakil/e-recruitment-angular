import { User } from "./User.model";

export class Experience{
    id: number;
    institutionName: string;
    location: string;
    designation: string;
    startTime: Date;
    lastTime: Date;
    user: User;
    continuing: boolean;
}