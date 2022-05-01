import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  CssBaseline,
  Box,
  Toolbar,
  List,
  Typography,
  Divider,
  Badge,
  Container,
  Link,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  LinearProgress,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { MainListItems, SecondaryListItems } from "../slideBar/SlideBar";
import SimpleDialogDemo from "./tools/SettingList";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, getMyRequest, getProduct } from "../../redux/actions";
import Orders from "./tools/componentSwitch/Orders";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import Profile from "../settings/profile/Profile";
import Wallet from "../settings/wallet/Checkout";
import Password from "../settings/password/Password";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import AdminAuth from "../navigate/AdminAuth";
import AdminSetting from "../admin/AdminSetting";
import Request from "../request/Request";
import Products from "../product/Products";

export default function Dashboard() {
 

  return (
    <div>
      
        <DashboardContent
        />
      
    </div>
  );
}

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://raedrdhaounia.netify.app/">
        raedrdhaounia.netify.app
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");
    React.useEffect(() => {
      dispatch(getCurrentUser());
      dispatch(getProduct());
       dispatch(getMyRequest(id))
    }, []);
    
    
    const user = useSelector((state) => state.user.currentUser);
    const loadUsers = useSelector((state) => state.user.loading);
    const prodList = useSelector((state) => state.product.products.Allproducts);
    const requestList = useSelector((state) => state.request);
    const userReducer = useSelector((state) => state.user);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const settings = [
    { name: "profile", icon: ManageAccountsIcon },
    { name: "password", icon: VpnKeyIcon },
    { name: "wallet", icon: AddShoppingCartIcon },
  ];

  const handleClick = (value) => {
    switch (value) {
      case "profile":
        {
          navigate("/profile");
        }
        break;
      case "password":
        {
          navigate("/password");
        }
        break;
      case "wallet":
        {
          navigate("/orders");
        }
        break;
      default:
        break;
    }
  };
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const loading = useSelector((state) => state.user.loading);
  let params = useParams();
  // get value of URL
  const val = Object.values(params)[0];
  // Sub title
  const flt = () => {
    let title = "";
    for (let index = 0; index < val.length; index++) {
      title = title + val[index];
      if (val[index] === "/") {
        title = "";
      }
    }
    return title;
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}  >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {flt()}
            </Typography>
            {settings.map((setting) => (
              <IconButton
                color="inherit"
                key={setting.name}
                onClick={() => handleClick(setting.name)}
              >
                <Badge color="secondary">
                  <setting.icon />
                </Badge>
              </IconButton>
            ))}

            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <SimpleDialogDemo user={user} />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            onClick={toggleDrawer}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: [1],
            }}
          >
            <IconButton>eCommerce</IconButton>
          </Toolbar>
          <Divider />
          {loading ? (
            <LinearProgress color="inherit" />
          ) : (
            <List component="nav">
              <MainListItems />
              <Divider sx={{ my: 1 }} />
              {user.role === "admin" ? <SecondaryListItems /> : null}
              <ListItemButton
                value="orders"
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              >
                <ListItemIcon>
                  <MeetingRoomIcon color="inherit" />
                </ListItemIcon>
                <ListItemText primary="log out" />
              </ListItemButton>
            </List>
          )}
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
             
              <Routes>
                <Route path="/home" element={<Orders prodList={prodList} />} />
                <Route
                  path="/orders"
                  element={<Wallet userReducer={userReducer} />}
                />
                <Route
                  path="/profile"
                  element={<Profile user={user} userReducer={userReducer} />}
                />
                <Route
                  path="/products"
                  element={<Products user={user} userReducer={userReducer} />}
                />
                <Route
                  path="/password"
                  element={<Password user={user} userReducer={userReducer} />}
                />
                <Route
                  path="/admin/*"
                  element={
                    <AdminAuth>
                      <AdminSetting user={user}/>
                    </AdminAuth>
                  }
                ></Route>
                <Route
                  path="request"
                  element={<Request
                  user={user}
                  prodList={prodList}
                  userReducer={userReducer}
                  requestList={requestList} />}
                ></Route>
                <Route path="*" element={<Navigate to={"home"} />} />
              </Routes>
            
          </Container>
          <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
