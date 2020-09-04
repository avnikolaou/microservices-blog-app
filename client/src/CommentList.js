import React from 'react';

export default ({ comments }) => {
    const rendredredComments = comments.map((comment) => {
        return (
            <li key={comment.id}>{comment.content}</li>
        )
    });

    return <ul>{rendredredComments}</ul>
};
