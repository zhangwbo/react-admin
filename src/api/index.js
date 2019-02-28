import ajax from './ajax';

const prefix = process.env.NODE_ENV === 'development' ? '':'http://localhost:5000';


export const reqLogin = (username,password)=> ajax(prefix + '/login',{username,password},'POST');