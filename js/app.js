"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// import './LiberarianExtention';
//example of async programming using callbacks
// interface Callback{
//     (err: Error, titles: string[]): void
// }
// function clbkFN(err: Error, titles: string[]):void {
//     if (err){
//         console.log('Error')
//         return
//     }
//     console.log(titles.join('>'));
// }
// function getDelayedResponse(timeToBeDelayed: number, callBackFN: Callback): void{
//     setTimeout(() => {
//         if(timeToBeDelayed > 2){
//             callBackFN(null, ['hello','world']);
//         }
//         else{
//             callBackFN( new Error, [])
//         }
//     }, timeToBeDelayed)
// }
// getDelayedResponse(2.5,clbkFN);
//example of async programming using Promises
// function getDelayedResponse(timeToBeDelayed: number): Promise<string[]>{
//     let p:Promise<string[]> = new Promise((resolve: Function,reject: Function) => {
//         setTimeout(() => {
//             if(timeToBeDelayed > 2){
//                 resolve(['hello','world']);
//             }
//             else{
//                 reject(new Error("ERROR IN PROMISE"));
//             }
//         }, timeToBeDelayed)
//     })
//     return p;
// }
// getDelayedResponse(1.5)
//     .then(data => {
//         console.log(`Data: ${data}`)
//         throw new Error('something bad happened')
//     },reason => {return 0})
//     .then(curr => console.log(`length: ${curr}`))
//     .catch(err => console.log(`Error: ${err}`));
//example of async programming using Async Await
function getDelayedResponse(timeToBeDelayed) {
    var p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (timeToBeDelayed > 2) {
                resolve(['hello', 'world']);
            }
            else {
                reject(new Error("ERROR IN PROMISE"));
            }
        }, timeToBeDelayed);
    });
    return p;
}
function awaitedResponse() {
    return __awaiter(this, void 0, void 0, function () {
        var found;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getDelayedResponse(2.5)];
                case 1:
                    found = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
awaitedResponse().catch(function (e) { return console.log(e); });
// getDelayedResponse(1.5)
//     .then(data => {
//         console.log(`Data: ${data}`)
//         throw new Error('something bad happened')
//     },reason => {return 0})
//     .then(curr => console.log(`length: ${curr}`))
//     .catch(err => console.log(`Error: ${err}`));
//example of class decorator being used
// let lib1 = new UniversityLibrarian();
// let ref = new Encyclopedia('awdawd',321,321);
//changing the definition of teachCommunity
// try{
//     lib1.teachCommunity = () => console.log('hello')
// }
// catch(e){
//     console.log(e)
// // }
// lib1.teachCommunity()
//example of Declaration Mergin - Module augumentation
// let mergedBook: Book = {id:1,
//     publisher : 'Programming Press',
//     title:'adawd', author:'awdawd', available:true, category:Category.Biography, hasIndex:true
// };
// let newLibrarian = new UniversityLibrarian();
// newLibrarian.hostSeminar("science")
//example of polymorphic type, this can be either Library \Book or SUbclasses of it
// class LibraryBook {
//     Checkout(): this{
//         //do the stuff here
//         console.log('Cheecking out')
//         return this;
//     }
//     Checkin(): this {
//         //dp checkin stuff
//         if(this instanceof ChildrensBook)
//         console.log('Cheecking in childresBook')
//         if(this instanceof ElectronicBook)
//         console.log('Checking in ElectronicBook')
//         return this;
//     }
// }
// class ChildrensBook extends LibraryBook {
//     Clean(): this {
//         console.log('Cleaning a book');
//         return this;
//     }
// }
// class ElectronicBook extends LibraryBook {
//     RemoveFromCustomerDevice(): this {
//         console.log('REmoving book from dfevice.');
//         return this;
//     }
// }
// let kidbook = new ChildrensBook();
// kidbook.Checkin().Clean().Checkout();
// let eBook = new ElectronicBook()
// eBook.Checkin().RemoveFromCustomerDevice().Checkout();
// //STring Literal and Type Aliases
// type Frequency = 'monthly' | 'annually';
// function GetMagazineByFrequency(preferedFrequency: Frequency) {
//     //Do something here
// }
// //implementation of mixin function 
// function applyMixins(derivedCtor: any, baseCtors: any[]){
//     baseCtors.forEach( baseCtor => {
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach( name => {
//             derivedCtor.prototype[name] = baseCtor.prototype[name];
//         })
//     })
// }
// //combined the classes
// applyMixins(UniversityLibrarian, [Employee , Researcher]);
// let newLibrarian  = new UniversityLibrarian;
// newLibrarian.doResearch("science");
// type employeeCategory = 'Manager' | 'Non-manager';
// let empCateg: employeeCategory = 'Manager';
// interface TypeA {
//     name:string;
// }
// interface TypeB {
//     age:number;
// }
// //Examples of union and intersection
// let fixedType: string | number ;
// let mixedType: TypeA & TypeB = {
//     name:'Vineet',
//     age:20
// }
// console.log("VIneet");
// //Excample of tuple type 
// let a:[number , string , boolean] = [5,"sardae3rf", true];
// //small implementation of tuple type
// interface KeyValuePair<K,V> extends Array<K | V>{
//     0:K,
//     1:V
// }
// let vinTuple: KeyValuePair<string,number> = ["AWdawd",321];
// //Example of reusable functkon generic type
// let extralargeRooms: <U extends MeetingResource> (original: Array<U> , size: number) => Array<U>;
// let getBigRooms = extralargeRooms;
//  getBigRooms = (rooms,minSize) => {
//     let bigRooms = [];
//     rooms.forEach(r => {
//         if(r.capacity > minSize){
//             bigRooms.push(r);
//         }
//     })
//     return bigRooms;
// }
// let largeRooms: <U extends MeetingResource> (original: Array<U> , size: number) => Array<U>;
// largeRooms = getBigRooms;
// let bigRooms: ConferenceRoom[] = largeRooms<ConferenceRoom>(conferenceRoomsData,1);
// console.log(bigRooms);
// function shortenAarray<T>(data: Array<T> , amountToShorten: number): Array<T> {
//     return data.splice(amountToShorten, data.length);
// }
// var stringArray: string[]  = ["JS","Java","C++","C#"];
// let shortLang  = shortenAarray<string>(stringArray,2);
// console.log(shortLang);
// function GetAllBooks(): Book[] {
//     let books = [
//         {id: 1,title: "book1" , author: 'Author1' , available: true , category: Category.Biography},
//         {id: 2,title: "book2" , author: 'Author2' , available: false , category: Category.History},
//         {id: 3,title: "book3" , author: 'Author3' , available: true, category: Category.Biography}
//     ];
//     return books;
// }
// function LogFirstAvailable(books = GetAllBooks()): void {
//     let numberOfBooks: number = books.length;
//     let firstAvailable: string = '';
//     for(let currentBook of books){
//         if(currentBook.available){
//             firstAvailable = currentBook.title;
//             break;
//         }
//     }
//     console.log('Total Books: ' + numberOfBooks);
//     console.log('First Available: ' + firstAvailable);
// }
// function GetBookTitlesByCategory(categoryFilter: Category = Category.Biography): Array<string>{
//     console.log('Getting Book in the Category:' + Category[categoryFilter]);
//     const allBook = GetAllBooks();
//     const filteredTitles: string[] = [];
//     for(let currentBook of allBook){
//         if(currentBook.category === categoryFilter){
//             filteredTitles.push(currentBook.title);
//         }
//     }
//     return filteredTitles;
// }
// function LogBookTitles(titles: string[]): void {
//     for(let title of titles){
//         console.log(title);
//     }
// }
// function GetBookById(id: number): Book {
//     const allBooks = GetAllBooks();
//     return allBooks.filter(book => book.id === id)[0];
// }
// function CreateCustomerID(name: string , id: number): string {
//     return name + id;
// }
// //example of spread operator in TS
// function CheckoutBooks( customer:string , ...bookIds: number[]){
//     console.log(' Checking out books for ' + customer);
//     let booksCheckedOut: string[] = [];
//     for(let id of bookIds){
//         let book = GetBookById(id);
//         if(book.available) {
//             booksCheckedOut.push(book.title)
//         }
//     }
//     return booksCheckedOut;
// };
// //example of optional and default parameters
// function CreateCustomer(name: string, age?: number, city?: string): void{
//     console.log(' creating customer' + name);
//     if(age){
//         console.log('Age: ' + age);
//     }
//     if(city){
//         console.log('City: ' + city)
//     }
// }
// //example of method overloading
// function GetTitles(author: string) :string[];
// function GetTitles(available: boolean) :string[];
// function GetTitles(bookProperty: any) : string[]{
//     const allBooks = GetAllBooks();
//     const foundTitles: string[] = [];
//     if(typeof bookProperty === "string"){
//         //get all books by a particular author
//         for(let book of allBooks){
//             if(book.author === bookProperty){
//                 foundTitles.push(book.title);
//             }
//         }
//     }
//     else if(typeof bookProperty === "boolean"){
//         //get all books based on the specified availablility
//         for(let book of allBooks){
//             if(book.available === bookProperty){
//                 foundTitles.push(book.title);
//             }
//         }
//     }
//     return foundTitles;
// };
// function PrintBook(book: Book): void{
//     console.log(book.title + 'by' + book.author);
// }
// //*********************************** */
// //Example of genberiuc function 
// let inventory: Array<Book> = [
//         {id: 1,title: "book1" , author: 'Author1' , available: true , category: Category.Biography},
//         {id: 2,title: "book2" , author: 'Author2' , available: false , category: Category.History},
//         {id: 3,title: "book3" , author: 'Author3' , available: true, category: Category.Biography}
// ];
// let bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// let firstBook: Book = bookShelf.getFirst();
// let magazines:Array<Magazine> = [
//     {title: 't1',publisher: 'P1'},
//     {title: 't2',publisher: 'P2'},
//     {title: 't3',publisher: 'P3'}
// ];
// let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(element => magazineShelf.add(element));
// magazineShelf.printTitles();
// // let purgedBooks: Array<Book> = Purge<Book>(inventory);
// // console.log(purgedBooks)
// //Class Expressions
// // let Newspaper = class extends ReferenceItem{
// //     printCitation(): void{
// //         console.log(`Newspaper : ${this.title}`)
// //     }
// // }
// // let timesOfIndia = new Newspaper('the Times of india',1995);
// // timesOfIndia.printCitation();
// // //Inline class expression
// // class Novel extends class { title: string }{
// //     mainCharacter: string;
// // }
// // let favouriteNovel = new Novel();
// //Example of Abstract classes
// // let ref:Encyclopedia = new Encyclopedia("Harry Potter",2020,2);
// // ref.printItem();
// // ref.printCitation();
// // let ref: ReferenceItem = new ReferenceItem("harry potter",2020);
// // ref.printItem();
// // ref.publisher = "Radom";
// // console.log(ref.publisher);
// // let favoriteLibrarian: Librarian = new UniversityLibrarian();
// // favoriteLibrarian.name = "Vineet";
// // favoriteLibrarian.assistCustomer("Sumit");
// // let myBook:Book = {
// //     id: 5,
// //     author:'Vineet',
// //     title:'abc',
// //     available: true,
// //     category:Category.fiction,
// //     pages:250,
// //     markDamaged: (reason: string) => console.log('Damaged:' + reason)
// // };
// // let logDamage: DamangeLogger;
// // logDamage = (damage: string) => console.log('Damage reported: ' + damage)
// // logDamage('coffee stains');
// // PrintBook(myBook);
// // myBook.markDamaged('missing back cover');
// // const vinBooks = GetTitles(true)
// // LogBookTitles(vinBooks)
// // CreateCustomer('Vineet' , 25)
// // let myBooks: string[] = CheckoutBooks('vineet' , 2, 3);
// // LogBookTitles(myBooks);
// // LogFirstAvailable()
// // const biographyBooks = GetBookTitlesByCategory(Category.Biography);
// // LogBookTitles(biographyBooks);
// // biographyBooks.forEach((val,idx) => console.log(++idx + ' - ' + val));
// // //An example of assigning function Type 
// // let IDGenerator: (chars:string , nums: number) => string;
// // IDGenerator = CreateCustomerID;
// // IDGenerator = (name: string , id:number): string =>  name + id;
// // let myID: string  = IDGenerator("vineet", 27);
// // console.log(myID);
//# sourceMappingURL=app.js.map