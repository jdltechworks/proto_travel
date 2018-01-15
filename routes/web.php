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

// Authentication Routes...
$this->get('accounts/login', 'Auth\LoginController@showLoginForm')->name('login');
$this->post('accounts/login', 'Auth\LoginController@login');
$this->post('accounts/logout', 'Auth\LoginController@logout')->name('logout');

// Registration Routes...
$this->get(
  'accounts/register',
  'Auth\RegisterController@showRegistrationForm'
)->name('register');
$this->post('accounts/register', 'Auth\RegisterController@register');

Route::get('/{path?}', 'HomeController@index');
