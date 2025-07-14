Here’s a streamlined guide to get your Vite + React PWA working with an install prompt and service worker:

---

### ✅ Step 1: Install Plugins

```bash
npm install vite-plugin-pwa @vite-pwa/assets-generator -D
```

- `vite-plugin-pwa` handles service worker, manifest, caching ([npm][1])
- `assets-generator` creates manifest icons ([Stack Overflow][2])

---

### 🧩 Step 2: Configure `vite.config.ts`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // auto-check for updates
      devOptions: { enabled: true, type: "module" }, // enable SW in dev :contentReference[oaicite:5]{index=5}
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "My React PWA",
        short_name: "ReactPWA",
        theme_color: "#ffffff",
        icons: [
          { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
```

---

### 🖼️ Step 3: Generate Icons

Add an SVG logo to `/public/logo.svg`, then in `package.json`:

```json
"scripts": {
  "generate-pwa-assets": "pwa-assets-generator --preset minimal public/logo.png"
}
```

Run:

```bash
npm run generate-pwa-assets
```

This creates icon files in `/public` ([saurabhmisra.dev][3]).

---

### 🧠 Step 4: Inject Assets into `index.html`

```html
<link rel="icon" href="/favicon.ico" />
<link
  rel="apple-touch-icon"
  href="/apple-touch-icon-180x180.png"
  sizes="180x180"
/>
<link rel="mask-icon" href="/mask-icon.svg" color="#FFFFFF" />
<meta name="theme-color" content="#ffffff" />
```

This ensures manifest icons and theme color are used ([saurabhmisra.dev][3]).

---

### ⚙️ Step 5: Register Service Worker in Code

In your React entry point (e.g. `main.jsx`)

```js
import { useRegisterSW } from "virtual:pwa-register/react";

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

  // This component only renders UI when relevant
  if (!offlineReady && !needRefresh) return null;

  // UI: show install/update button when needRefresh is true
}
return (
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
);
```

This enables install/update UI ([anilsonix.com][4]).

---

### 🚧 Step 6: Build and Preview

```bash
npm run build
npm run preview
```

Only works in production mode — dev mode doesn’t show install button reliably ([DEV Community][5]).

---

### 🕵️ Troubleshooting Tips

- **Install button not showing?**

  - Must use `npm run preview` (production build).
  - Ensure HTTPS (required for SW).
  - Verify `<link rel="manifest" href="/manifest.webmanifest">` is auto-injected by plugin ([Stack Overflow][2], [Stack Overflow][6], [saurabhmisra.dev][3]).

- **SW not registering locally?**
  If using Vite dev server, add:

  ```ts
  devOptions: { enabled: true, type: 'module' }
  ```

  And import:

  ```ts
  /// <reference types="vite-plugin-pwa/client" />
  ```

  in `global.d.ts` ([Stack Overflow][7], [DEV Community][8]).

- **Install/update UI not appearing?**
  Use `registerType: 'prompt'` + `useRegisterSW` hook to show your own install prompt ([anilsonix.com][4]).

---

### 🧷 Full Example Summary

1. Add dependencies.
2. Configure `vite.config.ts` with PWA plugin.
3. Generate icons with assets-generator.
4. Inject meta & icon tags in `index.html`.
5. Register SW with auto/before prompting.
6. Build & preview in production.
7. Implement UI for prompts (install/update buttons).

---

Let me know if you want example components or deeper handling (custom update prompts, SW events, caching specific assets)! Happy to help.

[1]: https://www.npmjs.com/package/vite-plugin-pwa?utm_source=chatgpt.com "vite-plugin-pwa - npm"
[2]: https://stackoverflow.com/questions/77647625/how-to-setup-a-vite-based-react-app-to-be-a-progressive-web-app?utm_source=chatgpt.com "How to setup a Vite based React app to be a progressive web app?"
[3]: https://www.saurabhmisra.dev/setup-react-pwa-using-vite/?utm_source=chatgpt.com "How to setup a React PWA project using Vite | Saurabh Misra"
[4]: https://anilsonix.com/posts/adding-pwa-update-prompt-in-vite-react/?utm_source=chatgpt.com "Adding PWA update prompt in vite react - anilsonix.com"
[5]: https://dev.to/yukaty/pwa-quick-guide-make-your-react-app-installable-2kai?utm_source=chatgpt.com "PWA Quick Guide: Make Your React App Installable"
[6]: https://stackoverflow.com/questions/77686342/react-vite-vitepwa-plugin-workbox-configurations?utm_source=chatgpt.com "React + Vite + VitePWA plugin workbox configurations"
[7]: https://stackoverflow.com/questions/75294174/vite-pwa-plugin-not-working-in-development-environment-for-react-apps?utm_source=chatgpt.com "Vite pwa plugin not working in development environment for react apps"
[8]: https://dev.to/_ibrahimturan/adding-pwa-to-vite-applications-1bce?utm_source=chatgpt.com "Adding PWA to Vite Applications - DEV Community"
