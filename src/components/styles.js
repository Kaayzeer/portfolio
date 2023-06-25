export const ContainerFullWidthStyles = {
  minWidth: "100%",
};

export const ContainerMaxWidthStyles = (cols = 2) => {
  return {
    display: "grid",
    placeItems: "center",
    gap: "rem",
    padding: "3rem 0rem",
    "@xs": {
      gridTemplateColumns: `repeat(${cols},1fr)`,
      gap: "2rem",
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

    "@xs": {
      gridTemplateColumns: `repeat(${cols},1fr)`,
      gap: "2rem",
    },
  };
};

export const ExperienceContainerMaxWidthStyles = {
  display: "grid",
  placeItems: "center",
  gap: "rem",
  padding: "3rem 0rem",
  "@xs": {
    gap: "2rem",
    padding: "5rem 7rem",
  },
  "@sm": {
    gridTemplateColumns: `repeat(2,1fr)`,
  },
  "@lg": {
    padding: "6rem 7rem",
  },
};
