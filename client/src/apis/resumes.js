//importing axios to make api requests
import axios from 'axios';

//creating and exporting an instance of axios
export default axios.create({
    baseURL: 'http://localhost:3001'
});