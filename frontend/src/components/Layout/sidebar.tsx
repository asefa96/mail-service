import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Toolbar from "@mui/material/Toolbar";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function Sidebar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  // const sidebarNavLinks = ["Mails", "Send Mail", "SMTP Configs", "Mail Configuration"];
  const sidebarNavLinks = [
    {
      name: "Mails",
      link: "/",
      icon: <MailIcon />,
    },
    {
      name: "Send Mail",
      link: "/",
      icon: <MarkEmailReadIcon />,
    },

    {
      name: "SMTP Configs",
      link: "/",
      icon: <ManageAccountsIcon />,
    },

    {
      name: "Mail Configuration",
      link: "/",
      icon: <SettingsApplicationsIcon />,
    },
    {
      name: "Send Form",
      link: "/Form",
      icon: <DocumentScannerIcon />,
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toRoute = (page: string) => {
    navigate(page, { replace: true });
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {sidebarNavLinks.map((navLink, index) => (
          <ListItem key={navLink.name} disablePadding>
            <ListItemButton
              onClick={() => {
                toRoute(navLink.link);
              }}
            >
              <ListItemIcon>{navLink.icon}</ListItemIcon>
              <ListItemText primary={navLink.name}> </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
