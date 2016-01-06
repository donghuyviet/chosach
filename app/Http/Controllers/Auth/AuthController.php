<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Illuminate\Auth\Events\Login;
use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use App\Http\Requests\LoginRequest;
use Auth;
class AuthController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Registration & Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users, as well as the
    | authentication of existing users. By default, this controller uses
    | a simple trait to add these behaviors. Why don't you explore it?
    |
    */

    use AuthenticatesAndRegistersUsers;

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'getLogout']);
    }


//    public function getLogin(){
//        return view('admin.login');
//    }
//
//    public function postLogin(LoginRequest $request){
//        $auth = array('email' => $request->email,
//                'password' => $request->password
//            );
//        if(Auth::attempt($auth)){
//            return redirect()->route('admin.dashboard');
//        } else {
//            return redirect()->back()->with(['flash_level'=> 'danger', 'flash_message' => 'Email hoặc password chưa đúng, vui lòng nhập lại!']);;
//        }
//    }

    public function dashboard(){
        return view('admin.master');
    }

<<<<<<< HEAD
    public function getLogin(){
        return view('admin.login');
    }

    public function postLogin(LoginRequest $request){
        $auth = array('email' => $request->email,
                'password' => $request->password
            );
        if(Auth::attempt($auth)){
            return redirect('admin/dashboard');
        } else {
            return redirect('admin/login');
        }
    }
    public function dashboard(){
        return view('admin.master');
    }

=======
//    public function getLogout(){
//        if(Auth::check()){
//            Auth::logout();
//            return redirect()->route('admin.getLogin');
//        }
//    }
>>>>>>> refs/remotes/origin/quannh
    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {return Validator::make($data, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|confirmed|min:6',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }
}
