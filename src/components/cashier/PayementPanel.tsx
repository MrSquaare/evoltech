import React, {FunctionComponent} from 'react';
import {Box, Button, Typography} from "@mui/material";

interface OwnProps {
}

type Props = OwnProps;

const PayementPanel: FunctionComponent<Props> = (props) => {

    return (
        <Box>
            <Box className="price-view"
                 sx={{display: 'flex', width: 337, backgroundColor: "#EFEFEF", height: 71, marginBottom: 2}}>
                <Box
                    sx={{
                        flex: '1',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingLeft: 2,
                        border: '1px solid #CCCCCC'
                    }}>
                    <Typography fontSize={32}>
                        Total :
                    </Typography>
                </Box>
                <Box sx={{
                    flex: '1',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingRight: 2,
                    border: '1px solid #CCCCCC'
                }}>
                    <Typography fontSize={32}>
                        {26.50} €
                    </Typography>
                </Box>
            </Box>

            <Button color={"primary"} variant={"contained"} sx={{width: 337, height: 71, fontSize: 36}}>
                Payer
            </Button>

        </Box>
    );
};

export default PayementPanel;
