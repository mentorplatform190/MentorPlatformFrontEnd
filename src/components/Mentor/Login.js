import React, { useState, useEffect } from 'react';
import validator from 'validator';
import { FormControl, TextField, Button, Typography, Grid, Container } from '@material-ui/core';
import Students from '../../assets/images/students.png'
const Login = (props) => {
    const menteeData = {
        email: '',
        password: '',
        errorEmail: false,
        errorPass: false,
        email_error_text: null,
        password_error_text: null,

    };
    const [formData, setFormData] = useState(menteeData);
    const [validEmail, setValidEmail] = useState(false);
    const [validPass, setValidPass] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);
    useEffect(() => {
        HandleButton();
    }, [validEmail, validPass]);

    const HandleButton = () => {
        if (validEmail && validPass)
            setBtnDisabled(false);
    }
    const Login = () => {
        props.history.push('/auth/mentor-dashboard');

    }

    const RedirectToMentor = () => {
        props.history.push('/mentee-login');
    }


    const handleTextChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        });
    };
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

        <Container>
            <Grid container spacing={4}>
                <Grid item container sm={6} spacing={4} alignItems="center" style={{ alignContent: "center" }}>
                    <Grid item xs={12}>
                        <Typography color="primary" variant="h4">Login as a Mentor</Typography>
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

                    <Grid item container justify="center" sm={9} >
                        <Grid item   >
                            <Button variant="contained" color="primary" disabled={btnDisabled} onClick={Login}>Login</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container sm={6} spacing={2} justify='center' alignContent="center" >

                    <Grid item xs={12} sm={6}>
                        <Typography color="primary" variant="h5">Are You a Mentee?</Typography>
                    </Grid>

                    <Grid item xs={12} sm={9}>
                        <img alt="complex" src={Students} style={{ maxWidth: "75%" }} />
                    </Grid>

                    <Grid item xs={12} sm={6} >
                        <Button variant="text" color="primary" onClick={RedirectToMentor}>Login here</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Login;