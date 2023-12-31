const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    laptopXL: '1920px',
    desktop: '2560px'
  };
  
  export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    laptopXL: `(max-width: ${size.laptopXL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
  };
  
  export const minDevice = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    laptopXL: `(min-width: ${size.laptopXL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };
  
  // sizes with 1px lesser
  const boundarySize = {
    mobileS: '319px',
    mobileM: '374px',
    mobileL: '424px',
    tablet: '767px',
    laptop: '1023px',
    laptopL: '1439px',
    laptopXL: '1919px',
    desktop: '2559px'
  };
  
  export const maxSizeDevice = {
    mobileS: `(max-width: ${boundarySize.mobileS})`,
    mobileM: `(max-width: ${boundarySize.mobileM})`,
    mobileL: `(max-width: ${boundarySize.mobileL})`,
    tablet: `(max-width: ${boundarySize.tablet})`,
    laptop: `(max-width: ${boundarySize.laptop})`,
    laptopL: `(max-width: ${boundarySize.laptopL})`,
    laptopXL: `(max-width: ${boundarySize.laptopXL})`,
    desktop: `(max-width: ${boundarySize.desktop})`,
    desktopL: `(max-width: ${boundarySize.desktop})`
  };
  