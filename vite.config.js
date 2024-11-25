import { defineConfig } from 'vite';

export default defineConfig({
    base: '/', // Ajuste les chemins pour le dossier dist
    build: {
        // Définit le dossier de sortie
        outDir: 'dist',
        // Vide le dossier de sortie avant chaque build
        emptyOutDir: true,
        // Génère des noms de fichiers avec un hash pour le cache
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name].[hash].js',
                chunkFileNames: 'assets/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash].[ext]'
            }
        }
    }
});
