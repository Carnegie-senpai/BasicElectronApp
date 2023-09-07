import React from 'react';
let pages = require ('../ui-pages/index');
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Page } from '../ui-components/Page';

function App() {
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
      {pagesArray.map((value: any) => {
        let obj = Object.values(value);
        if (obj.length == 0) {
          return;
        }

        if (!(obj[0] as any)._isPageObject) {
          console.warn(`Non page object in ui-pages folder: `, value)
          return;
        }

        let page = new (obj[0] as any)() as Page;
        return (
          <Route path={page.path} key={page.path} element={<page.component />} />
        );
      })}
    </Routes>
  );
}

export default App;
