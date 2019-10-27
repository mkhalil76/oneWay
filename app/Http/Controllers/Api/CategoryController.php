<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Http\Controllers\Controller;
use App\Models\MenuCategories;
use App\Models\Kitchen;

class CategoryController extends Controller
{
    public function index ()
    {
        $_all = Category::all();
        return response()->json($_all);
    }

    /**
     * function to get list of menu item categories
     *
     *  return json
     */
    public function getMenuCategories()
    {
        $_all = MenuCategories::all();
        return response()->json($_all);
    }

    /**
     * function to git list of kitchens
     *
     * @return response
     */
    public function kitchens()
    {
        $kitchens = Kitchen::all();
        return response($kitchens);
    }
}
