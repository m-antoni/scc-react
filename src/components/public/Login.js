import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInputChange, authLogin, clearAuthForm } from '../../redux/actions/auth.actions';
import { Spinner } from '../layouts/Spinner';
import { TextField, Grid, Button, Card, Typography, CardContent } from '@material-ui/core';

function Login({ auth: { email, password, loading, user_data: { isAuthenticated } }, handleInputChange, authLogin, clearAuthForm }) {

    useEffect(() => {
        clearAuthForm();
    },[]);

    if(isAuthenticated){
        return <Redirect to={'/home'}/>
    }

    return (
        <Grid container justify="center"  alignItems="center" spacing={3} direction="column" style={{ height: '900px'}}>
            {
                loading === 'auth' ? <div className="my-20"><Spinner/></div> : 
                <>
                    <Grid container direction="row" spacing={3} sm={8} xs={10}>
                        <Grid item xs={0} sm={4}/>
                        <Grid item xs={12} sm={4} >
                            <Card elevation={10}>
                                <CardContent>
                                    <form onSubmit={authLogin}>
                                        <Grid container direction="column" spacing={4}>
                                            <Grid item xs={12}>
                                                <Typography variant="h4">Sign In</Typography>
                                            </Grid>
                                            <Grid item>
                                                <TextField value={email} onChange={handleInputChange} name="email" label="Email" variant="outlined" size="medium" fullWidth/>
                                            </Grid>
                                            <Grid item>
                                                <TextField type="password" name="password" value={password} onChange={handleInputChange} label="Password" variant="outlined" size="medium" fullWidth/>
                                            </Grid>
                                            <Grid item>
                                                <Button type="submit" variant="contained" color="default" fullWidth size="large" p="4">Login</Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={0} sm={4}/>
                    </Grid>

                </>
            }
        </Grid>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { handleInputChange, authLogin, clearAuthForm })(Login);
