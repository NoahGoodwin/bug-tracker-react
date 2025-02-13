import React from "react";
import axios from 'axios';

export const getToken = () => {
    return localStorage.getItem('token');
}

export const userLogin = (authRequest) => {
    return axios({
        'method': 'POST',
        'url': `${process.env.hostUrl || 'http://localhost:8080'}/auth/login`,
        'data': authRequest
    })
}

export const fetchUserData = (authRequest) => {
    return axios({
        method: 'GET',
        url: `${process.env.hostUrl || 'http://localhost:8080'}/auth/userinfo`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}