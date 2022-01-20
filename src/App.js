import React, { Suspense } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// @import layout
const AppLayout = React.lazy(() => import("./layout/AppLayout"));
// @import pages
const MintPage = React.lazy(() => import("./pages/Mint"));

function App() {
  return (
    <Suspense fallback={<div />}>
      <Router>
        <Switch>
          <Route exact path="/">
            <AppLayout>
              <MintPage />
            </AppLayout>
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
