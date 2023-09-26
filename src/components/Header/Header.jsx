import {
  AppBar,
  Box,
  IconButton,
  InputAdornment,
  MenuItem,
  Menu,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  Badge,
  Typography,
  Divider,
} from "@mui/material";
import { MenuButton, MyHeader, NavLink, NavMenu, SearchBar } from "./styles";
import { Logotext } from "../Texts/styles";
import { DeleteForever, Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// import LogoImg from "../../assets/images/hug the tiger.png";

const Header = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  // const [totalQuantity, setTotalQuantity] = useState(totalQuantityInLS);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setOpenMenu((open) => !open);
  };

  const toggleCart = () => {
    setOpenCart((open) => !open);
  };

  const handleLangClose = () => {
    setAnchorEl(null);
  };

  const handleLangChange = (language) => {
    setSelectedLang(language);
    i18n.changeLanguage(language);
    handleLangClose();
  };

  // useEffect(() => {
  //   window.addEventListener("storage", () => {
  //     const totalQuantityInLS =
  //       JSON.parse(localStorage.getItem("__ada-shop:cart"))?.totalQuantity || 0;
  //     setTotalQuantity(totalQuantityInLS);
  //   });
  // }, []);

  return (
    <AppBar
      // position="sticky"
      sx={{
        width: "100%",
        background: "#FF7F50",
        boxShadow: 0,
        padding: "0 100px",
      }}
    >
      <MyHeader>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MenuButton onClick={toggleMenu}>
            <Menu />
          </MenuButton>
          <Logotext variant="h1" sx={{ marginRight: "30px" }}>
            {t("HugTheTiger ")}
          </Logotext>
          <NavMenu>
            <NavLink>{t("baby")}</NavLink>
            <NavLink>{t("kids")}</NavLink>
            <NavLink>{t("sale")}</NavLink>
          </NavMenu>
        </Box>

        <Box sx={{ width: "600px" }}>
          <SearchBar
            variant="standart"
            disableUnderline={true}
            startAdornment={
              <InputAdornment position="start" sx={{ margin: "4px" }}>
                <Search />
              </InputAdornment>
            }
            placeholder={t("search")}
          />

          <IconButton
            onClick={toggleCart}
            sx={{
              width: "24px",
              height: "24px",
              color: "white",
              marginRight: 1,
            }}
          >
            <Badge>
              <ShoppingCartOutlinedIcon sx={{ marginLeft: 30 }} />
            </Badge>
          </IconButton>
          <IconButton
            sx={{
              width: "24px",
              height: "24px",
              color: "white",
            }}
          >
            <AccountCircleOutlinedIcon sx={{ marginLeft: 30 }} />
          </IconButton>
        </Box>

        <Box>
          <Menu
            anchorEl={anchorEl}
            id="basic-menu"
            open={Boolean(anchorEl)}
            onClose={handleLangClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleLangChange("ru")}>RU</MenuItem>
            <MenuItem onClick={() => handleLangChange("en")}>EN</MenuItem>
          </Menu>
          <IconButton
            sx={{ color: "white", marginLeft: 10 }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            {selectedLang}
            <LanguageIcon />
          </IconButton>
        </Box>
      </MyHeader>

      <Drawer anchor="left" open={openMenu} onClose={toggleMenu}>
        <List>
          <ListItem>
            <ListItemText primary="1" />
            <ListItemText primary="1" />
            <ListItemText primary="1" />
            <ListItemText primary="1" />
          </ListItem>
        </List>
      </Drawer>

      <Dialog open={openCart} onClose={toggleCart}>
        <DialogTitle>Basket</DialogTitle>
        <DialogContent>
          <Divider></Divider>
          <Box>{/* <img /> */}</Box>
          <Box>
            <Typography>Title: </Typography>
            <Typography>Color: </Typography>
            <Typography>Size: </Typography>
            <Typography>Price: </Typography>
            <Typography>Total Price: </Typography>
            <Divider></Divider>
          </Box>
          <Box>
            <IconButton>
              <DeleteForever sx={{ color: "red" }} />
            </IconButton>
          </Box>
        </DialogContent>
      </Dialog>
    </AppBar>
  );
};

export default Header;
