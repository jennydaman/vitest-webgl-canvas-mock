/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        include: ['__tests__/classes/*.js'],
        coverage: {
            includes: [
                'src/classes/**/*.js',
                'src/mock/**/*.js'
            ],
            reporter: 'text'
        },
        setupFiles: [
            './src/index.js'
        ],
        globals: true,
        environment: 'jsdom'
    }
})
