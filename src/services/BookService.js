import axios from 'axios';
import { apiKey } from '../constants/constants'

export default class BookService {
  static async getBooks(filter, index) {
    let request = `https://www.googleapis.com/books/v1/volumes?q=intitle:${filter.query}`;
    if (filter.category !== 'any') request = request + `+subject:${filter.category}`;
    request = request + `&orderBy=${filter.sort}&key=${apiKey}&startIndex=${index}&maxResults=30`;

    const response = await axios.get(request);
    return response.data;
  }
}