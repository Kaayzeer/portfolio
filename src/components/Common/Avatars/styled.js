import { Avatar, styled } from "@nextui-org/react";

export const StyledAvatar = styled(Avatar, {
  boxShadow: "$sm",
  variants: {
    cursor: {
      pointer: {
        cursor: "pointer",
      },
    },
    size: {
      mySize: {
        height: "$15",
        width: "$15",
        borderRadius: "$3xl",
      },
    },
    color: {
      myColor: {
        background: "$mySecondary",
        color: "$mySecondary",
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
