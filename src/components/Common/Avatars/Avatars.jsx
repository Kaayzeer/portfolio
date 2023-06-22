import { StyledAvatar } from "./styled";

const Avatars = ({ children, cursor }) => {
  return (
    <StyledAvatar
      rounded
      icon={children}
      color="myColor"
      size="mySize"
      cursor={cursor}
      background="background"
    />
  );
};

export default Avatars;
