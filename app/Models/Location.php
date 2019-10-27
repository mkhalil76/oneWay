<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Location extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'city_id','country_id'
    ];

    /**
     * add new category rules
     *
     * @return array
     *
     */
    public $_new_city = [
        'name' => 'required|string|unique',
        'country_id' => 'required|exists:countries',
        'city_id' => 'required|exists:cities'
    ];

    /**
     * function to get the country thats the location associated with it
     *
     */
    public function country()
    {
        return $this->belongsTo('App\Models\Country');
    }

    /**
     * function to get the country thats the location associated with it
     *
     */
    public function city()
    {
        return $this->belongsTo('App\Models\City');
    }
}
