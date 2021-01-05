import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    buttonRoot: {
        color: "white"
    },
    buttonOutlined: {
        borderColor: "white"

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            flexGrow: 1
        },

    },
    headerOptions: {
        display: "flex",
        flex: 1
    },
}));

const Header = (props) => {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (pageUrl) => {
        history.push(pageUrl)
        setAnchorEl(null);
    };
    const handleButtonClick = (pageUrl) => {
        history.push(pageUrl)
    }

    return (
        <Grid container >
            <AppBar position="static">
                <Toolbar>
                    <Grid item sm={2} xs={10} >
                    <Button color="secondary" onClick={() => handleButtonClick('/')}>My Mentor</Button>
                           
                    </Grid>
                    {isMobile ? (<Grid xs={2} justify="space-evenly">
                        <IconButton edge="start"
                            className={classes.menuButton}
                            color="inherit" aria-label="menu"
                            onClick={handleMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={() => setAnchorEl(null)}
                        >
                            <MenuItem onClick={() => handleMenuClick}>Find My Mentor</MenuItem>
                            <MenuItem onClick={() => handleMenuClick}>Blog</MenuItem>
                            <MenuItem onClick={() => handleMenuClick}>Contact</MenuItem>
                            <MenuItem onClick={() => handleMenuClick('/mentor-register')}>Become A Mentor</MenuItem>
                            <MenuItem onClick={() => handleMenuClick('/mentee-login')}>LOG IN</MenuItem>
                            <MenuItem onClick={() => handleMenuClick('/mentee-register')}>SIGN UP</MenuItem>
                        </Menu>
                    </Grid>) :
                        (<Grid item container sm={10} spacing={1} justify="space-evenly"
                            alignItems="center">

                            <Grid item>
                                <Button color="secondary" onClick={() => handleButtonClick}>Find My Mentor</Button>
                            </Grid>
                            <Grid item>
                                <Button color="secondary" onClick={() => handleButtonClick}>Blog</Button>
                            </Grid>
                            <Grid item>
                                <Button color="secondary" onClick={() => handleButtonClick}>Contact</Button>
                            </Grid>
                            <Grid item>
                                <Button color="secondary" onClick={() => handleButtonClick('/mentor-register')}>Become A Mentor</Button>
                            </Grid>
                            <Grid item>
                                <Button color="secondary" classes={{ outlined: classes.buttonOutlined }} variant="outlined" onClick={() => handleButtonClick('/mentee-login')}>LOG IN</Button>
                            </Grid>
                            <Grid item>
                                <Button color="secondary" classes={{ outlined: classes.buttonOutlined }} variant="outlined" onClick={() => handleButtonClick('/mentee-register')}>SIGN UP</Button>
                            </Grid>
                        </Grid>
                        )
                    }

                </Toolbar>
            </AppBar>
        </Grid>
    );
}
export default withRouter(Header);