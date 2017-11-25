import {get} from '../get';

export const getAdData = () => get('/api/homead');

export const getListData = (city,page) => get('/api/homelist/' + encodeURLComponent(city) + '/' + page);