// @flow
import { Event } from "./events.model";

export const EVENT_ACTION_TYPES = {
    CREATE_EVENT: 'CREATE_EVENT',
    UPDATE_EVENT: 'UPDATE_EVENT',
    DELETE_EVENT: 'DELETE_EVENT',
};

export const createEvent = (event: Event) => ({
    type: EVENT_ACTION_TYPES.CREATE_EVENT,
    event
});

export const updateEvent = (event: Event) => ({
    type: EVENT_ACTION_TYPES.UPDATE_EVENT,
    event
});

export const deleteEvent = (id: Event.id) => ({
    type: EVENT_ACTION_TYPES.DELETE_EVENT,
    id
});
