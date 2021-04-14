import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useWindowWidth } from "./helpers/getWindowWidth";
import Router from "./routes/appRoutes";

import "./App.css";

export const WidthContext = React.createContext(null);

export const client = new ApolloClient({
  uri: "https://example-vmall-front.yereone.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    "account-id": "6027acbe5fc2b4627256d612",
    locale: "en_US",
  },
});

function App() {
  const { width } = useWindowWidth();
  return (
    <div className="App">
      <WidthContext.Provider value={width}>
        <ApolloProvider client={client}>
          <Router />
        </ApolloProvider>
      </WidthContext.Provider>
    </div>
  );
}

export default App;
