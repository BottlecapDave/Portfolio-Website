import * as React from 'react';
import { extractCoreData } from '../utils/gatsby';
import { Home, IHomeProps, UnderConstruction } from '../views/index';

export default () => {

  const props: IHomeProps = {
    ...extractCoreData()
  }

  return <UnderConstruction {...props} />
};