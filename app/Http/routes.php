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
Route::group(['namespace' => 'Auth'], function()
{
	Route::group(['prefix'=> 'admin'], function(){
	    Route::get('login', 	['as' 	=> 'admin.getLogin', 'uses' 	=> 'AuthController@getLogin']);
	    Route::post('login', 	['as' 	=> 'admin.postLogin' , 'uses'	=> 'AuthController@postLogin']);
	    Route::get('dashboard', ['as'	=> 'admin.dashboard', 'uses'	=> 'AuthController@dashboard']);
	    Route::get('logout',  	['as' 	=>  'admin.logout',  'uses' 	=> 'AuthController@getLogout']);
	});
});

Route::resource('user', 'UserController');