import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import theme from "./theme (2).json";

import { WagmiProvider, createConfig, http } from "wagmi";
import { arbitrumSepolia, optimismSepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { l3s } from "./components/customChain";

function App() {
  const queryClient = new QueryClient();

  const config = createConfig(
    getDefaultConfig({
      // Your dApps chains
      chains: [arbitrumSepolia, optimismSepolia, l3s],
      transports: {
        // RPC URL for each chain
        [l3s.id]: http("http://rpc.l3stake.xyz/"),
        [arbitrumSepolia.id]: http("https://sepolia-rollup.arbitrum.io/rpc"),
      },

      // Required API Keys
      walletConnectProjectId: "3056645e739ff848b9c18c994f12cc43",

      // Required App Info
      appName: "Your App Name",

      // Optional App Info
      appDescription: "Your App Description",
      appUrl: "https://family.co", // your app's url
      appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    })
  );

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider theme="auto" customTheme={theme}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
