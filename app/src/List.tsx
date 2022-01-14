import React from 'react';

interface IProps {
    book: {
        author: string,
        description: string,
        title: string,
        publisher: string,
        age_group: string,
        contributor?: string,
        contributor_note?: string,
        price?: string,
        primary_isbn10: string,
        primary_isbn13: string
    },
    bestsellerList: [][]
}

const List: React.FC<IProps> = ({ bestsellerList }) => {
    const renderList = (): JSX.Element[] => {
        return bestsellerList.map(book => {
            return (<li className="List">
                <div className="List-header">
                    <h2>{book.title}</h2>
                </div>
                test
            </li>);
        })
};

return (<div>I am a List</div>);
};

export default List;
