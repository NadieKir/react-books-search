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

        return index + 30;
      }
    } catch (e) {
        console.log(e.message);
    } finally {
        setIsLoading(false);
    }
  };

  const loadToIndex = async(withFilter, toIndex) => {
    try {
      setIsLoading(true);
      setFilter(withFilter);

      const firstFetch = await BookService.getBooks(withFilter, 0);
      let resultItems = [];

      for (let i = 0; i < (toIndex / 30) - 1; i++) {
        const result = await BookService.getBooks(withFilter, (i + 1) * 30)
        resultItems = [...resultItems, ...result.items];
      }
      
      setData({...firstFetch, items: [...firstFetch.items, ...resultItems]});

      if (toIndex + 30 >= firstFetch.totalItems) {
        setHasMore(false);
      }

      setIndex(toIndex);
    } catch (e) {
        console.log(e.message);
    } finally {
        setIsLoading(false);
    }
  }

  return [fetch, loadMore, loadToIndex, data, isLoading, hasMore];
}