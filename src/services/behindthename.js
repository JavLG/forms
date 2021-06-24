import axios from 'axios';

async function getData(name){
        let axiosResponse = await axios.get(`https://www.behindthename.com/api/lookup.json?key=we415832249&name=${name}`);
        return axiosResponse;
    }


export default getData;