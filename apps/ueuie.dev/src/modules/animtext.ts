type Frame = {
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
};

export class AnimText {
    private el: HTMLElement;
    private chars: string;
    private queue: Frame[] = [];
    private frame: number = 0;
    private frameRequest!: number;
    private resolve!: () => void;

    constructor(el: HTMLElement, chars: string) {
        this.el = el;
        this.chars = chars;
        this.update = this.update.bind(this);
    }
    setText(newText: string, drag: number) {
        const oldText = this.el.innerText;
        const maxTextLength = Math.max(oldText.length, newText.length);
        const animationPromise = new Promise<void>(
            (resolve) => (this.resolve = resolve),
        );

        this.queue = [];

        for (let i = 0; i < maxTextLength; i++) {
            const idxStart = Math.floor(Math.random() * drag);
            const idxEnd = idxStart + Math.floor(Math.random() * drag);

            this.queue.push({
                from: oldText[i] || '',
                to: newText[i] || '',
                start: idxStart,
                end: idxEnd,
            });
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();

        return animationPromise;
    }
    update() {
        let result = '';
        let count = 0;

        for (let o = 0, r = this.queue.length; o < r; o++) {
            let { from, to, start, end, char } = this.queue[o]!;

            if (this.frame >= end) {
                count++;
                result += to;
            } else if (this.frame >= start) {
                if (!char || 0.75 > Math.random()) {
                    char = this.randomChar();
                    this.queue[o]!.char = char;
                }
                result += `<span class="dud">${char}</span>`;
            } else {
                result += from;
            }
        }
        (this.el.innerHTML = result),
            count === this.queue.length
                ? this.resolve()
                : ((this.frameRequest = requestAnimationFrame(this.update)),
                  this.frame++);
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]!;
    }
}
