import { Avatar, Box } from "@mui/material";
import Image from "next/image";
import { COLORS } from "../../../styles/variables";
import profilePic from "../../../assets/images/profilepic.png";

const AppBar: React.FC = () => {
  return (
    <Box sx={{
      background: COLORS.WHITE,
      padding: "16px",
      display: "flex",
      justifyContent: "end"
    }}>
      <Avatar alt="Profile Pic">
        <Image src={profilePic} alt="Profile Pic" />
      </Avatar>
    </Box>
  )
}

export default AppBar;