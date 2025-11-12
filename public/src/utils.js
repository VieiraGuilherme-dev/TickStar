export const saveEvents = (events) => {
    localStorage.setItem('tickstar-events', JSON.stringify(events));
};

export const loadEvents = () => {
    const events = localStorage.getItem('tickstar-events');
    return events ? JSON.parse(events) :[];
}