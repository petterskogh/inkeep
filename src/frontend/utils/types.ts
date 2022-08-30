export type Color = 
  `#${string}` 
  | `rgb(${number}, ${number}, ${number})` 
  | `rgba(${number}, ${number}, ${number}, ${number})`
  | `var(--${string})`;
export type SymbolName = 'circles' | 'plus' | 'calendar' | 'settings';
export type Key = `${number}`;