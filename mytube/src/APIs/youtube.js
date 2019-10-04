import axios from 'axios';

const KEY = 'AIzaSyB55QrHGCnzgdvj6xh0FL53DE9FrUBCtz0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});