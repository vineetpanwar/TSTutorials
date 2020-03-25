"use strict";
exports.__esModule = true;
function clbkFN(err, titles) {
    if (err) {
        console.log('Error');
        return;
    }
    console.log(titles.join('>'));
}
function getDelayedResponse(timeToBeDelayed, callBackFN) {
    setTimeout(function () {
        if (timeToBeDelayed > 2) {
            callBackFN(null, ['hello', 'world']);
        }
        else {
            callBackFN(new Error, []);
        }
    }, timeToBeDelayed);
}
getDelayedResponse(1.5, clbkFN);
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
