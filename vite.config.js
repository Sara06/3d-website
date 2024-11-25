// vite.config.js
export default {
  root: './', // The root directory of the project
  build: {
    outDir: 'dist', // The output directory for the build
    chunkSizeWarningLimit: 2000, // Set the warning limit to 2MB
    minify: 'esbuild', // Minification options
    sourcemap: true // Enable sourcemaps in production
  },
  server: {
    open: true, // Automatically open the browser
    port: 3000 // Set the server port
  }
};
