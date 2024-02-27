// Container (must be doubled inside the component declaration to target the components properly)
const CONTAINERS_CLASS = 'RP-HXAVS21DXG';

// Constants
const Y = 2000;
let a = 0;
let b = 0;

const THETA_SPACING = 0.0175;
const PHI_SPACING = 0.0075;

const R1 = 1;
const R2 = 2;
const K2 = 5;

const containers = document.getElementsByClassName(
    CONTAINERS_CLASS,
) as HTMLCollectionOf<HTMLPreElement>;
if (!containers.length) {
    throw new Error('No container elements were found.');
}

setInterval(() => {
    a += THETA_SPACING;
    b += PHI_SPACING;

    const output: string[] = [...new Array(Y)].map((_, idx) =>
        idx % 80 === 79 ? '\n' : ' ',
    );

    const buffer = new Array(Y).fill(0);

    const cosa = Math.cos(a);
    const sina = Math.sin(a);
    const cosb = Math.cos(b);
    const sinb = Math.sin(b);

    for (
        let theta = 0;
        theta < 6.28; // 2π
        theta += THETA_SPACING
    ) {
        const costheta = Math.cos(theta);
        const sintheta = Math.sin(theta);

        for (
            let phi = 0;
            phi < 6.28; // 2π
            phi += PHI_SPACING
        ) {
            const sinphi = Math.sin(phi);
            const cosphi = Math.cos(phi);

            const circlex = R2 + R1 * costheta;

            const z = sinphi * circlex * sina + sintheta * cosa + K2;
            const ooz = 1 / z;

            const p = sinphi * circlex * cosa - sintheta * sina,
                d = 0 | (40 + 30 * ooz * (cosphi * circlex * cosb - p * sinb)),
                m = 0 | (12 + 15 * ooz * (cosphi * circlex * sinb + p * cosb)),
                luminocity =
                    0 |
                    (8 *
                        ((sintheta * sina - sinphi * costheta * cosa) * cosb -
                            sinphi * costheta * sina -
                            sintheta * cosa -
                            cosphi * costheta * sinb)),
                y = d + 80 * m;

            if (m < 22 && m >= 0 && d >= 0 && d < 79 && ooz > buffer[y]) {
                buffer[y] = ooz;
                output[y] = '.,-~:;=!*#$@'[luminocity > 0 ? luminocity : 0]!;
            }
        }
    }

    for (const container of Array.from(containers) as HTMLPreElement[]) {
        container.innerHTML = output.join('');
    }
}, 50);
