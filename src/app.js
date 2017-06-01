/**
 * Created by Jack on 2017/5/27.
 */
import './css/common.css';
import Layer from './components/layer/layer.js';//把layer这个组件引入进来
const App=function(){
 //const NUM=1;
 //alert(NUM);
 //console.log(layer)


 var dom=document.getElementById("app");
 var layer=new Layer();
 dom.innerHTML=layer.tpl;
};
new App();