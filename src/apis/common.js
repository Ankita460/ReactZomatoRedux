import {UPLOADFILE} from '../config/urls';
import{apiPost} from '../utils/utils';
export function uploadImage(data={}) {
const headers={'Content-Type': 'multipart/form-data'};
return apiPost(UPLOADFILE, data, headers);

}