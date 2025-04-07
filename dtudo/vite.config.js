import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Define a raiz do projeto como o ponto de entrada
  publicDir: 'public', // Define a pasta public para arquivos estáticos
  build: {
    outDir: 'dist', // Define onde os arquivos de build serão gerados
    rollupOptions: {
      input: {
        main: './index.html', // Página principal
        markdown: './exibir-markdown.html', // Página adicional
      },
    },
  },
  server: {
    open: true, // Abre o navegador automaticamente
  },
});
