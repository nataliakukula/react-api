import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/photos";
// Export the ajax call to get the json
export default {
    get: function () {
        //Max content lenght defined in bits allowed
        return axios.get(url, { maxContentLength: 2000 });
    }
};