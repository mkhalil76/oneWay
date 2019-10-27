<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Kitchen extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description'
    ];

    /**
     * add new category rules
     *
     * @return array
     *
     */
    public $_new_category = [
        'name' => 'required|string|unique,name',
        'description' => 'required'
    ];
}
