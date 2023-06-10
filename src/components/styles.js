export const ContainerFullWidthStyles = {
  minWidth: "100%",
  bg: "blue",
};

export const ContainerMaxWidthStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
  bg: "green",
  padding: "1rem 0rem",
  "@md": {
    gap: "2rem",
    flexDirection: "row",
    bg: "purple",
    bg: "red",
    padding: "1.25rem 0rem",
  },
  "@lg": {
    bg: "red",
    padding: "1.5rem 0rem",
  },
  "@xl": {
    bg: "red",
    padding: "2rem 0rem",
  },
};
