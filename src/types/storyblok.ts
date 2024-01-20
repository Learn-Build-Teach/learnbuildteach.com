export interface Social {
    name: string;
    id: number;
    content: {
        url: BlokUrl;
        icon: SBImage;
    };
}
export interface SBImage {
    id: string;
    filename: string;
    alt: string;
}
export interface BlokUrl {
    id: string;
    url: string;
    cached_url: string;
}

export interface PinnedEvent {
    component: 'pinned-event';
    title: string;
    cta_url: BlokUrl;
    cta_title: string;
    event: Event;
}

export interface EventContent {
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    url: BlokUrl;
    location: string;
    component: 'event';
    cover: SBImage;
    socials: Social[];
}

export interface Event {
    name: string;
    slug: string;
    release_date: string;
    published_at: string;
    created_at: string;
    id: number;
    content: EventContent;
    url: BlokUrl;
    quick_note: string;
}
