import { MessageContent } from '../models'

export const getMessageContent = (raw) => {
    const mesContent = new MessageContent({text: raw.text,
        url: raw.url,
        type: raw.type});
    return mesContent
};