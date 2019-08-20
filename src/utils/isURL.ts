// eslint-disable-next-line max-len
const isURL = (url: string): boolean => /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/.test(url);

export default isURL;
