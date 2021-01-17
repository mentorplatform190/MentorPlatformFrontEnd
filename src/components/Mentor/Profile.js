import React, { useState, useEffect } from 'react';
import validator from 'validator';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { FormControl, TextField, Button, Typography, Grid, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,Avatar } from '@material-ui/core';
import Mentor from '../../assets/images/men-sign.jpg'
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
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
            width: theme.spacing(5),
            height: theme.spacing(5),
        },
        width: theme.spacing(10),
        height: theme.spacing(10),


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
const Signup = (props) => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();
    console.log(props);
    const menteeData = {
        jobTitle: '',
        category: '',
        pricePerSession: '',
        bio: '',
        company: '',
        tags: '',
        experience: '',
        graduatedAt: '',
        mobileNumber: ''
    };
    // const [formData, setFormData] = useState(menteeData);
    // const [validEmail, setValidEmail] = useState(false);
    // const [validPass, setValidPass] = useState(false);
    // const [btnDisabled, setBtnDisabled] = useState(true);
    // const [open, setOpen] = useState(false);
    // useEffect(() => {
    //     HandleButton();
    // }, [validEmail, validPass]);

    // const HandleButton = () => {
    //     if (validEmail && validPass)
    //         setBtnDisabled(false);
    // }
    // const RegisterButton = () => {
    //     props.history.push('/');
    // }
    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    // const handleClose = (value) => {
    //     setOpen(false);
    // };

    const RedirectToMentor = () => {
        props.history.push('/mentor-register');
    }


    // const handleTextChange = (event) => {
    //     setFormData({
    //         ...formData,
    //         [event.target.id]: event.target.value
    //     });
    // };
    // const ValidateName = () => {
    //     if (formData.name === "") {
    //         setFormData({
    //             ...formData,
    //             error: true,
    //             name_error_text: "You must provide a name"
    //         });
    //     }
    // }
    // const ValidatePass = () => {
    //     if (formData.password === "" || !formData.password) {
    //         setFormData({
    //             ...formData,
    //             password_error_text: null
    //         });
    //     } else {
    //         if (formData.password.length >= 6) {
    //             setValidPass(true);
    //             setFormData({
    //                 ...formData,
    //                 password_error_text: null,
    //                 errorPass: false
    //             });
    //         } else {
    //             setFormData({
    //                 ...formData,
    //                 password_error_text: "Your password must be at least 6 characters",
    //                 errorPass: true,
    //             });
    //         }
    //     }
    // }

    // const ValidateEmail = () => {
    //     console.log(formData.email);
    //     if (formData.email === "") {
    //         setFormData({
    //             ...formData,
    //             email_error_text: null
    //         });
    //     } else {
    //         if (validator.isEmail(formData.email)) {
    //             setValidEmail(true);
    //             setFormData({
    //                 ...formData,
    //                 email_error_text: null,
    //                 errorEmail: false
    //             });
    //         } else {
    //             setFormData({
    //                 ...formData,
    //                 email_error_text: "Sorry, this is not a valid email",
    //                 errorEmail: true
    //             });
    //         }
    //     }
    // }

    return (

        <Container>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                        <Typography color="primary" variant="p">Your Profile</Typography>
                    </Grid>
                    <Grid container spacing={2}>
                    <Grid item sm={1}>
                    <Avatar alt="Remy Sharp" src="/home/manish/Desktop/projectTester/src/assets/images/facebook.png" className={classes.large}/>
                        </Grid>
                    <Grid item xs={4} sm={1}>
                        <Button variant="text" color="primary" onClick={RedirectToMentor}>Upload Picture</Button>
                    </Grid>
                    <Grid item xs={4} sm={3}>
                        <Button variant="text" color="primary" onClick={RedirectToMentor}>Import From LinkedIn</Button>
                    </Grid>
                        </Grid>
            <Grid item container spacing={2} sm={6}>
                <Grid item container sm={12} spacing={2}>
                    <Grid item xs={12} sm={9}>
                        <FormControl fullWidth margin="normal" variant="outlined">
                            <TextField
                                required
                                id="jobTitle"
                                label="Job Title"
                                color="primary"
                                variant="outlined"
                                // error={formData.error}
                                // value={formData.name}
                                // helperText={formData.name_error_text}
                                // onBlur={ValidateName}
                                // onChange={handleTextChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <FormControl fullWidth margin="normal" variant="outlined">
                            <TextField
                                required
                                id="category"
                                label="Category"
                                color="primary"
                                variant="outlined"
                                error={formData.error}
                                value={formData.name}
                                helperText={formData.name_error_text}
                                onBlur={ValidateName}
                                onChange={handleTextChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <FormControl fullWidth margin="normal" variant="outlined">
                            <TextField
                                required
                                id="pricePerSession"
                                label="Price per Session"
                                color="primary"
                                variant="outlined"
                                // error={formData.error}
                                // value={formData.name}
                                // helperText={formData.name_error_text}
                                // onBlur={ValidateName}
                                // onChange={handleTextChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <FormControl fullWidth margin="normal" variant="outlined">
                        <TextField
                        //id="outlined-multiline-static"
                        id="bio"
                        label="Bio*"
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                        </FormControl>
                    </Grid>
                    {/* <Grid item xs={12} sm={9}>
                    <form >
                    <TextField
                        id="datetime-local"
                        label="Date and Time Slots"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        //className={classes.textField}
                        InputLabelProps={{shrink: true,}}/>
                    </form>
                    </Grid> */}
                </Grid>
                    </Grid>
                    <Grid item container sm={6} spacing={2}>
                    <Grid item xs={12} sm={9}>
                        <FormControl fullWidth margin="normal" variant="outlined">
                            <TextField
                                required
                                id="company"
                                label="Company"
                                color="primary"
                                variant="outlined"
                                // error={formData.error}
                                // value={formData.name}
                                // helperText={formData.name_error_text}
                                // onBlur={ValidateName}
                                // onChange={handleTextChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <FormControl fullWidth margin="normal" variant="outlined">
                            <TextField
                                required
                                id="tags"
                                label="Tags"
                                color="primary"
                                variant="outlined"
                                // error={formData.error}
                                // value={formData.name}
                                // helperText={formData.name_error_text}
                                // onBlur={ValidateName}
                                // onChange={handleTextChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <FormControl fullWidth margin="normal" variant="outlined">
                            <TextField
                                required
                                id="graduatedAt"
                                label="Graduated At"
                                color="primary"
                                variant="outlined"
                                // error={formData.error}
                                // value={formData.name}
                                // helperText={formData.name_error_text}
                                // onBlur={ValidateName}
                                // onChange={handleTextChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <FormControl fullWidth margin="normal" variant="outlined">
                            <TextField
                                required
                                id="mobileNumber"
                                label="Mobile Number"
                                color="primary"
                                variant="outlined"
                                // error={formData.error}
                                // value={formData.name}
                                // helperText={formData.name_error_text}
                                // onBlur={ValidateName}
                                // onChange={handleTextChange}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item container justify="center"  alignItems="center" sm={12}>
                     <Grid item xs={4} sm={3} >
                        <Button variant="text" color="primary" onClick={RedirectToMentor}>Edit</Button>
                        </Grid>
                     <Grid item xs={4} sm={3} >
                        <Button variant="text" color="primary" onClick={RedirectToMentor}>Submit</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>

        /* <Dialog
            open={open}
            onClose={handleClose}>
            <DialogTitle disableTypography style={{backgroundColor: 'beige'}}>
               <div style={{display:'flex'}}>
               < CheckCircleSharpIcon color="primary"style={{width:'2em', height:'3em',paddingRight:'10px'}} />
               <h2>Successfully Registered with My Mentor</h2>
               </div>
            </DialogTitle>
            <DialogContent>
                <DialogContentText >
                 <div style={{display:'flex',justifyContent:'center'}}>
                 <h2>Please Login To Continue</h2> 
                 </div>
      </DialogContentText>
            </DialogContent>
            <DialogActions  style={{display:'flex',justifyContent:'space-around'}}>
                <Button onClick={()=>handleClose('close')} color="primary" variant='outlined'>
                   Close
      </Button>
                <Button onClick={()=>handleClose('login')} color="primary" variant='contained' autoFocus>
                   Login
      </Button>
            </DialogActions>
        </Dialog> */



    )
}
export default Signup;

