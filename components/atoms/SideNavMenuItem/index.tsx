import { Wrapper } from "./index.styles"
import { BiBuilding } from "react-icons/bi";

interface Props {
  label: string;
}

const SideNavMenuItem: React.FC<Props> = ({ label }) => {
  return (
    <Wrapper>
      <BiBuilding size="24px"/>
      { label }
    </Wrapper>
  )
}

export default SideNavMenuItem