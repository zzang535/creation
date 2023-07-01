import React from 'react';
import { Container, Paper, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  },
  paper: {
    padding: theme.spacing(4),
    maxWidth: 400,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  return (
    <>
        <Header />
        <div className={classes.root}>
            <Container>
                <Paper elevation={3} className={classes.paper}>
                <Typography variant="h5" component="h1" align="center">
                    로그인
                </Typography>
                <form className={classes.form}>
                    <TextField label="이메일" type="email" />
                    <TextField label="비밀번호" type="password" />
                    <Button variant="contained" color="primary" fullWidth>
                    로그인
                    </Button>
                </form>
                </Paper>
            </Container>
        </div>
    </>
    
  );
};

export default LoginPage;