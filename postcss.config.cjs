module.exports = ({ env }) => ({
    map: true,
    plugins: {
        'postcss-normalize': {},
        'postcss-nested': {},
        'postcss-import': {},
        'autoprefixer': {}
    }
})
