/**
 * Created by Administrator on 2017/5/27.
 */
import tpl from './layer.html';//首先是引入进来
import './layer.less';
function Layer(){
    return{
        name:"layer",
        tpl:tpl
    };
}
export default Layer;//然后在export出去