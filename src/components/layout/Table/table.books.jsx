import React, { useContext } from 'react'
import { FetchDataContext } from '../../context/fetchDataContext';

function BooksTable() {
    const context = useContext(FetchDataContext);

    const { books } = context

    return (
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>ISBN</td>
                    <td>Authors</td>
                    <td>Number of pages</td>
                    <td>Country</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {books.map(book => {
                            return (
                                <li key={book.url} name={book.name}>{book.name}</li>
                            )
                        })}
                    </td>
                    <td>
                        {books.map(book => {
                            return (
                                <li key={book.url} name={book.isbn}>{book.isbn}</li>
                            )
                        })}
                    </td>
                    <td>
                        {books.map(book => {
                            return (
                                <li key={book.url} name={book.authors}>{book.authors}</li>
                            )
                        })}
                    </td>
                    <td>
                        {books.map(book => {
                            return (
                                <li key={book.url} name={book.numberOfPages}>{book.numberOfPages}</li>
                            )
                        })}
                    </td>
                    <td>
                        {books.map(book => {
                            return (
                                <li key={book.url} name={book.country}>{book.country}</li>
                            )
                        })}
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr></tr>
            </tfoot>
        </table>
    )
}

export default BooksTable;
