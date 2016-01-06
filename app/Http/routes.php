<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});
//Route::group(['namespace' => 'Auth'], function()
//{
//	Route::group(['prefix'=> 'admin'], function(){
//	    Route::get('login', 	['as' 	=> 'admin.getLogin', 'uses' 	=> 'AuthController@getLogin']);
//	    Route::post('login', 	['as' 	=> 'admin.postLogin' , 'uses'	=> 'AuthController@postLogin']);
//
//	    Route::get('logout',  	['as' 	=>  'admin.logout',  'uses' 	=> 'AuthController@getLogout']);
//	});
//});

Route::group(['namespace' => 'Auth'], function(){
		Route::group(['prefix' => 'auth'], function () {
			Route::get('login', ['as' => 'login', 'uses' => 'AuthController@getLogin']);
			Route::post('login', 'AuthController@postLogin');
			Route::get('register', ['as' => 'register', 'uses' => 'AuthController@getRegister']);
			Route::post('register', 'AuthController@postRegister');
			Route::get('logout', ['as' => 'logout', 'uses' => 'AuthController@getLogout']);
		});
	Route::get('dashboard', ['middleware' => 'auth','uses'	=> 'AuthController@dashboard']);
});
<<<<<<< HEAD

Route::group(['prefix'=> 'admin'], function(){
    Route::get('login', ['as' => 'admin.getLogin', 'uses' => 'Auth\AuthController@getLogin']);
    Route::post('login', ['as' => 'admin.postLogin' , 'uses'=> 'Auth\AuthController@postLogin']);
    Route::get('dashboard', ['as'=> 'admin.dashboard', 'uses'=> 'Auth\AuthController@dashboard']);
});
=======
//Route::resource('user', 'UserController');
Route::group(['middleware' => 'admin'], function()
{
	Route::resource('user', 'UserController');
});
>>>>>>> refs/remotes/origin/quannh
