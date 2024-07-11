import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import LinearProgress from '@mui/material/LinearProgress';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import 'react-app-polyfill/ie11';

import { Routes, Theme } from './constants';
import { PublicRoute } from './components/generic';

const Form = lazy(() => import('./pages/public/Form'));
const Confirmation = lazy(() => import('./pages/public/Confirmation'));

const App = () => (
  <ThemeProvider theme={Theme}>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <CssBaseline />
      <BrowserRouter>
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            {/* Public routes */}
            <PublicRoute exact path={Routes.Form} component={Form} />
            <PublicRoute exact path={Routes.Confirmation} component={Confirmation} />

            {/* Invalid route - default to form */}
            <Route component={Form} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </LocalizationProvider>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
