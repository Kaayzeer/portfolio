export const Article = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: ".25rem",
  alignItems: "center",
  justifyContent: "center",
  padding: "5rem 0rem",
  "@xs": {
    alignItems: "unset",
    padding: 0,
    gap: ".5rem",
    justifyContent: "unset",
  },
};

export const Greeting = {
  width: "fit-content",
  padding: ".25rem .5rem",
  borderRadius: ".5rem .5rem .5rem 0rem",
  background: "$mySecondary",
  color: "$myTertiary",
  fontSize: ".8rem",
  letterSpacing: "1px",
  "@md": {
    fontSize: ".95rem",
  },
  "@lg": {
    fontSize: "1.1rem",
  },
  "@xl": {
    fontSize: "1.3rem",
  },
};
export const Heading = {
  letterSpacing: "1px",
  fontWeight: 800,
  fontSize: "2.5rem",
  lineHeight: "2.5rem",
  textAlign: "center",
  "@xs": {
    textAlign: "left",
    fontSize: "1.5rem",
    lineHeight: "3rem",
  },
  "@sm": {
    fontSize: "2.7rem",
    lineHeight: "3rem",
  },
  "@md": {
    fontSize: "3.75rem",
    lineHeight: "3.75rem",
  },
  "@lg": {
    fontSize: "4rem",
    lineHeight: "4.5rem",
  },
};

export const TypeIt = {
  width: "fit-content",
  letterSpacing: "1px",
  fontSize: "1.125rem",
  fontWeight: 600,
  color: "grey",
  "@lg": {
    fontSize: "1.25rem",
  },
  "@xl": {
    fontSize: "1.5rem",
  },
};

export const HeroPic = {
  width: "100%",
  height: "auto",
};

export const ImageContainer = {
  position: "relative",
  width: "100%",
  "@xs": {
    maxWidth: "80%",
    justifySelf: "end",
  },
};
