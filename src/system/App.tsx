import React from 'react';
import './App.css';
import { Button } from "@mui/material"
import { StartPage } from '../ui-pages';
import { getPages } from '../ui-pages/Page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const pages = getPages()
  return (
    <BrowserRouter>
      <Routes>
        {
          Object.keys(pages).map((key) => {
            return (
              <React.Fragment>
                <Route path={key} element={pages[key]()}></Route>
              </React.Fragment>
            )
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
