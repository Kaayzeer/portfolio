export const TextWrapper = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '.5rem 2rem',
  '@sm': {
    padding: '.5rem',
  },
};

export const Heading = {
  letterSpacing: '1px',
  fontWeight: 800,
  fontSize: '1.8rem',
  '@sm': {
    fontSize: '2.2em',
    lineHeight: '2.5rem',
  },
  '@md': {
    fontSize: '2.5rem',
    lineHeight: '3rem',
  },
  '@lg': {
    lineHeight: '3.5rem',
  },
};

export const CardHeading = {
  textAlign: 'center',
  letterSpacing: '1px',
  fontWeight: 500,
  fontSize: '1.125rem',
  '@sm': {
    lineHeight: '2rem',
  },
  '@md': {
    fontSize: '1.25rem',
  },
  '@lg': {
    lineHeight: '3rem',
  },
};

export const CardBody = {
  textAlign: 'center',
  letterSpacing: '1px',
  fontWeight: 300,
  fontSize: '1rem',
  '@sm': {
    lineHeight: '2rem',
  },
  '@md': {
    fontSize: '1.125rem',
  },
  '@lg': {
    lineHeight: '3rem',
  },
};
