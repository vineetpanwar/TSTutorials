import {MeetingResource} from "./MeetingResource";

export class ConferenceRoom implements MeetingResource{
    name: string;
    capacity: number;
    hasProjector: boolean;
    location: string;
}

export const conferenceRoomsData: ConferenceRoom[] = [
    { name: "a",capacity: 1, hasProjector: true, location: "bangalore1"},
    { name: "b",capacity: 2, hasProjector: false, location: "bangalore2"},
    { name: "c",capacity: 3, hasProjector: true, location: "bangalor33"},
    { name: "d",capacity: 4, hasProjector: false, location: "bangalore4"},
]