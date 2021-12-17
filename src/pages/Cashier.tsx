import React, {FunctionComponent} from 'react';
import TopBar from '../components/cashier/TopBar';

interface OwnProps {
}

type Props = OwnProps;

const Cashier: FunctionComponent<Props> = (props) => {

    return (
        <TopBar/>
    );
};

export default Cashier;
