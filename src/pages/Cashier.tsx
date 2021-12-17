import React, {FunctionComponent} from 'react';
import TopBar from '../components/cashier/TopBar';
import PayementPanel from "../components/cashier/PayementPanel";

interface OwnProps {
}

type Props = OwnProps;

const Cashier: FunctionComponent<Props> = (props) => {

    return (
        <>
            <PayementPanel/>
        </>
    );
};

export default Cashier;
