export const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(' ');
export type Tone = 'tomato' | 'sun' | 'mint' | 'sky';
