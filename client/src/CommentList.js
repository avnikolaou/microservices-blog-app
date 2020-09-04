import React from 'react';

export default ({ comments }) => {
    const rendredredComments = comments.map((comment) => {
        let content;

        if (comment.status === 'aproved') {
            content = comment.content;
        }

        if (comment.status === 'pending') {
            content = 'This comment is awaiting moderation';
        }

        if (comment.status === 'rejected') {
            content = 'This comment has been rejected';
        }
        return (
            <li key={comment.id}>{content}</li>
        )
    });

    return <ul>{rendredredComments}</ul>
};
