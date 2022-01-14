import axios from "axios";

const baseUrl = 'http://localhost:5000';

function requests (path, method) {
  return fetch(baseUrl + path, method)
    .then(res => res.status < 400 ? res : Promise.reject())
    .then(res => res.status !== 204 ? res.json() : res)
    .catch(e => { console.error('ERROR: ', e) });
}

function getItems () {
  return requests('/item');
}

function postItem (body) {
  return axios.requests('/item', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
}

async function uploadImg (file) {
  const formData = new FormData();
  formData.append('img', file);
  try {
    const res = await axios.post('http://localhost:5000/item/upload', formData);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}


const ApiService = { getItems, postItem, uploadImg };

export default ApiService;