<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Validator;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * function to make request validation
     *
     * @param Request $request , array $rules
     *
     * @return boolean
     */
    protected function makeValidation($request, $rules)
    {
        return Validator::make($request->all(),$rules);
    }

    /**
     * function to return error response
     *
     * @array
     *
     * @return response
     */
    public function response($status, $items, $msg)
    {
        if ($status) {
            return response()->json([
                'status' => true,
                'items' => $items,
                'message' => $msg
            ]);
        } else {
            return response($items);
        }
    }
}
