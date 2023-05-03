import React, { useContext } from 'react';
import * as pages from '../ui-pages/index';
import { pageContext, PageContext } from "./PageContext";
import { usePageContext } from './PageContextUpdater';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
function App() {
  const context = usePageContext();
  return (
    <React.Fragment>
      <MemoryRouter>
        <PageCollector />
      </MemoryRouter>
    </React.Fragment>
  );
}

function PageCollector() {
  const pagesArray = Object.values(pages);
  return (
    <Routes>
      {pagesArray.map((value) => {
        return (
          <Route path={value.path} key={value.path} element={<value.component/>}>
          </Route>
        );
      })}
    </Routes>
  );
}

export default App;
