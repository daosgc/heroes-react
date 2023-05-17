import axios from 'axios';
import { parseItem, parseList } from './action-utils';
import API from './config';

export const deleteHeroApi = async hero => {
  const response = await axios.delete(`${API}/heroes/${hero.id}.json`);
  return parseItem(response, 200);
};

export const updateHeroApi = async hero => {
  const response = await axios.put(`${API}/heroes/${hero.id}.json`, hero);
  return parseItem(response, 200);
};

export const addHeroApi = async hero => {
  const response = await axios.post(`${API}/heroes.json`, hero);
  return parseItem(response, 201);
};

export const loadHeroesApi = async () => {
  const response = await axios.get(`${API}/heroes.json`);
  return parseList(response, 200);
};

export const loadHeroApi = async heroId => {
  const response = await axios.get(`${API}/heroes/${heroId}.json`);
  return parseItem(response, 200);
};
