<?php

namespace App\Http\Controllers;

use App\User;
use Dotenv\Result\Success;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    //create a user
    public function registerUser(Request $request)
    {
        // validation
        $rules = [
            'firstname' => 'required:max:255',
            'lastname' => 'required|max:255',
            'email' => 'required|email|unique:users,email',
            'username' => 'required|max:255|unique:users,username',
            'password' => 'required'
        ];

        $validate = Validator::make($request->all(), $rules);

        // if validation fails
        if ($validate->fails()) {

            return response()->json([
                'success' => false,
                'errors' => $validate->errors(),
                'message' => 'Error registering a user'
            ], 422);

        }

        User::create($request->except('password') + ['password' => Hash::make($request->input('password'))]);

        return response()->json([
            'success' => true,
            'message' => 'User created successfully'
        ]);


    }

    public function loginUser(Request $request)
    {
        $userCredentials = $request->only('email', 'password');

        $rules = [
            'email' => ['required'],
            'password' => ['required']
        ];

        $validate = Validator::make($userCredentials, $rules);

        if($validate->fails()){

            return response()->json([
                'success' => false,
                'message' => 'User logged in failed',
                'errors' => $validate->errors(),

            ], 422);

        }

        if(!auth()->attempt($userCredentials)){
            return response()->json([
                'success' => false,
                'message' => 'Invalid credentials'
            ], 422);
        }

        $userToken = auth()->user()-createToken(env('ACCESS_COOKIE_TOKEN', ''))->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'User successfully logged in',
            'user' => \auth()->user(),
            'token' => $userToken
        ], 200);

    }

}
