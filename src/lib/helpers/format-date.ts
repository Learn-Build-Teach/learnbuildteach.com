export function formatDate(date: number): string {
    return new Date(date).toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

export function formatTime(date: number): string {
    return new Date(date).toLocaleTimeString('en-us', {
        hour: 'numeric'
    });
}
