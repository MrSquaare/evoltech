import {Box, Container, Paper} from '@mui/material';
import React, {FunctionComponent, useCallback, useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Digicode from '../components/login/Digicode';

type Props = {};

const Login: FunctionComponent<Props> = (props) => {
    const [code, setCode] = useState<string>("");
    const handleSubmit = useCallback(
        () => {
            
        },
        [],
    );

    return (
        <Container maxWidth={"sm"}>
            <Box className="code-container" sx={{marginBottom: "2rem"}}>
                <Paper elevation={3}
                       sx={{padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <span>{code}</span>
                    <CloseIcon onClick={() => setCode("")}/>
                </Paper>
            </Box>
            <Box className="digit-container">
                <Digicode onSubmit={handleSubmit} onSetCode={setCode}/>
            </Box>
        </Container>
    );
};

export default Login;
