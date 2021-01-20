import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid, Container, Paper } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PublicIcon from '@material-ui/icons/Public';
import InstagramIcon from '@material-ui/icons/Instagram';
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

const MenteeReq = (props) => {
    const classes = useStyles();
    return (

        <Container style={{ marginBottom: "40px" }}>
            <Grid container sm={12} justify="center" spacing={6}>
                <Grid item sm={6} >
                    <Paper style={{ display: "flex", flexDirection: 'column' }} classes={{ root: classes.root }}>
                        <Container>
                            <Grid item container direction="row" style={{ marginTop: "15px" }} justify="space-between">
                                <Grid item sm={4} >
                                    <Typography color="primary" variant="h6">Rakesh</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color="primary" className={classes.borderStyling}>13th August, 11:00 am</Typography>
                                </Grid>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography color="primary" variant="h6">Student</Typography>
                            </Grid>
                            <Grid item sm={12} >
                                <Typography color="primary" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
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
                            </Grid>
                        </Container>
                    </Paper>
                </Grid>
                <Grid item container sm={4} direction="column" justify="center" alignItems="center" spacing={2}>
                    <Grid item >
                        <Button classes={{ containedPrimary: classes.successBtn }} variant="contained" color="primary" >Accept</Button>
                    </Grid>
                    <Grid item >
                        <Button variant="contained" color="primary" >Ask to reschedule</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container sm={12} justify="center" spacing={6}>
                <Grid item sm={6} >
                    <Paper style={{ display: "flex", flexDirection: 'column' }} classes={{ root: classes.root }}>
                        <Container>
                            <Grid item container direction="row" style={{ marginTop: "15px" }} justify="space-between">
                                <Grid item sm={4} >
                                    <Typography color="primary" variant="h6">Rakesh</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color="primary" className={classes.borderStyling}>13th August, 11:00 am</Typography>
                                </Grid>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography color="primary" variant="h6">Student</Typography>
                            </Grid>
                            <Grid item sm={12} >
                                <Typography color="primary" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
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
                            </Grid>
                        </Container>
                    </Paper>
                </Grid>
                <Grid item container sm={4} direction="column" justify="center" alignItems="center" spacing={2}>
                    <Grid item >
                        <Button classes={{ containedPrimary: classes.successBtn }} variant="contained" color="primary" >Accept</Button>
                    </Grid>
                    <Grid item >
                        <Button variant="contained" color="primary" >Ask to reschedule</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
export default MenteeReq;