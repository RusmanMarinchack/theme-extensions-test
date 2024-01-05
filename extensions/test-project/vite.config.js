import {defineConfig} from 'vite'
import {resolve} from "path";
import {glob} from 'glob';

const scripts = glob.sync('./src/scripts/*.js');
const styles = glob.sync('./src/styles/*.scss');
// const svgs = glob.sync('./src/*.svg');

export default defineConfig({
    root: 'src',
    build: {
        outDir: resolve(__dirname, '../theme-extension/assets'),
        emptyOutDir: true,
        assetsDir: './',
        rollupOptions: {
            input: [...scripts, ...styles],
            output: {
                entryFileNames: '[name].js',
                assetFileNames: '[name].[ext]'
            }
        }
    }
})