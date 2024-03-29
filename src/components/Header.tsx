import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
import MenuIcon from "@material-ui/icons/Menu";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
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
  const router = useRouter();

  const menuItems = [
    { text: "INDEX", href: "/" },
    { text: "PROJECT", href: "/project" },
    { text: "CONTACT", href: "/contact" },
  ];

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
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
          <Typography
            variant="subtitle1"
            className={classes.title}
            onClick={() => router.push("/")}
          >
            CREATION.BIRD89
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </ThemeProvider>
  );
};

export default Header;
