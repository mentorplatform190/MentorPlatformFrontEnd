import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Typography, Grid, Container, Paper, Avatar } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PublicIcon from '@material-ui/icons/Public';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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

const Dashboard = (props) => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();
    return (

        <Container style={{ marginBottom: "40px" }}>
            {isTablet ? (
                <Grid container sm={12} spacing={2}>
                    <Grid container sm={12} xs={12} >
                        <Paper style={{ display: "flex", flexDirection: 'column' }} classes={{ root: classes.root }}>
                            <Container>
                                <Grid item container direction="row" style={{ marginTop: "15px", marginBottom: "15px" }} spacing={1}>
                                    <Grid item sm={2} xs={6}>
                                        <Avatar src="" className={classes.large} >
                                            <Typography color="primary" >RG</Typography>
                                        </Avatar>
                                    </Grid>
                                    <Grid item sm={4} xs={6} style={{ alignSelf: 'center' }}>
                                        <Typography color="primary" variant="h6">Ritika Gupta</Typography>
                                    </Grid>
                                    <Grid item sm={6} xs={12} spacing={4} style={{ alignSelf: 'center' }}>
                                        <Typography color="primary" variant="h6">Product Manager at Zoom</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={12} sm={12} direction="row" justify="space-between">
                                    <Grid item>
                                        <Typography color="primary" className={classes.borderStyling} >UX-Design</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography color="primary" className={classes.borderStyling} >UX-Design</Typography>
                                    </Grid>
                                    {!isMobile ? (<Grid item>
                                        <Typography color="primary" className={classes.borderStyling}>JavaScript</Typography>
                                    </Grid>) : null}
                                </Grid>

                                <Grid item sm={12} style={{ marginTop: '10px' }}>
                                    <Typography color="primary" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                                </Grid>
                                <Grid item container direction="row" style={{ margin: "15px 0 15px 0" }}>
                                    <Grid item container sm={8} xs={12} direction="row" justify="space-between">
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
                                        <Grid item>
                                            <LinkedInIcon />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item sm={12} style={{ marginTop: '30px' }}>
                                    <Typography color="primary" variant="h6" >Slots Available</Typography>
                                </Grid>
                                <Grid item sm={12} >
                                    <Typography color="primary"  >20-12-20, Saturday</Typography>
                                </Grid>
                                <Grid item container sm={12} direction="row" spacing={2} style={{ marginBottom: '30px', marginTop: "10px" }}>
                                    <Grid item container sm={12} justify="space-between" spacing={2}>
                                        <Grid item>
                                            <Typography color="primary" className={classes.borderStyling} >11:00 AM-12:00 PM </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography color="primary" className={classes.borderStyling} >11:00 AM-12:00 PM</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography color="primary" className={classes.borderStyling} >11:00 AM-12:00 PM</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={12} style={{paddingLeft:"10%"}}>
                                    <Button variant="contained" color="primary">Book</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Paper>
                    </Grid>
                </Grid>
            )
                :


                (<Grid container sm={12} justify="center">
                    <Grid item sm={2} container justify="flex-end" alignContent="center">
                        <Avatar src="" className={classes.large} >
                            <Typography color="primary" variant="h2">RG</Typography>
                        </Avatar>
                    </Grid>
                    <Grid item sm={8} >
                        <Paper style={{ display: "flex", flexDirection: 'column' }} classes={{ root: classes.root }}>
                            <Container>
                                <Grid item container direction="row" style={{ marginTop: "15px" }}>
                                    <Grid item sm={4} >
                                        <Typography color="primary" variant="h6">Ritika Gupta</Typography>
                                    </Grid>
                                    <Grid item container sm={8} direction="row" justify="space-evenly">
                                        <Grid item>
                                            <Typography color="primary" className={classes.borderStyling} >UX-Design</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography color="primary" className={classes.borderStyling} >UX-Design</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography color="primary" className={classes.borderStyling} >UX-Design</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item sm={12}>
                                    <Typography color="primary" variant="h6">Product Manager At Zoom</Typography>
                                </Grid>
                                <Grid item sm={12} >
                                    <Typography color="primary" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                                </Grid>
                                <Grid item container direction="row" style={{ margin: "15px 0 15px 0" }}>
                                    <Grid item container sm={8} xs={6} direction="row" justify="space-between">
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
                                        <Grid item>
                                            <LinkedInIcon />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item sm={12} style={{ marginTop: '30px' }}>
                                    <Typography color="primary" variant="h6" >Slots Available</Typography>
                                </Grid>
                                <Grid item sm={12} >
                                    <Typography color="primary">20-12-20, Saturday</Typography>
                                </Grid>

                                <Grid item container sm={12} direction="row" style={{ marginBottom: '30px', marginTop: "10px" }}>
                                    <Grid item container sm={8} justify="space-between">
                                        <Grid item>
                                            <Typography color="primary" className={classes.borderStyling} >11:00 AM-12:00 PM </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography color="primary" className={classes.borderStyling} >11:00 AM-12:00 PM</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography color="primary" className={classes.borderStyling} >11:00 AM-12:00 PM</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={4} style={{ paddingLeft: "10%" }}>
                                        <Button variant="contained" color="primary">Book</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Paper>
                    </Grid>
                </Grid>)}
        </Container>
    )
}
export default Dashboard;