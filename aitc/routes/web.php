<?php
use App\Http\Controllers\RawonController;
use App\Http\Controllers\SotoController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [SotoController::class, 'viewSoto']);
Route::get('/rawon', [RawonController::class, 'viewRawon']);