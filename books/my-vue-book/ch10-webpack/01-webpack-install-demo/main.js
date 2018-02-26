// 不能写成：import 'style.css';
// 重要提醒：即使将css打包到一个单独的文件中，这里的 import './style.css'; 也不能删除。
import './style.css';
document.getElementById('app').innerHTML = 'Hello webpack.';