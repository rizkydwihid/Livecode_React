import createStore from 'unistore';
import axios from 'axios';


const baseURL = "https://api-todofancy.herokuapp.com/api/";
const keyword = "movies";
const urlHeadLine = baseURL + keyword;
const urlHeadLine2 = baseURL + keyword;

const initialStore = {
    api_key: "",
    email: "",
    password: "",
    username: "",
    full_name:"",
    listMovie:[],
    listMovie2:[],
    is_login: false
    
};

export const store = createStore(initialStore)
export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value };
    },
    getURLMovie: async state =>{
        await axios
            .get(urlHeadLine)
            .then(function(response){
                store.setState({listMovie: response.data.movies})
            })
        await axios
            .get(urlHeadLine2)
            .then(function(response){
                store.setState({listMovie2: response.data.movies.Poster})    
            })
        .catch(function(error){
            });
        },
    postSignout: state => {
        return { is_login: false };
    },
    postLogin: async state => {
        const data = {username: state.username, password: state.password};
        await axios
        .post("https://api-todofancy.herokuapp.com/api/auth", data)
        .then(response => {
            console.log("postLogin resp", response.data);
            // if (response.data.hasOwnProperty("api_key")) {
                store.setState({
                    is_login: true,
                    // api_key: response.data.api_key,
                    username: response.data.user_data.username,
                    email: response.data.user_data.email
                });
            // }
        })
        .catch( error => {
            console.log(error);
        })
    }
});