// config - 中文含义为配置
// - 我们可以将项目中使用的接口地址统一保存在这个文件中

var baseUrl = 'http://localhost:8000';

var USER_LOGIN = baseUrl + '/admin/login'; //用户登录
var USER_LOGOUT = baseUrl + '/admin/logout'; //退出登录
var USER_INFO = baseUrl + '/admin/getuser'; //获取用户信息
var USER_INFO_GET = baseUrl + '/admin/userinfo_get'; // 用户详细信息获取接口
var USER_INFO_EDIT = baseUrl + '/admin/userinfo_edit'; // 用户信息编辑接口

var ARTICLE_GET = baseUrl + '/admin/category_search'; //文章类别搜索
var ARTICLE_ADD = baseUrl + '/admin/category_add'; //新增文章类别
var ARTICLE_EDIT = baseUrl + '/admin/category_edit'; //编辑文章类别
var ARTICLE_DEL = baseUrl + '/admin/category_delete'; //删除文章类别