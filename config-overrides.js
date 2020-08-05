const {
    override,
    fixBabelImports,
    addLessLoader,
} = require('customize-cra')

module.exports = override(
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        //css样式，true表示使用less
        style:true
    }),
    addLessLoader({
        javascriptEnabled:true,
        modifyVars:{
            '@primary-color':'#d214a2'
        }
    })
)