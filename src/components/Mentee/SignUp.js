import React, { useState, useEffect } from 'react';
import validator from 'validator';
import { FormControl, TextField, Button, Typography, Grid, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Mentor from '../../assets/images/men-sign.jpg'
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
const Signup = (props) => {
    console.log(props);
    const menteeData = {
        name: '',
        email: '',
        password: '',
        linkedInUrl: '',
        error: false,
        errorEmail: false,
        errorPass: false,
        name_error_text: null,
        email_error_text: null,
        password_error_text: null,

    };
    const [formData, setFormData] = useState(menteeData);
    const [validEmail, setValidEmail] = useState(false);
    const [validPass, setValidPass] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        HandleButton();
    }, [validEmail, validPass]);

    const HandleButton = () => {
        if (validEmail && validPass)
            setBtnDisabled(false);
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (value) => {
        if(value=='close')
        props.history.push('/');
        if(value=='login')
        props.history.push('/mentee-login');
        setOpen(false);
    };

    const RedirectToMentor=()=>{
        props.history.push('/mentor-register');
    }


    const handleTextChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        });
    };
    const ValidateName = () => {
        if (formData.name === "") {
            setFormData({
                ...formData,
                error: true,
                name_error_text: "You must provide a name"
            });
        }
    }
    const ValidatePass = () => {
        if (formData.password === "" || !formData.password) {
            setFormData({
                ...formData,
                password_error_text: null
            });
        } else {
            if (formData.password.length >= 6) {
                setValidPass(true);
                setFormData({
                    ...formData,
                    password_error_text: null,
                    errorPass: false
                });
            } else {
                setFormData({
                    ...formData,
                    password_error_text: "Your password must be at least 6 characters",
                    errorPass: true,
                });
            }
        }
    }

    const ValidateEmail = () => {
        console.log(formData.email);
        if (formData.email === "") {
            setFormData({
                ...formData,
                email_error_text: null
            });
        } else {
            if (validator.isEmail(formData.email)) {
                setValidEmail(true);
                setFormData({
                    ...formData,
                    email_error_text: null,
                    errorEmail: false
                });
            } else {
                setFormData({
                    ...formData,
                    email_error_text: "Sorry, this is not a valid email",
                    errorEmail: true
                });
            }
        }
    }

    return (
        <React.Fragment>
            <Container>
                <Grid container spacing={4}>
                    <Grid item container sm={6} spacing={2}>
                        <Grid item xs={12}>
                            <Typography color="primary" variant="h4">Sign up as a Mentee</Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <FormControl fullWidth margin="normal" variant="filled">
                                <TextField
                                    required
                                    id="name"
                                    label="Name"
                                    color="primary"
                                    variant="filled"
                                    error={formData.error}
                                    value={formData.name}
                                    helperText={formData.name_error_text}
                                    onBlur={ValidateName}
                                    onChange={handleTextChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <FormControl fullWidth margin="normal" variant="filled">
                                <TextField
                                    required
                                    id="email"
                                    label="E-mail"
                                    color="primary"
                                    variant="filled"
                                    helperText={formData.email_error_text}
                                    error={formData.errorEmail}
                                    value={formData.email}
                                    onChange={handleTextChange}
                                    onBlur={ValidateEmail}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <FormControl fullWidth margin="normal" variant="filled">
                                <TextField
                                    required
                                    id="password"
                                    label="Password"
                                    color="primary"
                                    variant="filled"
                                    helperText={formData.password_error_text}
                                    error={formData.errorPass}
                                    value={formData.password}
                                    onChange={handleTextChange}
                                    onBlur={ValidatePass}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <FormControl fullWidth margin="normal" variant="filled">
                                <TextField

                                    id="linkedInUrl"
                                    label="LinkedIn Url"
                                    color="primary"
                                    variant="filled"
                                    value={formData.linkedInUrl}
                                    onChange={handleTextChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item container justify="center" sm={9} >
                            <Grid item   >
                                <Button variant="contained" color="primary" disabled={btnDisabled} onClick={handleClickOpen}>Sign Up</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container sm={6} spacing={2} justify='center' alignContent="center" >

                        <Grid item xs={12} sm={6}>
                            <Typography color="primary" variant="h5">Are You a Mentor?</Typography>
                        </Grid>

                        <Grid item xs={12} sm={9}>
                            <img alt="complex" src={Mentor} style={{ maxWidth: "75%" }} />
                        </Grid>

                        <Grid item xs={12} sm={6} >
                            <Button variant="text" color="primary" onClick={RedirectToMentor}>Sign Up here</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            <Dialog
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
            </Dialog>
        </React.Fragment>


    )
}
export default Signup;