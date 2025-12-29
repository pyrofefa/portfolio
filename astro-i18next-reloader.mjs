// astro-i18next-reloader.mjs
import path from "node:path";

export default function astroI18nextReloader() {
  return {
    name: "astro-i18next-reloader",
    hooks: {
      "astro:server:setup": ({ server }) => {
        // Watch translation files in src/locales
        const srcDir = path.join(process.cwd(), "src/locales");

        server.watcher.add(`${srcDir}/**/*.json`);

        server.watcher.on('change', (changedPath) => {
          if (changedPath.includes('src\\locales') || changedPath.includes('src/locales')) {
            console.log(`[i18next-reloader] Translation file changed, reloading...`);
            server.ws.send({
              type: 'full-reload',
              path: '*'
            });
          }
        });

        console.log('[i18next-reloader] Watching translation files in src/locales/');
      }
    },
  };
}
