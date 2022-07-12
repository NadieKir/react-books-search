import {useState} from "react";
import BookService from '../services/BookService'


export const useFetching = () => {
  const [data, setData] = useState();
  const [filter, setFilter] = useState();
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetch = async (filterToFetch) => {
    try 
    {
      setIsLoading(true);
      setFilter(filterToFetch);
      setData(undefined);
      setHasMore(true);
  
      const result = await BookService.getBooks(filterToFetch, 0);
      setData(result);
      
      if(30 >= result.totalItems) {
        setHasMore(false);
      }
  
      setIndex(30);
    } catch(e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  const loadMore = async () => {
    try {
      if(hasMore) {
        setIsLoading(true);
        const result = await BookService.getBooks(filter, index);
  
        setData({...data, items: [...data.items, ...result.items]});
  
        if (index + 30 >= result.totalItems) {
          setHasMore(false);
        }
  
        setIndex(prev => prev + 30);
      }
    } catch (e) {
        console.log(e.message);
    } finally {
        setIsLoading(false);
    }
  };

  return [fetch, loadMore, data, isLoading, hasMore];
}