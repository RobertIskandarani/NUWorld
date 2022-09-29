import React from 'react';

function SubItem({ title, description }) {
    return (
        <div className="mint-box-sub">
            <p>{title}</p>
            <p className="mint-bold">{description}</p>
        </div>
    );
}

export default SubItem;
