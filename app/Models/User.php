<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'user_type', 'password','gender','date_of_birth', 'sms_service', 'email_service','device_type'
    ];

    /**
     * the attributse thats should be retuurnde with user
     */
    protected $append = ['userLocation'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * create new user validation rules
     * 
     * @return array
     */

    public $new_user_rules = [
        'first_name' => 'required|min:3',
        'last_name' => 'required|min:3',
        'email' => 'required|email|unique:users',
        'password' => 'required|string|min:6|confirmed',
        'gender' => 'required|in:1,2',
        'date_of_birth' => 'required|date',
        'device_type' => 'required|in:1,2',
        'sms_service' => 'required|in:0,1',
        'email_service' => 'required|in:0,1',
    ];

    /**
     * create login user validation rules
     * 
     * @return array
     */
    public $login_user_rules = [
        'email' => 'required|email|exists:users,email',
        'password' => 'required'
    ];

    /**
     * create set user country validation rules
     * 
     * @return array
     */
    public $set_country = [
        'country' => 'required|Integer|exists:countries,id'
    ];

    /**
     * Get the location record associated with the user.
     */
    public function userLocation()
    {
        return $this->hasOne('App\Models\UserLocation');
    }

    /**
     * function to set update user validation rules
     * 
     * @return array
     */
    public function update_user_rules($id) 
    {
        return [
            'first_name' => 'string',
            'last_name' => 'string|max:300',
            'email' => 'unique:users,email,'.$id,
            'password' => 'string|min:6|confirmed',
            'gender' => 'in:1,2',
            'date_of_birth' => 'date',
            'device_type' => 'in:1,2',
            'sms_service' => 'in:0,1',
            'email_service' => 'in:0,1',
        ];
    }

    /**
     * set user device token validation rule
     * 
     * @return array
     */
    public $set_device_token_rule = [
        'device_token' => 'string|required|unique:users,device_token'
    ];

    /**
     * Get the locations belong to user
     */
    public function locations()
    {
        return $this->hasMany('App\Models\UserLocation');
    }
}
