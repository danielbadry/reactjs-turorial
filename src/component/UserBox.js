import React from 'react';
import { List, TextField} from "react-admin";


const cardStyle = {
    width: 300,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};

const UserGrid = ({ ids, data}) => (
    <div style={{ margin: '1em' }}>
        {ids.map(id =>
            <div key={id} style={cardStyle} >
                <TextField record={data[id]} source="company.catchPhrase" />
                <TextField record={data[id]} source="name" />
            </div>
        )}
    </div>
);
UserGrid.defaultProps = {
    data: {},
    ids: [],
};

export const UserBox = (props) => (
    <List {...props}>
        <UserGrid />
    </List>
);