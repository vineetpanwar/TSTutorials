import { Category } from "./enums";

export interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamangeLogger;
}

export interface Book{
    publisher: string;
    hasIndex: boolean;
}

export interface DamangeLogger {
    (reason: string): void;
}

export interface Person{
    name: string;
    email: string;
}

export interface Author extends Person {
    numBooksPublished: number;
}

export interface Librarian extends Person{
    department: string;
    assistCustomer: (custName: string) => void;
}

export interface Magazine {
    title: string;
    publisher: string;
}
