import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  extractLocalTimeFromISO(isoString: string): string {
    const date = new Date(isoString);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  }

  formatTimeString(
    time: string,
    format: string = 'hh:mm a',
    locale: string = 'en-US'
  ): string {
    if (!time) return '';

    try {
      // Create a Date object with dummy date (assumes time is in UTC)
      const dateObj = new Date(`1970-01-01T${time}`);
      return formatDate(dateObj, format, locale);
    } catch (e) {
      console.error('Invalid time format:', time);
      return time;
    }
  }
  formatDateOnly(
    isoString: string,
    format: string = 'MMM d, y', // e.g., Jul 23, 2025
    locale: string = 'en-US'
  ): string {
    if (!isoString) return '';

    try {
      const date = new Date(isoString);
      return formatDate(date, format, locale);
    } catch (e) {
      console.error('Invalid ISO date format:', isoString);
      return isoString;
    }
  }

  
}
