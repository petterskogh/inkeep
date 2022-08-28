import { writable } from 'svelte/store';

export const activeJournal = writable('');

// Journal
export const journals = writable([
  'Journal 1',
  'Journal 2',
  'Journal 3',
  'Journal 4',
]);