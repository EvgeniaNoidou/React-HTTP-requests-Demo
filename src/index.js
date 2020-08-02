import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';


const myInterceptorRequest = axios.interceptors.request.use(request => {
    console.log(request);
    //you will have to return the request, otherwise it will be blocked
    //you can edit the request config if you want to
    return request;
}, error => {
    //this error is related to sending the request like no internet connectivity
    console.log(error);
    return Promise.reject(error);
});
axios.interceptors.request.eject(myInterceptorRequest);

const myInterceptorResponse = axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
axios.interceptors.response.eject(myInterceptorResponse);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
