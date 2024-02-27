import { AnimText } from '../modules/animtext';

export const CHARS = 'ABCDEFGHIJKLOPQRSTVUYWXZ';

export type Lines =
    | [
          string | undefined | null,
          string | undefined | null,
          string | undefined | null,
      ]
    | [string | undefined | null, string | undefined | null]
    | [string | undefined | null]
    | []
    | null
    | undefined;

export const teletype = document.querySelector('#teletype')!;
export const elements = teletype.querySelectorAll('li')!;
export const instances = [
    new AnimText(elements.item(0), CHARS),
    new AnimText(elements.item(1), CHARS),
    new AnimText(elements.item(2), CHARS),
];

export const changed = [false, false, false];

export const animate = {
    line: function (idx: 0 | 1 | 2, text?: string | null, drag?: number) {
        if (changed[idx] === false) {
            elements.item(idx).innerText = '';
            changed[idx] = true;
        }
        instances[idx]!.setText(text ?? '', drag ?? 15);
    },
};
