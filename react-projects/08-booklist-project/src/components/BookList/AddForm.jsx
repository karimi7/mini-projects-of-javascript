import Book from './Book';
import React, { useState } from 'react';

export default function AddForm() {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');
    const [auther, setAuther] = useState('');
    const [year, setYear] = useState('');

    const titleHandler = (event) => {
        let titleValue = event.target.value;
        setTitle(titleValue);
        console.log(titleValue);
    };

    const authorHandler = (event) => {
        let autherValue = event.target.value;
        setAuther(autherValue);
    };

    const yearHandler = (event) => {
        let yearValue = event.target.value;
        setYear(yearValue);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (title && auther && year) {
            let newBooks = {
                id: books.length + 1,
                title,
                auther,
                year,
            };

            setBooks([...books, newBooks]);

            setTitle('');
            setAuther('');
            setYear('');
        }
    };

    return (
        <>
            <form id="book-form" autoComplete="off">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        onChange={titleHandler}
                        value={title}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id="author"
                        className="form-control"
                        onChange={authorHandler}
                        value={auther}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input
                        type="text"
                        id="year"
                        className="form-control"
                        onChange={yearHandler}
                        value={year}
                    />
                </div>

                <input
                    style={{ width: '100%' }}
                    id="btn"
                    type="submit"
                    value="Add Book"
                    className="btn btn-warning btn-blick add-btn"
                    onClick={submitHandler}
                />
            </form>

            <table className="table table-striped mt-5 text-center">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody id="book-list">
                    {books.map((book) => (
                        <Book {...book} key={book.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
