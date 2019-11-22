export interface IBusinessCard {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailAddress: string;
    company: string;
    additionalInfo: string;
}

export class BusinessCard implements IBusinessCard {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailAddress: string;
    company: string;
    additionalInfo: string;
}