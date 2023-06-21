export const ArticleStyles = {
  width: '100%',
  display: 'grid',
  justifyContent: 'center',
  '@xs': {
    justifyContent: 'unset',
  },
};

export const GreetingStyles = {
  width: 'fit-content',
  padding: '.25rem .5rem',
  borderRadius: '.5rem .5rem .5rem 0rem',
  background: 'pink',
  fontSize: '.8rem',
  '@md': {
    fontSize: '.95rem',
  },
  '@lg': {
    fontSize: '1.1rem',
  },
  '@xl': {
    fontSize: '1.3rem',
  },
};
export const HeadingStyles = {
  letterSpacing: '1px',
  fontWeight: 800,
  fontSize: '1.8rem',
  lineHeight: '2.5rem',

  '@sm': {
    fontSize: '2.2rem',
    lineHeight: '3rem',
  },
  '@md': {
    fontSize: '3rem',
    lineHeight: '3.75rem',
  },
  '@lg': {
    fontSize: '3.75rem',
    lineHeight: '4.5rem',
  },
};

export const TypeItStyles = {
  width: 'fit-content',
  letterSpacing: '1px',
  fontSize: '1.125rem',
  fontWeight: 600,
  color: 'grey',
  '@lg': {
    fontSize: '1.25rem',
  },
  '@xl': {
    fontSize: '1.5rem',
  },
};

export const HeroPicStyles = {
  width: '100%',
  height: 'auto',
};

export const ImageContainerStyles = {
  position: 'relative',
  width: '100%',
  '@xs': {
    maxWidth: '80%',
    justifySelf: 'end',
  },
};
