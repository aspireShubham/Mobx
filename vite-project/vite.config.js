import { defineConfig,loadEnv } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [reactRefresh()],
  define : {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    process: {},
  },
});


// https://vitejs.dev/config/


// export default defineConfig(({mode}) => {
//   const env = loadEnv(mode, process.cwd());

//   return {
//     plugins: [react()],
//     build: {
//       outDir: "./wwwroot/app/",
//       sourcemap: true,
//     },
//     server: {
//       port: env.VITE_PORT,
//     },
//   };
// });