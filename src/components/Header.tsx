import React from 'react';
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, createTheme, ThemeProvider } from '@material-ui/core'; // 스타일 
import { makeStyles } from '@material-ui/core/styles'; // 스타일 객체


const theme = createTheme({
  palette: {
    primary: {
      main: '#32a89d', // Replace with your desired color
    },
  },
});


const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 8px',
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    color: 'white',
  },
  button: {
    marginLeft: theme.spacing(2),
    color: 'white',
  },
}));


const Header = () => {

  const classes = useStyles(); // 스타일 객체 생성

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link href="/">
            <Typography variant="h6" className={classes.title}>
              ALBUM.BIRD89
            </Typography>
          </Link>
          <div>
            <Link href="/signup">
              <Button className={classes.button} color="inherit">
                회원가입
              </Button>
            </Link>
            <Link href="/login">
              <Button className={classes.button} color="inherit">
                로그인
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;