import React from 'react';
import Aux from 'react-aux';

function layout (props) {
    return(
        <Aux>
            <div>The Navigation</div>
            <div>The Sidebar</div>
                <div>{props.children}</div>
            <div>The Footer</div>
        </Aux>
    );
};

export default layout;
