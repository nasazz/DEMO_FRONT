import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL');

export const TABLE_PAGE_SIZE = new InjectionToken<number>('PAGE_SIZE');
export const PAGE_SIZE_OPTIONS = new InjectionToken<number[]>(
  'PAGE_SIZE_OPTIONS'
);
