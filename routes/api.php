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

Route::group(['middleware' => ['json.response']], function () {

    Route::middleware('api')->get('/user', function (Request $request) {
        return $request->user();
    });

    // public routes
    Route::post('/login', 'Api\AuthController@login')->name('login.api');
    Route::post('/register', 'Api\AuthController@register')->name('register.api');

    // private routes
    Route::middleware('api')->group(function () {
        Route::get('/logout', 'Api\AuthController@logout')->name('logout');

        Route::apiResource('product', 'ProductController')->except(['index']);
        Route::get('/products/{user}', 'ProductController@index')->name('product.index');
        Route::resource('category', 'CategoryController')->only([
            'store', 'update', 'destroy'
        ]);
        Route::get('/category/{user}', 'CategoryController@index')->name('category.index');
        //Route::get('/category/{category}', 'CategoryController@secondaryIndex')->name('category.secondary.index');
    });


});
