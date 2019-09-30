import axios from 'axios';

// create customised objects
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 37139efae6d4b380d3a9a078edcf778045b71782b97d0dde88cd7741f3610c33'
    }
});