export const ContainerFullWidthStyles = {
  minWidth: "100%",
  /*   bg: 'blue', */
};

export const ContainerMaxWidthStyles = (cols = 2) => {
  return {
    display: "grid",
    placeItems: "center",
    gap: "rem",
    /*     bg: 'green', */
    padding: "3rem 1.5rem",
    "@xs": {
      gridTemplateColumns: `repeat(${cols},1fr)`,
      gap: "2rem",
      /* 
      bg: 'purple',
      bg: 'red', */
      padding: "5rem 7rem",
    },
    "@lg": {
      padding: "6rem 7rem",
    },
  };
};

export const ContainerNoPaddingMaxWidthStyles = (cols = 2) => {
  return {
    display: "grid",
    placeItems: "center",
    gap: "rem",
    /*     bg: 'green', */

    "@xs": {
      gridTemplateColumns: `repeat(${cols},1fr)`,
      gap: "2rem",

      /*     bg: 'purple',
      bg: 'red', */
    },
    "@lg": {
      /*    bg: 'red', */
    },
    "@xl": {},
  };
};
