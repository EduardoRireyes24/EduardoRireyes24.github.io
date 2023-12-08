import React from 'react';
import github from '/icons/github.svg';
import X from '/icons/X.svg';
import instagram from '/icons/instagram.svg';
import linkedin from '/icons/linkedin.svg';
import { ItemsContainer } from './ItemsContainer';

const Networks = () => {

  const links = [
    { name: 'github',     url: 'https://github.com/rireyes24', pathImage: github },
    { name: 'X',          url: 'https://twitter.com/rireyes24', pathImage: X },
    { name: 'instagram',  url: 'https://www.instagram.com/rireyes24', pathImage: instagram },    
    { name: 'linkedin',   url: 'https://www.linkedin.com/rireyes24', pathImage: linkedin },    
  ];

  return (
    <ItemsContainer 
      arrayItems={links}
      columns={[2, 3]}
      rows={[1, 2]}
      justifySelf={'right'}
      alignSelf={'start'}
    />
  );
};

export {Networks};