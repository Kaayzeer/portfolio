import { Avatar, styled } from "@nextui-org/react";

const StyledAvatar = styled(Avatar, {
  boxShadow: "$sm", // shadows.md
  variants: {
    size: {
      mysize: {
        height: "$15", // space[12]
        borderRadius: "$3xl", // radii.xs
      },
    },
    color: {
      mycolor: {
        background: "$myPrimary",
        color: "$myPrimary",
        border: "$space$2 solid transparent",
        "&:hover": {
          boxShadow: "$xl",
          background: "$red100",
          color: "$red800",
        },
        "&:active": {
          background: "$green200",
        },
        "&:focus": {
          borderColor: "$green400",
        },
      },
    },
  },
});

const Avatars = ({ children }) => {
  return <StyledAvatar rounded icon={children} color="mycolor" size="mysize" />;
};

export default Avatars;
