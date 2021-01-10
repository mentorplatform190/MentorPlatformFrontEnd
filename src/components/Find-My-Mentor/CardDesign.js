import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Typography, Grid, Container, Paper, Avatar, Card, CardContent, CardHeader } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PublicIcon from '@material-ui/icons/Public';
import InstagramIcon from '@material-ui/icons/Instagram';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F1F9FF'
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {


        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(8),
            height: theme.spacing(8),
        },
        width: theme.spacing(25),
        height: theme.spacing(25),


    },
    successBtn: {
        backgroundColor: '#4caf50',
    },
    paymentDir: {
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        },
    },
    borderStyling: {
        borderWidth: '1px',
        borderStyle: 'inset',
        padding: '3px',
        backgroundColor: '#FFFFFF'
    }
}));

const CardDesign = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
    return (

        <Container style={{ marginBottom: "40px" }}>
            {isMobile ? (
                <Grid container sm={12} spacing={2}>
                    <Grid container sm={10} xs={12} >
                        <Paper style={{ display: "flex", flexDirection: 'column' }} classes={{ root: classes.root }}>
                            <Container>
                                <Grid item container direction="row" style={{ marginTop: "15px", marginBottom: "15px" }} spacing={1}>
                                    <Grid item sm={2} xs={6}>
                                        <Avatar src='' className={classes.large} >
                                            <Typography color="primary" variant="p">RG</Typography>
                                        </Avatar>
                                    </Grid>
                                    <Grid item sm={4} xs={6} style={{ alignSelf: 'center' }}>
                                        <Typography color="primary" variant="h6">Ritika Gupta</Typography>
                                    </Grid>
                                    <Grid item sm={6} xs={12} spacing={4} style={{ alignSelf: 'center' }}>
                                        <Typography color="primary" variant="h6">Product Manager At zoom</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={12} sm={12} direction="row" justify="space-between">
                                    <Grid item>
                                        <Typography color="primary" className={classes.borderStyling} variant="h7">javascript</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography color="primary" className={classes.borderStyling} variant="h7">Datascience</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography color="primary" className={classes.borderStyling} variant="h7">Datascience</Typography>
                                    </Grid>
                                </Grid>

                                <Grid item sm={12} style={{ marginTop: '10px' }}>
                                    <Typography color="primary" variant="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                                </Grid>
                                <Grid item container direction="row" style={{ margin: "15px 0 15px 0" }}>
                                    <Grid item container sm={6} xs={12} direction="row" justify="space-between">
                                        <Grid item>
                                            <InstagramIcon />
                                        </Grid>
                                        <Grid item>
                                            <FacebookIcon />
                                        </Grid>
                                        <Grid item>
                                            <TwitterIcon />
                                        </Grid>
                                        <Grid item>
                                            <PublicIcon />
                                        </Grid>
                                    </Grid>
                                    <Grid container item sm={6} xs={12} className={classes.paymentDir}>
                                        <Typography color="primary" variant="h6">550/hour</Typography>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Paper>
                    </Grid>

                    <Grid item container xs={12} sm={2} direction="row" justify="center" alignItems="center" spacing={2}>
                        <Grid item xs={6} sm={12}>
                            <Button classes={{ containedPrimary: classes.successBtn }} variant="contained" color="primary" >Book a session</Button>
                        </Grid>
                        <Grid item xs={6} sm={12}>
                            <Button variant="contained" color="primary" >View Profile</Button>
                        </Grid>
                    </Grid>
                </Grid>
            )
                :


                (<Grid container sm={12}>
                    <Grid item sm={2} container justify="flex-end" alignContent="center">
                        <Avatar src='' className={classes.large} >
                            <Typography color="primary" variant="h2">RG</Typography>
                        </Avatar>
                    </Grid>
                    <Grid item sm={6} >
                        <Paper style={{ display: "flex", flexDirection: 'column' }} classes={{ root: classes.root }}>
                            <Container>
                                <Grid item container direction="row" style={{ marginTop: "15px" }}>
                                    <Grid item sm={4} >
                                        <Typography color="primary" variant="h6">Ritika</Typography>
                                    </Grid>
                                    <Grid item container sm={8} direction="row" justify="space-evenly">
                                        <Grid item>
                                            <Typography color="primary" className={classes.borderStyling} variant="p">javascript</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography color="primary" className={classes.borderStyling} variant="p">Datascience</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography color="primary" className={classes.borderStyling} variant="p">Datascience</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item sm={12}>
                                    <Typography color="primary" variant="h6">Product Manager At zoom</Typography>
                                </Grid>
                                <Grid item sm={12} >
                                    <Typography color="primary" variant="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                                </Grid>
                                <Grid item container direction="row" style={{ margin: "15px 0 15px 0" }}>
                                    <Grid item container sm={6} xs={6} direction="row" justify="space-between">
                                        <Grid item>
                                            <InstagramIcon />
                                        </Grid>
                                        <Grid item>
                                            <FacebookIcon />
                                        </Grid>
                                        <Grid item>
                                            <TwitterIcon />
                                        </Grid>
                                        <Grid item>
                                            <PublicIcon />
                                        </Grid>
                                    </Grid>
                                    <Grid container item sm={6} justify="flex-end">
                                        <Typography color="primary" variant="h6">550/hour</Typography>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Paper>
                    </Grid>
                    <Grid item container sm={4} direction="column" justify="center" alignItems="center" spacing={2}>
                        <Grid item >
                            <Button classes={{ containedPrimary: classes.successBtn }} variant="contained" color="primary" >Book a session</Button>
                        </Grid>
                        <Grid item >
                            <Button variant="contained" color="primary" >View Profile</Button>
                        </Grid>
                    </Grid>
                </Grid>)}
        </Container>
    )
}
export default CardDesign;