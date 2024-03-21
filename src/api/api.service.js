import Request from './request';
import ENV from '../constants/ENV';


const IS_LOCAL = true;

const request = new Request(IS_LOCAL ? ENV.API_BASE_URL: ENV.API_BASE_URL_DEPLOY);

//const getTodo = async (id = '') => await request.get(`/${id}`);

//const getTodo = async (term) => await request.get(`/`, {params: {term: term}});
const getTodo = async (params) => await request.get('/', params);
const getInfoByName = async (name) =>{
  const params= { term: name }
  return await request.get(ENV.API_BASE_URL, {params} );
}

const addTodo = async (data) => await request.post('/', data );

const updateTodo = async (id, data) => await request.put(`/${id}`, data);

const deleteTodo = async (id) => await request.delete(`/${id}`);

export default {
  getTodo,
  getInfoByName,
  addTodo,
  updateTodo,
  deleteTodo,
};
