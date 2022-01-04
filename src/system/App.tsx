import React, { useContext } from 'react';
import { getPages } from '../ui-pages/Page';
import { pageContext, PageContext } from "./PageContext"
import { usePageContext } from './PageContextUpdater';
function App() {
  const context = usePageContext()
  return (
    <React.Fragment>
      <pageContext.Provider value={context}>
        <PageWrapper/>
      </pageContext.Provider>
    </React.Fragment>
  );
}

function PageWrapper() {
  const pages = getPages()
  const {path, contextProps} = useContext(pageContext)
  return (
    <React.Fragment>
      {pages[path](contextProps)}
    </React.Fragment>
  )
}

export default App;
