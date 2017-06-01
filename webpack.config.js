/**
 * Created by Administrator on 2017/5/26.
 */
var htmlWebpackPlugin=require('html-webpack-plugin');//引入html插件
var path=require('path');//这个方法是node原生的,所以不需要去定义

module.exports={
    //context:,
    entry:{
        //main: './src/scripts/main.js',
        //a: './src/scripts/a.js',
        //b: './src/scripts/b.js',
        //c: './src/scripts/c.js',
        app:'./src/app.js'
    },//打包文件的入口从那个开始
    output:{//指明打包之后的文件
        //path:'./dist',//由于最新版本问题path可能不适应
        //filename:'./dist/js/[name]-[chunkhash].js',
        filename:'./dist/js/[name].bundle.js'
        //publicPath:'http://cdn.com/'
    },
    module:{
      rules:[//新版本采用rules
          {
              test:/\.js$/,
              loader:'babel-loader',
              //exclude:__dirname +'./node_modules/',//已经打包过后的文件不希望再次打包，同时相反的include就是指定希望打包的文件
              //include:__dirname +'./src/',//由于新版本的问题，要添加__dirname，表示当前的环境
              exclude:path.resolve(__dirname,'node_modules'),//通过path这个方法解析成一个绝对路径
              include:path.resolve(__dirname,'src'),
              query:{//配置loader的参数，告诉babel-loader怎么处理js
                  presets:['latest']
              }
          },
          {
              test:/\.css$/,
              //loader:'style-loader!css-loader!postcss-loader',
              use:[//新版本采用的方式
                  {loader:'style-loader'},
                  {
                      loader: 'css-loader',
                      options: {
                          importLoaders: 1//指定几个数量的loader来处理import进来的资源......未解决
                      }
                  },
                  {
                      loader:'postcss-loader',
                      options: {
                          plugins: function() {
                              return [
                                  require('autoprefixer')
                              ];
                          }
                      }
                  }
              ]
          },
          {
              test:/\.less$/,
              use:[
                  'style-loader',
                  'css-loader',
                  {
                      loader:'postcss-loader',
                      options: {
                          plugins: function() {
                              return [
                                  require('autoprefixer')
                              ];
                          }
                      }
                  },
                  'less-loader'
              ]
              //loader:'style-loader!css-loader!less-loader'//这是1.x版本
          },
          {
              test:/\.html$/,
              loader:'html-loader'
          },
          {
              test:/\.(png|jpg|svg|gif)$/i,
              loader:'file-loader',
              query:{
                  name:'../../img/[name]-[hash:5].[ext]'
              }
              //options: {
              //    name: '/[name].min.[ext]',
              //    outputPath: '../../img'
              //    //publicPath: ''
              //}
          }
      ]
    },
    plugins:[
        //new htmlWebpackPlugin({
        //    template:'index.html',
        //    filename:'./dist/index.html',
        //    inject: false,//或者用false
        //    title:'webpack is good',
        //    date:new Date(),
        //    minify:{//对文件进行压缩
        //        removeComments:true,
        //        collapseWhiteSpace:true
        //    }
        //}),
        //new htmlWebpackPlugin({
        //    template:'index.html',
        //    filename:'./dist/a.html',
        //    inject: 'body',//或者用false
        //    title:'this is a',
        //    //chunks:['main','a']
        //    excludeChunks:['b','c']
        //}),
        //new htmlWebpackPlugin({
        //    template:'index.html',
        //    filename:'./dist/b.html',
        //    inject: 'body',//或者用false
        //    title:'this is b',
        //    //chunks:['main','b']
        //    excludeChunks:['a','c']
        //}),
        //new htmlWebpackPlugin({
        //    template:'index.html',
        //    filename:'./dist/c.html',
        //    inject: 'body',//或者用false
        //    title:'this is c',
        //    //chunks:['main','c']
        //    excludeChunks:['a','b']
        //})

        new htmlWebpackPlugin({
            filename:'./dist/index.html',
            template:'index.html',
            inject:'body'
        })
    ]
}