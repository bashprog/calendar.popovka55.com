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
    _id: string;
    date: string;
    duration: number;
    plane: {_id: string; name: string};
    author: IUser;
    comments?: IComments[];
}

export interface IFormattingDates {
    day: string;
    array: DatesArray[];
}