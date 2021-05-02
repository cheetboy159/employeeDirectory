import axios from 'axios';

const URL = 'https://randomuser.me/api/';
const randomUsers = {
    search: (query) => {
        console.log(axios.get(URL + query))
        return axios.get(URL + query);
    }
}
export default randomUsers;