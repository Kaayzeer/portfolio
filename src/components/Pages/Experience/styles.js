export const HeadingStyles = {
  letterSpacing: '1px',
  fontWeight: 800,
  fontSize: '1.8rem',
  textAlign: 'center',
  margin: 0,
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

export const CardTitleStyles = {
  letterSpacing: '1px',
  fontWeight: 600,
  fontSize: '1.5rem',

  '@sm': {
    fontSize: '1.75rem',
    lineHeight: '2.5rem',
    '&:nth-child(odd)': {
      justifySelf: 'flex-start',
    },
  },
  '@md': {
    fontSize: '1.8rem',
    lineHeight: '3rem',
  },
  '@lg': {
    lineHeight: '3.5rem',
  },
};

export const ImageContainerStyles = {
  position: 'relative',
  width: '100%',
  transition: 'transform 0.4s ease-in-out',
  '&:hover': { transform: 'scale3d(1.05, 1.05, 1)' },
};

export const ImageStyles = {
  width: '100%',
  height: 'auto',
  borderRadius: '.875rem',
};

export const ArticleStylesEven = {
  display: 'grid',
  gap: '.5rem',
  width: '100%',
  padding: '0rem 0rem 2rem .2rem',

  '@sm': {
    padding: '0rem 0rem 0rem 2rem',
  },

  '@lg': {
    padding: '0rem 0rem 0rem 4rem',
  },
};

export const ArticleStylesOdd = {
  display: 'grid',
  gap: '.5rem',
  width: '100%',

  '@sm': {
    padding: '0rem 2rem 0rem 0rem',
  },

  '@lg': {
    padding: '0rem 4rem 0rem 0rem',
  },
};

export const HeadingWrapperStyles = {
  display: 'grid',
  placeItems: 'center',
  maxWidth: '40rem',
  margin: '0 auto',
  width: '100%',
};

export const ButtonStyles = {
  width: '5rem',
};
