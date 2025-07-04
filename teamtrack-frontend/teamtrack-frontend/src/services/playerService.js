import api from './api';

const API_URL = '/players';

export const getPlayers = () => {
    return api.get(API_URL);
};

export const getPlayerById = (id) => {
    return api.get(`${API_URL}/${id}`);
};

export const createPlayer = (player) => {
    return api.post(API_URL, player);
};

export const updatePlayer = (id, player) => {
    return api.put(`${API_URL}/${id}`, player);
};

export const deletePlayer = (id) => {
    return api.delete(`${API_URL}/${id}`);
};