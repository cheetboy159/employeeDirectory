import axios from "axios";
const url = "https://randomuser.me/api/?page=1&results=60";

const randomizer = {
    search: function () {
        return axios.get(url);
    }
};
export default randomizer;