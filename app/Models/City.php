<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class City extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'country_id'
    ];

    /**
     * add new category rules
     *
     * @return array
     *
     */
    public $_new_city = [
        'name' => 'required|string|unique',
        'country_id' => 'required|exists:countries'
    ];

    /**
     * function to get the country thats the city belongs to
     *
     *
     */
    public function country()
    {
        return $this->belongsTo('App\Models\Country');
    }

    /**
     * function to get list of locations associated with city
     *
     */
    public function locations ()
    {
        return $this->hasMany('App\Models\Location');
    }
}
