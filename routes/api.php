<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// < api routes for the wood-beacon devices >
Route::prefix('device')->name('device.')->group(function () {
    Route::post('alert', 'DeviceController@alert')->name('alert');
    Route::post('status', 'DeviceController@status')->name('status');
});
