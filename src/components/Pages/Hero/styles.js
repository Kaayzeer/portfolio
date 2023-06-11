export const ColStyles = {
  width: "50%",
  height: "50%",
  display: "grid",
  placeItems: "center",
  "@sm": {
    placeItems: "end",
  },

  margin: "auto",
};

export const WrapperStyles = {
  width: "100%",
  gap: "1rem",
  flexDirection: "column",
  "@sm": {
    flexDirection: "row",
    gap: "2rem",
  },
};

export const GreetingStyles = {
  width: "fit-content",
  padding: ".25rem .5rem",
  borderRadius: ".5rem .5rem .5rem 0rem",
  background: "pink",
  fontSize: "1rem",
  "@md": {
    fontSize: "1rem",
  },
  "@lg": {
    fontSize: "1.5rem",
  },
  "@xl": {
    fontSize: "2rem",
  },
};
export const HeadingStyles = {
  letterSpacing: "1px",
  fontWeight: 700,
  fontSize: "2.2rem",
  "@sm": {
    fontSize: "3.5rem",
  },
  "@lg": {
    fontSize: "3rem",
    lineHeight: "3.75rem",
    fontWeight: 800,
  },
  "@xl": {
    fontSize: "3.75rem",
    lineHeight: "4.5rem",
    fontWeight: 800,
  },
};

export const HeroPicStyles = {
  width: "100%",
  height: "auto",
};
