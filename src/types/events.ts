export interface Creator {
    id: string;
    username: string;
    avator: string;
    avatorUrl: string;
    displayAvatarURL: string;
}

export interface Event {
    id: string;
    name: string;
    description: string;
    scheduledStartTimestamp: number;
    scheduledEndTimestamp: number | null;
    url: string;
    image: string;
}

export interface EventAPIResponse {
    err: Error | null;
    data: {
        events: Event[];
    };
}
