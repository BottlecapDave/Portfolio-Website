import * as React from 'react';
import { extractCoreData } from '../../../utils/gatsby';
import { IProps, TermsOfService } from '../../../views/apps/bus-timetable/terms-of-service';

export default () => {
  const props: IProps = {
    ...extractCoreData()
  }

  return <TermsOfService {...props} />
};