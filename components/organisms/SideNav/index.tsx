import { BtnLogout, Container, Logo, Menus } from "./index.styles";
import proLeaveLogo from "../../../assets/logo/logo.png"
import Image from "next/image";
import { COLORS } from "../../../styles/variables";
import SideNavMenuItem from "../../atoms/SideNavMenuItem";
import { BiLogOut } from "react-icons/bi"

const SideNav: React.FC = () => {
  return (
    <Container>
      <div>
        <Logo>
          <Image
            src={ proLeaveLogo }
            alt="ProLeave logo"
            width={40}
            height={40}
          />
          <h2>ProLeave</h2>
        </Logo>

        {/* menus */}
        <Menus>
          <SideNavMenuItem label="Departments" />
          <SideNavMenuItem label="Menu 2" />
          <SideNavMenuItem label="Menu 3" />
          <SideNavMenuItem label="Menu 4" />
        </Menus>
      </div>

      {/* logout */}
      <BtnLogout 
        variant="contained" 
        size="large"
        startIcon={ <BiLogOut /> }
      >
        Log Out
      </BtnLogout>
    </Container>
  )
}

export default SideNav;