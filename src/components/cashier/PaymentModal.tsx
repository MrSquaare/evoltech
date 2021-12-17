import {Box, Button, Typography} from '@mui/material';
import React, {FunctionComponent} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const PaymentModal: FunctionComponent<Props> = (props) => {

    return (
        <Box>
            <Typography>
                Sélectionnez un ou des moyens de paiement
            </Typography>
            <Box>
                <Box></Box><Box></Box><Box></Box>
            </Box>
            <Box>
                <Button>
                    Payer une partie
                </Button>
            </Box>
            <Box>
                <Button></Button><Button></Button><Button></Button>
            </Box>
        </Box>
    );
};

export default PaymentModal;
