export const ContainerFullWidthStyles = {
  minWidth: "100%",
  bg: "blue",
};

export const ContainerMaxWidthStyles = (cols = 2) => {
  return {
    display: "grid",
    placeItems: "center",
    gap: "1rem",
    bg: "green",
    padding: "3rem 1.5rem",
    "@xs": {
      gridTemplateColumns: `repeat(${cols},1fr)`,
      gap: "2rem",
      justifyContent: "space-between",
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
};
