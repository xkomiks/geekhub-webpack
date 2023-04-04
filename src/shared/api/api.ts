import axios from 'axios';

import { LOCAL_STORAGE_USER_KEY } from 'shared/consts/localStorage';

const token = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
const authHeader = token ? { authorization: `Bearer ${token}` } : {};

export const $api = axios.create({
  baseURL: __API_URL__,
  headers: {
    ...authHeader
  }
});
