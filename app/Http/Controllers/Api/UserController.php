<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
//use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Auth;
use App\Models\UserLocation;

class UserController extends Controller
{
    private $user;
    private $user_location;

    /**
     * Create a new userController instance.
     *
     * @return void
     */
    public function __construct(User $user, UserLocation $user_location)
    {
        $this->user = $user;
        $this->user_location = $user_location;
    }

    public function register(Request $request)
    {
        $data = $request->all();
        $validator = $this->makeValidation($request, $this->user->new_user_rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                'message' => 'Somthing want wrong , please try again'
            ]);
        }

        $data['password'] = bcrypt($data['password']);

        $user = new User;
        $user = $user->create($data);
        $token = JWTAuth::fromUser($user);
        $saved = $user->save();

        return response()->json([
            'items' => $user,
            'token' => $token,
            'status' => true,
            'message' => 'New user created successfully'
        ]);
    }

    /**
     * function to login the user
     *
     * @param Request $request
     *
     * @return response
     *
     */
    public function login(Request $request)
    {
        $data = $request->all();
        $validator = $this->makeValidation($request, $this->user->login_user_rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                'message' => 'Somthing want wrong , please try again'
            ]);
        }

        $data = $request->all();
        try {
            // attempt to verify the input and create a token for the user
            if (! $token = JWTAuth::attempt($data)) {
                return response()->json([
                    'message' => 'email or password are invalid',
                    'status' => false,
                ], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json([
                'message' => 'could not create token',
                'status' => false,
            ], 500);
        }

        $user = User::where('email', '=', $data['email'])->first();
        if (!empty($user)) {
            return response()->json([
                'items' => $user,
                'token' => $token,
                'status' => true,
                'message' => 'Login successfully'
            ])->header('Authorization', $token);;
        }
    }

    /**
     * function to set user country
     *
     * @param Request $request
     *
     * @return response
     *
     */
    public function setUserCountry(Request $request)
    {
        $user_id = auth()->user()->id;
        $validator = $this->makeValidation($request, $this->user->set_country);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                'message' => 'Somthing want wrong , please try again'
            ]);
        }

        $data = $request->only(['country']);
        try {
            $user = User::findOrFail($user_id);
            $user->country = $request->country;
            $user->save();

            return response()->json([
                'status' => true,
                'message' => 'Country updated successfully'
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Somthing want wrong , please try again'
            ]);
        }
    }

    /**
     * function to set user location
     *
     * @param Request $request
     *
     * @return response
     *
     */
    public function setUserLocation(Request $request)
    {
        $user_id = Auth::user()->id;

        $validator = $this->makeValidation($request, $this->user_location->set_location_rules);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                'message' => 'Somthing want wrong , please try again'
            ]);
        }

        $data = $request->all();
        $data['user_id'] = $user_id;

        try {
            $user = User::with(['userLocation'])->findOrFail($user_id);
            if ($user->userLocation == null) {
                $user_location = new UserLocation;
                $user_location = $user_location->create($data);
                $saved = $user_location->save();
            } else {
                $user_location = new UserLocation;
                $user_location = $user_location->fill($data);
                $saved = $user_location->save();
            }
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Somthing want wrong , please try again'
            ]);
        }
        return response()->json([
            'status' => true,
            'items' => $user_location,
            'message' => 'Location updated successfully'
        ]);
    }

    /**
     * function to get user info
     *
     * @param Request $request
     *
     * @return response
     *
     */
    public function getUserInfo(Request $request)
    {
        $user_id = Auth::user()->id;
        $user = User::with(['userLocation'])->where('id', '=', $user_id)->first();
        return response()->json($user);
    }

    /**
     * function to update user info
     *
     * @param Request $request
     *
     * @return response
     *
     */
    public function updateInfo(Request $request)
    {
        $data = $request->all();
        $user_id = Auth::user()->id;
        $validator = $this->makeValidation($request, $this->user->update_user_rules($user_id));
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                'message' => 'Somthing want wrong , please try again'
            ]);
        }

        if(isset($data['password'])){
            $data['password'] = bcrypt($data['password']);
        }
        try {
            $user = User::findOrFail($user_id);
            $user = $user->fill($data);
            $saved = $user->save();

            return response()->json([
                'items' => $user,
                'status' => true,
                'message' => 'New user created successfully'
            ]);
        } catch (ModelNotFoundException $e){
            return response()->json([
                'status' => false,
                'message' => 'Somthing want wrong , please try again'
            ]);
        }
    }

    /**
     * function to delete user data
     *
     * @param Request $request
     *
     * @return response
     *
     */
    public function deleteUser()
    {
        try {
            $user = User::findOrFail(Auth::user()->id);
            $user->delete();
            auth()->logout();
            return response()->json([
                'status' => true,
                'message' => 'User account deleted successfully'
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Somthing want wrong , please try again'
            ]);
        }
    }

    /**
     * function to log user out
     *
     * @param Request $request
     *
     * @return response
     *
     */
    public function logout(Request $request)
    {
        try {
            $user = User::findOrFail(Auth::user()->id);
            auth()->logout();
            return response()->json([
                'status' => true,
                'message' => 'User logout successfully'
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Somthing want wrong , please try again'
            ]);
        }
    }

    /**
     * function to set device token
     *
     * @param Request $request
     *
     * @return response
     *
     */
    public function setDeviceToken(Request $request)
    {

        try {
            $user = User::findOrFail(Auth::user()->id);
            $data = $request->all();
            $validator = $this->makeValidation($request, $this->user->set_device_token_rule);
            if ($validator->fails()) {
                return response()->json([
                    'status' => false,
                    'errors' => $validator->errors(),
                    'message' => 'Somthing want wrong , please try again'
                ]);
            }

            $user->device_token = $data['device_token'];
            $user->save();

            return response()->json([
                'status' => true,
                'message' => 'Device token updated successfully'
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Somthing want wrong , please try again'
            ]);
        }
    }

}
