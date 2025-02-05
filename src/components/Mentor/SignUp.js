import React, { useState, useEffect } from 'react';
import validator from 'validator';
import { FormControl, TextField, Button, Typography, Grid, Container } from '@material-ui/core';
import axios from "axios";
import Mentor from '../../assets/images/men-sign.jpg'
const Signup = (props) => {
    const menteeData = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: false,
        errorEmail: false,
        errorPass: false,
        errorConfirmPass: false,
        name_error_text: null,
        email_error_text: null,
        password_error_text: null,
        confirm_password_error_text: null,


    };
    const [formData, setFormData] = useState(menteeData);
    const [validEmail, setValidEmail] = useState(false);
    const [validPass, setValidPass] = useState(false);
    const [validConfirmPass, setValidConfirmPass] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);

    useEffect(() => {
        HandleButton();
    }, [validEmail, validPass,validConfirmPass]);

    const HandleButton = () => {
        if (validEmail && validPass && validConfirmPass)
            setBtnDisabled(false);
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
    const RedirectToProfile = () => {
        const data = {
            name: formData.name,
            email: formData.email,
            password: formData.password
        }
       
        axios.post('/register/mentor', data)
            .then(function (response) {
               
                localStorage.setItem('Mentortoken', response.data.token);
                localStorage.setItem('Mentorid', response.data.user_data.id);
                props.history.push('/mentor-profile');
            })
            .catch(function (error) {
                console.log(error);
            });
      
    }
    const ValidateEmail = () => {
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
    const MatchPass = () => {
        if (formData.password !== formData.confirmPassword) {
            setFormData({
                ...formData,
                confirm_password_error_text: "Sorry, Password donot match",
                errorConfirmPass: true
            });
        } else {
            setValidConfirmPass(true);
            setFormData({
                ...formData,
                confirm_password_error_text: null,
                errorConfirmPass:false
            });
        }
    }
    const RedirectToMentee = () => {
        props.history.push('/mentee-register');
    }
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item container sm={6} spacing={2}>
                    <Grid item xs={12}>
                        <Typography color="primary" variant="h4">Sign up as a Mentor</Typography>
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
                                required
                                id="confirmPassword"
                                label="Confirm Password"
                                color="primary"
                                variant="filled"
                                helperText={formData.confirm_password_error_text}
                                error={formData.errorConfirmPass}
                                value={formData.confirmPassword}
                                onChange={handleTextChange}
                                onBlur={MatchPass}


                            />
                        </FormControl>
                    </Grid>
                    <Grid item container justify="center" sm={9} >
                        <Grid item   >
                            <Button variant="contained" color="primary" disabled={btnDisabled} onClick={RedirectToProfile}>Sign Up</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container sm={6} spacing={2} justify='center' alignContent="center" >

                    <Grid item xs={12} sm={6}>
                        <Typography color="primary" variant="h5">Are You a Mentee?</Typography>
                    </Grid>

                    <Grid item xs={12} sm={9}>
                        <img alt="complex" src={Mentor} style={{ maxWidth: "75%" }} />
                    </Grid>

                    <Grid item xs={12} sm={6} >
                        <Button variant="text" color="primary" onClick={RedirectToMentee}>Sign Up here</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Signup;