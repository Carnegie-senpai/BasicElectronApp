import React from 'react';
import { getPages } from '../ui-pages/Page';
import { PageContext } from "./PageContext"
function App() {
  const pages = getPages()
  
  return (
    <React.Fragment>
      <PageContext.Provider value={{path: "/",props:{},setContext:()=>{}}}>
      </PageContext.Provider>
    </React.Fragment>
  );
}

export default App;
