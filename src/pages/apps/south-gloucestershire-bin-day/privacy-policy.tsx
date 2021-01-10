import * as React from 'react';
import { extractCoreData } from '../../../utils/gatsby';
import { IProps, PrivacyPolicy } from '../../../views/apps/south-gloucestershire-bin-day/privacy-policy';

export default () => {

  const props: IProps = {
    ...extractCoreData()
  }

  return <PrivacyPolicy {...props} />
};