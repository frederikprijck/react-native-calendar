// @flow
import { Event } from "./events.model";
import { EVENT_TYPES } from "./events.types";

export const mockEvent: Event = {
    id: new Date().getTime(),
    type: EVENT_TYPES.WORK,
    title: 'Create a React-Native Calendar',
    description: 'Make sure you are ready to present this',
    timing: {
        start: new Date().getTime(),
        end: new Date().getTime() + 3600000
    }
};