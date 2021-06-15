import { Certifications } from "./Certifications.model";
import { Education } from "./Education.model";
import { Experience } from "./Experience.model";
import { Role } from "./Role.model";

export class User{
    id: number;
    name: string;
    mobileNumber: string;
    email: string;
    password: string;
    address: string;
    continuing: boolean;
    role: Role = new Role();
    experiences: Experience[] = [];
    educations: Education[] = [];
    certifications: Certifications[] = [];
}