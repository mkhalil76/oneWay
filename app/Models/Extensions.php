<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Extensions extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'extensions_list', 'menu_item_id',
    ];

    /**
     * function to get menu item thats the extensions belongs to
     *
     *
     */
    public function menuItem()
    {
        return $this->belongsTo('App\Models\MenuItems');
    }
}
