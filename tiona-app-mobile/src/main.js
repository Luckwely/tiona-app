// src/main.js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { router } from './routes/router';
import { initializeDatabase, setupDatabase } from './services/dbService';

async function startApp() {
  const app = createApp(App);
  app.use(router);
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        cssLayer: {
          name: 'primevue',
          order: 'tailwind-base, primevue, tailwind-utilities'
        }
      }
    }
  });

  // ✅ Mount FIRST — always, no matter what
  app.mount('#app');

  // ✅ DB init AFTER mount, in its own isolated try/catch
  try {
    await initializeDatabase();
    await setupDatabase();
    console.log('✅ DB ready');
  } catch (error) {
    console.warn('⚠️ DB failed, running on legacy data:', error);
    // App still works with legacy fallback data
  }

  // ✅ Seed separately — if this fails, app still runs
  try {
    const { seedIfEmpty } = await import('./services/seedDatabase.js');
    await seedIfEmpty();
  } catch (error) {
    console.warn('⚠️ Seeding skipped:', error);
  }
}

startApp();