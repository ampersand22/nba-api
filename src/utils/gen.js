import { defaultTo, head, path, pathOr, pipe, split } from 'ramda';
import randomstring from 'randomstring';

export const generateRandomCode = (len = 24, opts = {}) => randomstring.generate({
    length: len,
    charset: 'alphanumeric',
    ...opts
});
export const generatePinCode = (len = 6, opts = {}) => randomstring.generate({
    length: len,
    charset: 'numeric',
    ...opts
});

const splitForwarded = pipe(defaultTo(''), split(/, /), head);
export const getBrowserId = (req) => {
    const forwarded = path(['headers', 'x-forwarded-for'], req);
    const ip = forwarded ? splitForwarded(forwarded) : pathOr('n/a', ['connection', 'remoteAddress'], req);
    return Buffer(ip).toString('base64');
}