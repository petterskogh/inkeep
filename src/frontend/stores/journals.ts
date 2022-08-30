import { writable } from 'svelte/store';

export const activeJournal = writable('');

// Journal
export const journals = writable([
  'journal-1',
  'journal-2',
  'journal-3',
  'journal-4',
]);