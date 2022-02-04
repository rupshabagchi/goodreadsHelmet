import React from 'react';

type Book = {
    title: string,
    description: string,
    author: string,
}

type BestsellerListProps = {[key: string]: {}};

const List: React.FC<BestsellerListProps> = ({ bestsellerList }) => {
    console.log(bestsellerList)
    const renderList = (): JSX.Element[] => {
        return Object.values(bestsellerList).map((book: Book) => 
            return (<li className="List">
                <div className="List-header">
                    <h2>{"hdhd"}</h2>
                </div>
            </li>);
        })
    };

    return (<div>{renderList()}</div>);
};

export default List;
