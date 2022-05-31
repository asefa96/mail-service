import Box from "@mui/material/Box";
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;
interface Props {
  window?: () => Window;
}

export default function Content(props: any) {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </>
  );
}
