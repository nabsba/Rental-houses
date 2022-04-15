import { useTheme } from '@mui/styles';
import React from 'react';
import { ADMINISTRATION, ROUTES } from '../../../service/Common/constant';
import { H3, Paragraph, Span } from '../../tree/atom';
import NavigationAsComponent from '../../tree/atom/navigation/NavigationAsComponent';
import styles from './style.module.css';
import TErrorBoundaryFallBack from './type';

const ErrorBoundaryFallback: React.FC<TErrorBoundaryFallBack> = ({ code }) => {
  const theme: any = useTheme();
  return (
    <div
      className={styles.error_boundary}
      style={{ marginTop: theme.spacing(12) }}
    >
      <div style={{ marginBottom: theme.spacing(2) }}>
        <H3 title={`We’re sorry, something has gone wrong with this page.`} />
      </div>

      <div style={{ marginBottom: theme.spacing(2) }}>
        <Paragraph data={'Please try one of the following options'} />
        <ul>
          <li>
            <Span data={'Visit '} />
            <NavigationAsComponent
              data={{
                text: 'houseRental homepage',
                href: `${ROUTES.HOME}`
              }}
            />
            <Span data={'and look for relevant links'} />
          </li>
          <li>
            <Span
              data={
                'Alternatively, you can go back to the previous page by using the back button'
              }
            />
          </li>
          <li>
            <Span
              data={`If you would like to inform us about the issue, please send us an email at ${ADMINISTRATION.EMAIL} including the code: "${code}" as reference.`}
            />
          </li>
        </ul>
      </div>
      <div style={{ marginBottom: theme.spacing(2) }}>
        <H3 title={'Thank you'} />
      </div>
    </div>
  );
};

export default ErrorBoundaryFallback;
//				including the code &apos;{type}&apos; as reference.
