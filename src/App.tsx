import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Switch} from 'react-router';
import styled from 'styled-components';
import GlobalMenu from './components/GlobalMenu/GlobalMenu';
import PreviewPage from './views/PreviewPage';
import StartPage from './views/StartPage';

const PageWrapper = styled.div`
  padding: 40px;
`;

const queryCache = new QueryCache();

export default function App() {
  return (
    <Router >
      <ReactQueryCacheProvider queryCache={queryCache}>
        <GlobalMenu/>
        <PageWrapper data-testid="wrapper">
          <Switch>
            <Route exact path="/" component={StartPage} />
            <Route path="/:id" component={PreviewPage} />
          </Switch>
        </PageWrapper>
      </ReactQueryCacheProvider>
    </Router>
  );
}
