<?php

namespace App\Http\Controllers;

use App\Models\App;
use App\Models\Bot;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    // 管理员登陆页面
    public function index(Request $request)
    {
        # code...
        // dd($request);
        return view("login");
    }

    // 管理员注销登陆页面
    public function logout(Request $request)
    {
        Auth::logout();
        return redirect()->route('login');
    }

}
