import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useRegisterSW } from "virtual:pwa-register/react";
import "./index.css";
import App from "./App.jsx";

function AppUpdater() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    type: "prompt",
    onRegisteredSW(swUrl, registration) {
      console.log("SW Registered:", swUrl);
    },
    onRegisterError(error) {
      console.error("SW registration error", error);
    },
  });
  if (!offlineReady && !needRefresh) return null;
  return(
  <div className="pwa-toast">
    {offlineReady && <span>App ready to work offline</span>}
    {needRefresh && (
      <>
        <span>New content available.</span>
        <button onClick={() => updateServiceWorker(true)}>Reload</button>
      </>
    )}
    <button
      onClick={() => {
        setOfflineReady(false);
        setNeedRefresh(false);
      }}
    >
      Close
    </button>
  </div>
)
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    < AppUpdater />
  </StrictMode>
);
