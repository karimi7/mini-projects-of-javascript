import Book from './Book';
import React, { useState } from 'react';

export default function AddForm() {
    const [books, setBooks] = useState();
    const [title, setTitle] = useState();
    const [auther, setAuther] = useState();
    const [year, setYear] = useState();

    return (
        <>
            <form id="book-form" autoComplete="off">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input type="text" id="year" className="form-control" />
                </div>

                <input
                    type="submit"
                    value="Add Book"
                    className="btn btn-warning btn-blick add-btn"
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
                    <Book />
                </tbody>
            </table>
        </>
    );
}
