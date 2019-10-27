<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name'
    ];

    /**
     * add new category rules
     * 
     * @return array
     * 
     */
    public $_new_category = [
        'name' => 'required|string|unique,name'
    ];

    /**
     * get resturant associated by category
     * 
     */
    public function restaurant() 
    {
        return $this->hasMany('App\Models\Restaurant');
    }
}
