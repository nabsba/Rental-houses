import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Navigation from '../Navigation';
import { navigation } from '../../../../../service';
import renderWithRouter from '../../../../../service/jest/config/test-utils';

test('Navigation.tsx', async () => {
  const homeData: any = { navigation };
  const props: any = { homeData };
  renderWithRouter(<Navigation data={props.homeData.navigation} />);
  const navigations = screen.queryByText('brand');
  expect(navigations).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('burger-test-id'));
  const home = await screen.findByText('home');
  expect(home).toBeInTheDocument();
});
