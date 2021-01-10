import * as React from 'react';
import { extractCoreData } from '../../../utils/gatsby';
import { IProps, TermsOfService } from '../../../views/apps/south-gloucestershire-bin-day/terms-of-service';

export default () => {

  const props: IProps = {
    ...extractCoreData()
  }

  return <TermsOfService {...props} />
};