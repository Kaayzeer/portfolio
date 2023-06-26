export const ContainerFullWidth = {
  minWidth: "100%",
};
export const FooterFullWidth = (bgColor) => {
  return {
    minWidth: "100%",
    background: bgColor,
    borderTopRightRadius: "5rem",
    borderTopLeftRadius: "5rem",
    boxShadow: "0px -1px 30px -9px rgba(0,0,0,0.75)",
    "@xs": {
      borderTopRightRadius: "10rem",
      borderTopLeftRadius: "10rem",
    },
    "@md": {
      borderTopRightRadius: "20rem",
      borderTopLeftRadius: "20rem",
    },
  };
};

export const ContainerMaxWidth = (cols = 2) => {
  return {
    display: "grid",
    placeItems: "center",
    gap: "1rem",
    height: "100%",
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

export const ContainerNoPaddingMaxWidth = (cols = 2) => {
  return {
    display: "grid",
    placeItems: "center",
    gap: "1rem",
    height: "100%",
    "@xs": {
      gridTemplateColumns: `repeat(${cols},1fr)`,
      gap: "2rem",
    },
  };
};

export const ExperienceContainerMaxWidth = {
  display: "grid",
  placeItems: "center",
  gap: "1rem",
  height: "100%",
  padding: "3rem 0rem",
  "@xs": {
    padding: "5rem 7rem",
  },
  "@sm": {
    gridTemplateColumns: `repeat(2,1fr)`,
  },
  "@lg": {
    padding: "6rem 7rem",
  },
};

export const Main = { background: "$myPrimary" };
