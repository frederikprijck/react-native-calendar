// @flow
import { Event } from "./events.model";
import { EVENT_TYPES } from "./events.types";

export const mockEvents: Event[] = [
    {
        id: new Date().getTime(),
        type: EVENT_TYPES.WORK,
        title: 'Create a React-Native Calendar',
        description: 'Make sure you are ready to present this',
        timing: {
            start: new Date().getTime(),
            end: new Date().getTime() + 3600000
        }
    }, {
        id: new Date().getTime() + 10,
        type: EVENT_TYPES.PRIVATE,
        title: 'Prepare dinner',
        description: 'Pizza!',
        timing: {
            start: new Date().getTime(),
            end: new Date().getTime() + 3600000
        }
    }, {
        id: new Date().getTime() + 20,
        type: EVENT_TYPES.SOCIAL,
        title: 'Drink with friends',
        description: 'Beers!',
        timing: {
            start: new Date().getTime(),
            end: new Date().getTime() + 3600000
        }
    },
];