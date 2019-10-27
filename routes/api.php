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

Route::prefix('constants')->group(function () {
    Route::get('categories', 'CategoryController@index');
    Route::get('countries', 'CountryController@index');
    Route::get('menu-categories', 'CategoryController@getMenuCategories');
    Route::get('cities/{country_id}', 'CountryController@cities');
    Route::get('locations/{city_id}', 'CountryController@locations');
    Route::get('kitchens', 'CategoryController@kitchens');
});

Route::prefix('auth')->group(function () {
    Route::post('register', 'UserController@register');
    Route::post('login', 'UserController@login');
    Route::group(['middleware' => 'auth:api'],function () {
        Route::post('set-user-country', 'UserController@setUserCountry');
        Route::post('set-user-location', 'UserController@setUserLocation');
        Route::get('user', 'UserController@getUserInfo');
        //Route::get('get-user-info', 'UserController@getUserInfo');
        Route::put('update-info', 'UserController@updateInfo');
        Route::delete('delete-user', 'UserController@deleteUser');
        Route::post('logout', 'UserController@logout');
        Route::put('set-device-token', 'UserController@setDeviceToken');
    });
});

Route::prefix('resturants')->group(function () {
    Route::get('/list/all', 'RestaurantController@all');
    Route::get('/menu-items/{resturant_id}', 'MenuController@menuItems');
    Route::get('/menu-by-category/{category_id}', 'MenuController@menuByCategory');
    Route::get('/', 'RestaurantController@getForProvider');
    Route::get('get-info/{id}', 'RestaurantController@show');
    Route::post('/post', 'RestaurantController@store');
    Route::post('/update', 'RestaurantController@update');
    Route::get('/menu/{id}', 'RestaurantController@getResturantMenu');
    Route::post('/new-menu-item', 'MenuController@store');
    Route::get('/get-menu-info/{id}', 'MenuController@getMenuInfo');
    Route::post('/edit-menu-item', 'MenuController@updateMenu');
    Route::get('/delete-menu-item/{id}', 'MenuController@deleteMenuItem');
    Route::get('/delete/{id}', 'RestaurantController@delete');
});
