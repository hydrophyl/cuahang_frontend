import axios from 'axios';
import { TODOS_SERVER } from '../constants/server_config';

export const getTodos = async () => {
  try {
    const fetchedData = await axios.get(TODOS_SERVER);
    return fetchedData.data;
  } catch (error) {
    throw error;
  }
};
