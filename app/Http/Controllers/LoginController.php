<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function store(Request $request){
        $validatedData = $request->validate([
            'first_name' => ['required', 'min:2', 'max:15'],
            'last_name' => ['required', 'min:2', 'max:15'],
            'email' => 'required|email:rfc,dns'
        ]);
        //var_dump($validatedData);
        return view('welcome')->with('successMessage', 'You can play now!');
    }
}
