import { Box } from "@mui/material";
import React from "react";
import AppBar from "../../organisms/AppBar";
import SideNav from "../../organisms/SideNav";

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{
      display: "flex",
      height: "100vh"
    }}>
      <SideNav />
      <Box sx={{
        display: "flex",
        flexDirection: "column"
      }}>
        <AppBar />
        { children }
      </Box>
    </Box>
  )
}

export default Layout;