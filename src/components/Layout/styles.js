export const ContainerFullWidthStyles = {
  minWidth: "100%",
  bg: "blue",
  "@lg": {
    bg: "red",
  },
};

export const ContainerMaxWidthStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
  bg: "green",

  "@lg": {
    gap: "2rem",
    flexDirection: "row",
    bg: "yellow",
  },
};
