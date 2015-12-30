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

Route::group(['prefix'=> 'admin'], function(){
    Route::get('login', ['as' => 'admin.getLogin', 'uses' => 'Auth\AuthController@getLogin']);
    Route::post('login', ['as' => 'admin.postLogin' , 'uses'=> 'Auth\AuthController@postLogin']);
    Route::get('dashboard', ['as'=> 'admin.dashboard', 'uses'=> 'Auth\AuthController@dashboard']);
    Route::get('logout',  ['as' =>  'admin.logout',  'uses' => 'Auth\AuthController@getLogout']);
});
