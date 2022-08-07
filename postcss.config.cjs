module.exports = ({ env }) => ({
    map: true,
    plugins: {
        'postcss-normalize': {},
        'postcss-nested': {},
        'autoprefixer': {}
    }
})
