<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ResturantLocation extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'location_id', 'city_id', 'country_id'
    ];

    public $_new_location_rules = [
        'location_id' => 'required|exists:locations,id',
        'city_id' => 'required|exists:cities,id',
        'country_id' => 'required|integer|exists:countries,id',
        //'restaurant_id' => 'required|integer|exists:restaurants,id',
    ];

    /**
     * function to get resturant belongs to the location
     *
     */
    public function resturent()
    {
        return $this->belongsTo('App\Models\Restaurant');
    }
}
