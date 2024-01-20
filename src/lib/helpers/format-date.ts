export function formatDate(date: string): string {
    return new Date(date).toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

export function formatTime(date: string): string {
    return new Date(date).toLocaleTimeString('en-us', {
        hour: 'numeric'
    });
}
