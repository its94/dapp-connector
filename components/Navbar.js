import styles from "../styles/Home.module.css";
import Logo from "../public/logo.png";
import Image from "next/image";
import * as React from "react";
import { styled, useTheme, withTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";

const drawerWidth = 340;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const Navbar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div className={styles.navbarAll}>
      <div className={styles.navbar}>
        <Image src={Logo} height={30} width={30} />
        <Link href='/'>
        <div className={styles.navbar_text}>
        Dapp-connector</div></Link>
        <div>
          <button className={styles.navbarBut}
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
           <MenuIcon/>
          </button>
        </div>

      
      </div>
      <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
              },
            }}
            variant="persistent"
            anchor="right"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
          <div className={styles.linkBody}>
            <Link href='/document'>
              <div className={styles.link}>Documentation</div>
            </Link>
            <Link href='/pricing'>
              <div className={styles.link}>Pricing</div>
            </Link>
            <Link href='/document'>
              <div className={styles.link}>Contact Us</div>
            </Link>
          </div>
          </Drawer>
        </Box>
        </div>
    </>
  );
};

export default Navbar;
