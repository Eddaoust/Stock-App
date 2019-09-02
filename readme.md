# Stock App

**This is a simple stock management app build with Laravel as REST API & React with Redux & Material-UI**

## Requirements

* Laravel 5.8
* PHP 7.1 Or higher
* MySQL 5.7
* NodeJS 6.4 Or higher
* NPM 1.15 Or higher
* React 16.9

## Installation

* Create a local directory
```
$ mkdir stock-app
```
* Clone the github repository
```
$ git clone https://github.com/Eddaoust/Stock-App
```
* Go to the local directory
```
$ cd stock-app
```
* Install project dependancies
```
$ composer install
```
* Create a .env file & add your Database configuration

* Create the database
```
$ php artisan migrate
```
* Load fixtures
```
$ php artisan db:seed
```
* Install Laravel Passport
```
$ php artisan passport:install
```
* Install Laravel encryption key
```
$ php artisan key:generate
```
* Install node modules
```
$ npm install
```
* Compil the JS & CSS files
```
$ npm run dev
```
* Go to localhost & create a profil

## Notes

* if you re-seed the database, you need to regenerate the passport key: 
```
$ php artisan passport:client --personal
```

