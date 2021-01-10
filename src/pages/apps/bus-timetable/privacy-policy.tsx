import * as React from 'react';
import { extractCoreData } from '../../../utils/gatsby';
import { PrivacyPolicy, IProps } from '../../../views/apps/bus-timetable/privacy-policy';

export default () => {

  const props: IProps = {
    ...extractCoreData()
  }

  return <PrivacyPolicy {...props} />
};