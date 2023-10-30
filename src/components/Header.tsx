import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // useRouter 훅 임포트
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
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"; // 메뉴 아이콘

const theme = createTheme({
  palette: {
    primary: {
      main: "#32a89d",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 8px",
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    color: "white",
  },
  button: {
    marginLeft: theme.spacing(2),
    color: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter(); // useRouter 훅 사용

  const menuItems = [
    { text: "HOME", href: "/" },
    { text: "PROJECT", href: "/project" },
    { text: "CONTACT", href: "/contact" },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => router.push(item.href)}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <Typography variant="subtitle1" className={classes.title}>
              CREATION.BIRD89
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </ThemeProvider>
  );
};

export default Header;
