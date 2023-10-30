import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
  makeStyles,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { Stack } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    margin: theme.spacing(2, 0),
    fontSize: "1.25rem", // 예시로 크기를 설정해봤습니다. 필요에 따라 조절하세요.
  },
  button: {
    margin: theme.spacing(1),
  },
  container: {
    padding: theme.spacing(3), // 전체적인 padding을 조절합니다.
  },
}));

const Home: NextPage = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container className={classes.container}>
        <Typography variant="h6" className={classes.subtitle}>
          CONTACT
        </Typography>
      </Container>
    </>
  );
};

export default Home;
