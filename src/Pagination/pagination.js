import React from 'react';

export const Pagination = ({ articlesPerPage, totalCounries }) => {
    const pageNumbers = []
    
    for (let i=1; i < Math.ceil(totalCounries / articlesPerPage); i++)
    pageNumbers.push(i)

    return (
        <div>
            <ul> {
                pageNumbers.map(number => (
                        <li className="page-item" >
                            <a href="!#" className="page-link">
                                {number}
                                </a>
                        </li>
                ))
                }    
            </ul>
        </div>
 )
} 
