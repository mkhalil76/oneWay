<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Country;
use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Location;

class CountryController extends Controller
{
    public function index()
    {
        $_all = Country::all();
        return response()->json($_all);
    }

    public function cities($country_id)
    {
        if ($country_id == "all") {
            $cities = City::all();
        } else {
            $cities = City::where('country_id', '=', $country_id)->get();
        }
        return response()->json($cities);
    }

    public function locations($city_id)
    {
        if ($city_id == "all") {
            $locations = Location::all();
        } else {
            $locations = Location::where('city_id', '=', $city_id)->get();
        }
        return response()->json($locations);
    }

}
