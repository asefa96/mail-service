import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./sidebar";
import Header from "./header";
import Content from "./content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../../features/form/components";
import HomePage from "../../pages/Home";

export default function Layout() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Header />
      <Content>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/Form"} element={<Form />} />
        </Routes>
      </Content>
    </Box>
  );
}
