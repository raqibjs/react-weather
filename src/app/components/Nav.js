import React from 'react';
import { Link, IndexLink } from 'react-router';

import { List, ListItem } from 'material-ui';

import ActionAccountBalance from 'material-ui/svg-icons/action/account-balance';
import ActionCardGiftcard from 'material-ui/svg-icons/action/card-giftcard';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';


const Nav = () => {
    return (
        <List>
            <ListItem leftIcon={<ActionAccountBalance />}>
                <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
                    Get Weather
                    </IndexLink>
            </ListItem>

            <ListItem leftIcon={<ActionAssignment />}>
                <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About </Link>
            </ListItem>
            <ListItem leftIcon={<ActionCardGiftcard />}>
                <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
            </ListItem>

        </List>
    )
}

export default Nav;