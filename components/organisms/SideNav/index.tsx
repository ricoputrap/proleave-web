import { Container, Logo } from "./index.styles";
import proLeaveLogo from "../../../assets/logo/logo.png"
import Image from "next/image";
import { COLORS } from "../../../styles/variables";

const SideNav: React.FC = () => {
  return (
    <Container bgColor={ COLORS.GRAY_700 }>
      <div>
        <Logo>
          <Image
            src={ proLeaveLogo }
            alt="ProLeave logo"
            width={40}
            height={40}
          />
          <h3>ProLeave</h3>
        </Logo>

        {/* menus */}
        <div>MENUS</div>
      </div>

      {/* logout */}
      <div>LOGOUT</div>
    </Container>
  )
}

export default SideNav;