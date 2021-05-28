/*
 * @Author: Bin
 * @Date: 2021-05-06
 * @FilePath: /LaravelReactBaseTemplateWeChat/resources/js/pages/admin/router/routes.js
 */
import {
    HomeScreen,
    UsersScreen,
    DefaultScreen,
} from "../screens";

const routes = [
    {
        path: "/home",
        exact: true,
        component: HomeScreen,
    },
    {
        path: "/users",
        exact: true,
        component: UsersScreen,
    },
    {
        path: "*",
        component: DefaultScreen,
    },
];

export default routes;
