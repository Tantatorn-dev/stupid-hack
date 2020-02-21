import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"
import {makeStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import SendIcon from "@material-ui/icons/Send"
import {IconButton} from "@material-ui/core";


const SalimHeader = styled.h1`
font-family: SOV_Tejo;
font-style: normal;
font-weight: bold;
font-size: 96px;
line-height: 130px;
`
const useStyles = makeStyles(theme => ({
        root: {
            '& > *': {
                background: "#E0E4EB",
                boxShadow: " inset 9px 9px 16px #A3B1C6, inset -9px -9px 16px rgba(255, 255, 255, 0.25)",
                borderRadius: "10px",
                border: "none",
                width: "685px",
                height: "75px",

            },
        },
        SendButton: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#FF1111",
            background: "#E0E4EB",
            boxShadow: "9px 9px 16px #A3B1C6, -9px -9px 16px rgba(255, 255, 255, 0.25)",
            borderRadius: "10px"
        },
        inputFocus: {
            width: '40%',
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            backgroundColor: "#00FF00",
        }
    }))
;

function App() {
    const classes = useStyles()
    return (
        <Container>
            <Grid container justify="center">
                <SalimHeader>
                    สลิ่ม
                </SalimHeader>
            </Grid>
            <form>
                <Grid container spacing={4} justify="center" alignItems="center">
                    <Grid item xs={2}></Grid>
                    <Grid item xs={7}>
                        <TextField className={classes.root} classes={{focused: classes.inputFocus}} variant="outlined"/>
                    </Grid>
                    <Grid item xs={1}>
                        <Card className={classes.SendButton}>
                            <IconButton>
                                <SendIcon fontSize="large" style={{color: "#FF1111"}}></SendIcon>
                            </IconButton>
                        </Card>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </form>
            <Grid container justify="center">
            </Grid>
        </Container>
    );
}

export default App;
