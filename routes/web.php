<?php

use App\Http\Controllers\PublicController;
use Illuminate\Support\Facades\Route;

// rotta pagina home 
Route::get('/', [PublicController::class, 'home'])->name('home');

// home alternativa 
Route::get('/home2', [PublicController::class, 'home2'])->name('home2');
