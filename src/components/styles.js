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
  padding: "3rem 1.5rem",
  "@md": {
    gap: "2rem",
    flexDirection: "row",
    justifyContent: "center",
    bg: "purple",
    bg: "red",
    padding: "5rem 2.5rem",
  },
  "@lg": {
    bg: "red",
    padding: "5rem 7rem",
  },
  "@xl": {
    bg: "red",
    padding: "6rem 7rem",
  },
};

/*   sm: '6rem 2.5rem',
      md: '4rem 7rem',
      lg: '5rem 7rem',
      xl: '6rem 7rem',
      '2xl': '8rem 7rem', */
