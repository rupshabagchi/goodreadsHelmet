import React, { useEffect, useState } from 'react';
import List from './List';
import './App.css';


type BookProps = {
  title: string,
  description: string,
  author: string,
}

type APIResponse = {
  book_details: BookProps[]
}


const App = () => {

  const [bestsellerList, setList] = useState<{}>([]);

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key= j4JErnSjmfdUNHlVSi1SIkwlnzwyd1Uv`, { method: 'get', })
      .then(response => response.json())
      .then(json => {
        let bookData: BookProps[] = [];
        json.results.map((res: APIResponse) => bookData.push(res.book_details[0]));
        bookData.map((book: BookProps) => ({
          [book.title]: {
            description: book.description,
            author: book.author,
          }
        }));
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