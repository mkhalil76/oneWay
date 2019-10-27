<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Category;
use App\Models\ResturantLocation;
use App\Models\Country;
use App\Models\Location;
use App\Models\City;

class Restaurant extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'country_id', 'logo', 'location_id', 'category_id', 'has_branch', 'provider_id', 'status','city_id', 'kitchen_id'
    ];

    /**
     * the attributse thats should be retuurnde with user
     */
    protected $append = ['provider', 'menuItem'];

    /**
     * array of roles list for create new resturant
     *
     * @return array
     */

    public $_new_resturant = [
        'name' => 'required|string|unique:restaurants,name',
        'country_id' => 'required|integer|exists:countries,id',
        'logo' => 'required',
        'location_id' => 'required|exists:locations,id',
        'category_id' => 'required|exists:categories,id',
        'has_branch' => 'required|in:0,1',
        'city_id' => 'required|exists:cities,id',
        'status' => 'required|in:0,1',
        'kitchen_id' => 'exists:kitchens,id'
    ];

    /**
     * fynction to update resturants rule
     *
     * @return array
     */
    public function _update_resturant($id) {
        return [
            'name' => 'string|unique:restaurants,name,'.$id,
            'country_id' => 'integer|exists:countries,id',
            'location_id' => 'exists:locations,id',
            'category_id' => 'exists:categories,id',
            'has_branch' => 'in:0,1',
            'city_id' => 'exists:cities,id',
            'status' => 'in:0,1',
            'kitchen_id' => 'exists:kitchens,id'
        ];
    }

    /**
     * function to get category associated with resturant
    */
    public function category()
    {
        return $this->belongsTo('App\Models\Category');
    }

    /**
     * get the resturnat provider owner
     *
     */
    public function provider()
    {
        return $this->belongsTo('App\Models\User');
    }

    /**
     * function to get location associated with resturant
     *
     */
    public function resturantLocation()
    {
        return $this->hasOne('App\Models\ResturantLocation');
    }

    /**
     * function to get category name
     *
     * @param Integer $category
     *
     * @return String
     *
     */
    public function getCategoryIdAttribute($value)
    {
        $cat = Category::where('id', '=', $value)->first();
        if (!empty($cat)) {
            return $cat->name;
        } else {
            return "";
        }
    }

    /**
     * function to get city id value
     *
     * @param int $city_id
     *
     * @return String
     *
     */
    public function getCityIdAttribute($city_id)
    {
        $city = City::where('id', '=', $city_id)->first();
        if (!empty($city)) {
            return $city->name;
        } else {
            return "";
        }
    }
    /**
     * function to get location name attribute
     *
     * @param Integer $location_id
     *
     * @return String
     *
     */

    public function getLocationIdAttribute($location_id)
    {
        $location = Location::where('id', '=', $location_id)->first();
        if (!empty($location)) {
            return $location->name;
        } else {
            return "";
        }
    }

    /**
     * function to get Country_id Attribute
     *
     * @param Integer $country_id
     *
     * @return String
     *
     */
    public function getCountryIdAttribute($country_id)
    {
        $country = Country::where('id', '=', $country_id)->first();
        if (!empty($country)) {
            return $country->name;
        } else {
            return "";
        }
    }
    /**
     * get status attribute value
     *
     * @param Integer $status
     *
     * @return String
     *
     */
    public function getStatusAtrribute($status)
    {
        if ($status == 1) {
            return 'Active';
        } else {
            return 'Inactive';
        }
    }

    /**
     * function to get list of menu associated with resturant
     *
     */
    public function menuItem()
    {
        return $this->hasMany('App\Models\MenuItems');
    }
}
