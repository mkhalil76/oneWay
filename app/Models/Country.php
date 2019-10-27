<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'country_name'
    ];

    /**
     * add user location validation rules
     *
     * @return @array
     *
     */
    public $new_country_rule = [
        'country_name' => 'required|unique:countries'
    ];

    /**
     * function to get list of cities thats associated with country
     *
     */
    public function city()
    {
        return $this->hasMany('App\Models\City');
    }

}
