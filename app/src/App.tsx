import React, { useEffect, useState } from 'react';
import List from './List';
import './App.css';

interface IState {
  bestsellerList: [][]
}


const App = () => {

  const [bestsellerList, setList] = useState<IState["bestsellerList"]>([]);

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key= j4JErnSjmfdUNHlVSi1SIkwlnzwyd1Uv`, { method: 'get', })
      .then(response => response.json())
      .then(json => {
        let bookData: [][] = [];
        json.results.map((res: { book_details: [][] }) => {
          bookData.push(res.book_details[0]);
        })
        setList(bookData);
      })
  }, []);

  return (
    <div className="App">
      <h1>Bestseller books</h1>
      <List bestsellerList={bestsellerList} />
    </div>
  );
}

export default App;

/*
api key: j4JErnSjmfdUNHlVSi1SIkwlnzwyd1Uv
*/