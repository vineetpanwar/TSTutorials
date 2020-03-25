import { Librarian} from './iterfaces';
import {sealed , logger , writable} from './decorator'

export class Employee {
    title: string;

    addToSchedule(): void {
        console.log('Employee added to schedule')
    }

    logTitle(): void{
        console.log(`Employee has the title ${this.title}`)
    }
}

export class Researcher {
    doResearch( topic: string): void{
        console.log(`Doing research on ${topic}.`)
    }
}

// export const CLASS_INFO = Symbol();


//An example of inheriting from different sub classes using mixin
//an exmample for using class decorator and sealing its contructor 
@logger
@sealed('University')
export class UniversityLibrarian implements Librarian, Researcher,Employee{
    name: string;
    email: string;
    department: string;

    // [CLASS_INFO]():void{
    //     console.log('this class represents university liberarian')
    // }

    //overwriting the definition of instanceOf
    // static [Symbol.hasInstance](obj: Object){
    //     return obj.hasOwnProperty('name') && obj.hasOwnProperty('assistCustomer')
    // }

    assistCustomer(custName: string){
        console.log(this.name + 'is assisting' + custName);
    }

    @writable(true)
    teachCommunity(){
        console.log('Teaching Community')
    }

    title: string;

    addToSchedule(): void {}

    logTitle(): void{}

    doResearch( topic: string): void{}
}

export abstract class ReferenceItem {
    private _publisher: string;
    static department:string = 'Research';

    constructor(public title: string, protected year: number){
        console.log('Creating a new Reference Item');
    }

    printItem(): void{
        console.log(`${this.title} was published in the year: ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    get publisher(): string{
        return this._publisher.toUpperCase();
    }
 
    set publisher(publisher: string){
        this._publisher = publisher;
    }

    abstract printCitation(): void;
}

@logger
export class Encyclopedia extends ReferenceItem{
    constructor(newTitle: string , newYear: number, public edition: number){
        super(newTitle,newYear);
    }

    printItem(): void{
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`)
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }

}