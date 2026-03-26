<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::apiResource('products',ProductController::class);
Route::apiResource('tasks',TaskController::class);