export interface IUser {
    _id: string;
    name: string;
    email: string;
    token: string;
    role?: string;
}

export interface IComments {
    comment: string;
    author: IUser;
}

export interface DatesArray {
    id: string;
    date: string;
    duration: number;
    author: IUser;
    comments?: IComments[];
}