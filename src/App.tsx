import { Home } from "./Home";
import GlobalStyle from "./globalstyle";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider:any) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}
function App() {
  return<>
      <Web3ReactProvider getLibrary={getLibrary}>
    <GlobalStyle/>
    <Home />
      </Web3ReactProvider>
  </>;
}

export default App;
