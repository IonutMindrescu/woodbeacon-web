<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Events\Alert;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/broadcast', 'HomeController@broadcast')->name('broadcast');


Route::get('/test', function () {
    event(new Alert('test'));
});


Route::match(['get', 'post'], '/verbs', function () {
    //
});

Route::name('admin.')->group(function () {
    Route::get('users', function () {
        // Route assigned name "admin.users"...
    })->name('users');
});



Auth::routes();

Route::get('/home', function() {
    return view('home');
})->name('home')->middleware('auth');
