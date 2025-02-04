/**
 * Dummy feature
 * @param date - Date to format
 */
export function formatDate(date: string | number | Date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}