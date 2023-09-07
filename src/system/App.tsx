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

        // Index shows up in exported modules so we filter it out
        // no pages will have a value length of 0 so this is safe
        if (obj.length == 0) {
          return;
        }


        // If somebody adds an object to ui-pages which is not a page this
        // protects against errors in the react code by checking for the static variable _isPageObject which everything
        // that extends page will have
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
