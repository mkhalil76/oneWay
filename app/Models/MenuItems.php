<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\MenuCategories;

class MenuItems extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id','item_name', 'item_price', 'description', 'category_id', 'restaurant_id', 'item_photo'
    ];

    /**
     * validation for create new menu item
     *
     */
    public $_add_new = [
        'item_name' => 'required|string|unique:menu_items,item_name',
        'item_price' => 'required',
        'description' => 'required',
        'category_id' => 'required|exists:menu_categories,id',
        'restaurant_id' => 'required|exists:restaurants,id',
        'item_photo' => 'required'
    ];

    /**
     * function to validate update menu item
     *
     * @param int $menu_id
     *
     * @return Array
     */
    public function _update($menu_id)
    {
        return [
            'item_name' => 'string|unique:menu_items,item_name,'.$menu_id,
            'category_id' => 'exists:menu_categories,id',
        ];
    }
    /**
     * get the resturant that the menu item belongs to
     *
    */
    public function restaurant()
    {
        return $this->belongsTo('App\Models\Restaurant');
    }

    /**
     * function to get category thats the menu item belongs to
     *
     *
     */
    public function category()
    {
        $this->belongsTo('App\Models\MenuCategories');
    }

    /**
     * function to exclude some columns from the query
     *
     * @param $query , array
     *
     */
    public function scopeExclude($query,$value = array())
    {
        return $query->select( array_diff( $this->fillable,(array) $value) );
    }

    /**
     * function to get the extensions thats the menu item has
     *
     */
    public function extension()
    {
        return $this->hasMany('App\Models\Extensions');
    }
}
