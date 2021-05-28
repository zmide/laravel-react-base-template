/*
 * @Author: Bin
 * @Date: 2021-05-06
 * @FilePath: /LaravelReactBaseTemplateWeChat/resources/js/pages/admin/screens/index.jsx
 */

import Home from "./home";
import Users from "./users";
import Default from "./default";

// 系统状态
const HomeScreen = <Home />;

// 用户管理
const UsersScreen = <Users />;
// 404 页面
const DefaultScreen = <Default />;

export { HomeScreen, DefaultScreen, UsersScreen };
