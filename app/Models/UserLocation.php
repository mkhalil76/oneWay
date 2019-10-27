<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserLocation extends Model
{
    use SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'country_id',  'user_id', 'city_id', 'location_id'
    ];

    /**
     * add user location validation rules
     *
     * @return @array
     *
     */
    public $set_location_rules = [
        'country_id' => 'required|Integer|exists:countries,id',
        'city_id' => 'required|Integer|exists:cities,id',
        'location_id' => 'required|Integer|exists:locations,id',
    ];

    /**
     * get the user that the location associated with
     *
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
