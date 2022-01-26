import axios from 'axios';
import { tmdbBaseAPI, tmdbToken } from './tmdbAPI';

// AXIOS
const timeoutDuration = 1000;
export const tmdbAPI = axios.create();
tmdbAPI.defaults.timeout = timeoutDuration;
tmdbAPI.defaults.baseURL = tmdbBaseAPI;
tmdbAPI.defaults.headers.common['Authorization'] = `Bearer ${tmdbToken}`;

// Error Messages
export const errorEncountered = 'Error was encountered processing this request';
export const timeoutMessage =
    "We are unable to fetch data at this time, kindly check your internet connection and we'll reconnect you.";
