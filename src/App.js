import React, { useState, useEffect, Suspense } from "react";
import { CardanoContext } from "./context/CardanoContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// @import layout
const AppLayout = React.lazy(() => import("./layout/AppLayout"));
// @import pages
const MintPage = React.lazy(() => import("./pages/Mint"));

function App() {
  const [provider, setProvider] = useState(null);
  // const [isWaletConnected, setWalletConnectStatus] = useState(false);
  // const [networkId, setNetworkId] = useState("");
  const [currentAcc, setWalletAddress] = useState("");
  // const [walletUnUsedAddress, setWalletUnUsedAddress] = useState("");
  // const [walletBalance, setWalletBalance] = useState(0);
  useEffect(() => {
    if (window.cardano) {
      handleCardano();
    }
  }, []);
  const handleCardano = async () => {
    const { cardano } = window;

    if (cardano) {
      if (await cardano.isEnabled()) {
        setProvider(cardano);
        // setWalletConnectStatus(true);
        // setNetworkId(await cardano.getNetworkId());

        setWalletAddress(await cardano.getUsedAddresses());

        // setWalletUnUsedAddress(await cardano.getUnusedAddresses());
      }
    }
  };
  return (
    <CardanoContext.Provider
      value={{
        provider,
        currentAcc,
      }}
    >
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
    </CardanoContext.Provider>
  );
}

export default App;
