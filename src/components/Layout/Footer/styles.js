export const Ul = {
  display: "flex",
  gap: "2rem",
  height: "2.5rem",
  margin: 0,
};

export const Li = {
  display: "flex",
  gap: "2rem",
};

export const A = {
  color: "$white",
  letterSpacing: "1px",
  fontWeight: 600,
  transition: "borderBottom .4s ease-in-out",
  "@sm": {
    "&:hover": {
      boxShadow: "$md",
      borderBottom: "1px solid $mySecondary",
    },
  },
};

export const Footer = {
  height: "100%",
  display: "grid",
  placeItems: "center",
  gap: "1rem",
  "@sm": {
    gap: "2rem",
  },
};

export const Body = {
  color: "$mySecondary",
  fontWeight: 500,
  fontSize: "$4",
  letterSpacing: "2px",
};
