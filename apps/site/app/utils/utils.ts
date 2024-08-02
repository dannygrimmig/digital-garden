import { format } from 'date-fns';

export function formatDate(dateString?: string): string {
  const date = new Date(dateString || '');
  return format(date, 'MMMM dd, yyyy'); // Format as 'July 31, 2024'
}
