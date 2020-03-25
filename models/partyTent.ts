import {MeetingResource} from "./MeetingResource";

export class PartyTent implements MeetingResource{
    name: string;
    capacity: number;
    companyOwned: boolean;
    tablesIncluded: number;
}

export const partyTentsData: PartyTent[] = [
    { name: "a",capacity: 1, companyOwned: true ,  tablesIncluded: 1},
    { name: "b",capacity: 2, companyOwned: false ,  tablesIncluded: 2},
    { name: "c",capacity:3, companyOwned: true ,  tablesIncluded: 3},
    { name: "d",capacity: 4, companyOwned: false ,  tablesIncluded: 4},
]