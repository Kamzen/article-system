<?php

namespace App\Http\Middleware;

use Closure;

class CheckAdminRole
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(\Illuminate\Http\Request $request, Closure $next)
    {
        if($request->user()->role !== 'admin'){

            return response()->json([
                'success' => false,
                'message' => 'You are not not authorized to access this route'
            ], 401);

        }

        return $next($request);
    }
}
