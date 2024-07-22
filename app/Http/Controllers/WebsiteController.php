<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class WebsiteController extends Controller
{
    public function home(){
        return Inertia::render('Front/Home',);
    }
    public function about(){
        return Inertia::render('Front/About',);
    }
}
