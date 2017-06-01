/**
 * Created by Administrator on 2017/5/26.
 */
var htmlWebpackPlugin=require('html-webpack-plugin');//����html���
var path=require('path');//���������nodeԭ����,���Բ���Ҫȥ����

module.exports={
    //context:,
    entry:{
        //main: './src/scripts/main.js',
        //a: './src/scripts/a.js',
        //b: './src/scripts/b.js',
        //c: './src/scripts/c.js',
        app:'./src/app.js'
    },//����ļ�����ڴ��Ǹ���ʼ
    output:{//ָ�����֮����ļ�
        //path:'./dist',//�������°汾����path���ܲ���Ӧ
        //filename:'./dist/js/[name]-[chunkhash].js',
        filename:'./dist/js/[name].bundle.js'
        //publicPath:'http://cdn.com/'
    },
    module:{
      rules:[//�°汾����rules
          {
              test:/\.js$/,
              loader:'babel-loader',
              //exclude:__dirname +'./node_modules/',//�Ѿ����������ļ���ϣ���ٴδ����ͬʱ�෴��include����ָ��ϣ��������ļ�
              //include:__dirname +'./src/',//�����°汾�����⣬Ҫ���__dirname����ʾ��ǰ�Ļ���
              exclude:path.resolve(__dirname,'node_modules'),//ͨ��path�������������һ������·��
              include:path.resolve(__dirname,'src'),
              query:{//����loader�Ĳ���������babel-loader��ô����js
                  presets:['latest']
              }
          },
          {
              test:/\.css$/,
              //loader:'style-loader!css-loader!postcss-loader',
              use:[//�°汾���õķ�ʽ
                  {loader:'style-loader'},
                  {
                      loader: 'css-loader',
                      options: {
                          importLoaders: 1//ָ������������loader������import��������Դ......δ���
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
              //loader:'style-loader!css-loader!less-loader'//����1.x�汾
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
        //    inject: false,//������false
        //    title:'webpack is good',
        //    date:new Date(),
        //    minify:{//���ļ�����ѹ��
        //        removeComments:true,
        //        collapseWhiteSpace:true
        //    }
        //}),
        //new htmlWebpackPlugin({
        //    template:'index.html',
        //    filename:'./dist/a.html',
        //    inject: 'body',//������false
        //    title:'this is a',
        //    //chunks:['main','a']
        //    excludeChunks:['b','c']
        //}),
        //new htmlWebpackPlugin({
        //    template:'index.html',
        //    filename:'./dist/b.html',
        //    inject: 'body',//������false
        //    title:'this is b',
        //    //chunks:['main','b']
        //    excludeChunks:['a','c']
        //}),
        //new htmlWebpackPlugin({
        //    template:'index.html',
        //    filename:'./dist/c.html',
        //    inject: 'body',//������false
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