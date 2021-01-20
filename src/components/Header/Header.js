import React, { useState, useRef} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
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
    const [openp, setOpen] = useState(false);
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const anchorRef = useRef(null);
    //const path = props.location.pathname.slice(1);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (pageUrl) => {
        history.push(pageUrl)
        setOpen(false);
    };

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
                            <MenuItem onClick={() => handleMenuClick('/find-mentor')}>Find My Mentor</MenuItem>
                            <MenuItem onClick={() => handleMenuClick}>Blog</MenuItem>
                            <MenuItem onClick={() => handleMenuClick}>Contact</MenuItem>
                            <MenuItem onClick={() => handleMenuClick('/mentor-register')}>Become A Mentor</MenuItem>
                            <MenuItem onClick={() => handleMenuClick('/mentee-login')}>LOG IN AS MENTEE</MenuItem>
                            <MenuItem onClick={() => handleMenuClick('/mentor-login')}>LOG IN AS MENTOR</MenuItem>
                            <MenuItem onClick={() => handleMenuClick('/mentee-register')}>SIGN UP</MenuItem>
                        </Menu>
                    </Grid>) :
                        (<Grid item container sm={10} spacing={1} justify="space-evenly"
                            alignItems="center">

                            <Grid item>
                                <Button color="secondary" onClick={() => handleMenuClick('/find-mentor')}>Find My Mentor</Button>
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
                                <Button color="secondary" classes={{ outlined: classes.buttonOutlined }} variant="outlined" ref={anchorRef}
                                    aria-controls={openp ? 'menu-list-grow' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle}>LOG IN </Button>
                            </Grid>
                            <Grid item>
                                <Button color="secondary" classes={{ outlined: classes.buttonOutlined }} variant="outlined"
                                    onClick={() => handleButtonClick('/mentee-register')}>SIGN UP</Button>
                                <Popper open={openp} anchorEl={anchorRef.current}  disablePortal>
                                    {() => (
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList autoFocusItem={openp} >
                                                    <MenuItem onClick={() => handleClose('/mentee-login')}>LOGIN AS MENTEE</MenuItem>
                                                    <MenuItem onClick={() => handleClose('/mentor-login')}>LOGIN AS MENTOR</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>

                                    )}
                                </Popper>

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