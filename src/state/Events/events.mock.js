// @flow
import { Event } from "./events.model";
import { EVENT_TYPES } from "./events.types";

export const eventsMock: Event[] = [
    {
        id: 1,
        type: EVENT_TYPES.WORK,
        title: 'Create a React-Native Calendar',
        description: 'Make sure you are ready to present this',
        date: new Date(),
        timing: {
            start: new Date().getTime(),
            end: new Date().getTime() + 3600000
        }
    }, {
        id: 2,
        type: EVENT_TYPES.PRIVATE,
        title: 'Prepare dinner',
        description: 'Pizza!',
        date: new Date(),
        timing: {
            start: new Date().getTime() + 3600000,
            end: new Date().getTime() + 7200000
        }
    }, {
        id: 3,
        type: EVENT_TYPES.SOCIAL,
        title: 'Drink with friends',
        description: 'Beers!',
        date: new Date(),
        timing: {
            start: new Date().getTime() + 7200000,
            end: new Date().getTime() + 10800000
        }
    },
];