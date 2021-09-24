export interface IUser {
    _id: string;
    name: string;
    email: string;
    token: string;
    role?: string;
}

export interface IComments {
    _id: string;
    comment: string;
    author: IUser;
    fly_id: string;
}

export interface DatesArray {
    id: string;
    date: string;
    duration: number;
    author: IUser;
    comments?: IComments[];
}

export interface IFormattingDates {
    day: string;
    array: DatesArray[];
}