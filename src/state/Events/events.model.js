export type Event = {
    id: number,
    type: string,
    title: string,
    description: string,
    timing: {
        start: Date,
        end: Date
    }
}