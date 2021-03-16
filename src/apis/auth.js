import {apiDelete, apiGet, apiPost, apiPut, setUserData} from '../utils/utils';
import {LOGIN, SIGNUP, UPLOADFILE} from '../config/urls';
import { date } from 'is_js';

export function login(data = {}) {
  return new Promise((resolve, reject)=>{
    apiPost(LOGIN, data).then(res=>{
      setUserData(res.data);
      resolve(res);

    }).catch(error=>{
      reject(error);
    })
  })
  // return apiPost(LOGIN, data);
}
export function Signup(data = {}) {
  return apiPost(SIGNUP, data);
}
//  export function UploadFile(data={}){
//    return apiPost(UPLOADFILE, data);
//  } 