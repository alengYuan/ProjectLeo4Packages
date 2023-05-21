import terser from '@rollup/plugin-terser'

export default {
    input: './src/ticker.js',
    output: {
        file: './dist/ticker.js',
        format: 'es',
        sourcemap: true,
    },
    plugins: [terser()],
}