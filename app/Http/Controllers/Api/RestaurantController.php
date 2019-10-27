<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Restaurant;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Http\Controllers\Controller;
use Auth;
use App\Models\ResturantLocation;
use App\Models\MenuItems;
use App\Models\User;

class RestaurantController extends Controller
{
    private $restaurant;
    /**
     * Create a new userController instance.
     *
     * @return void
     */
    public function __construct(Restaurant $restaurant)
    {
        $this->restaurant = $restaurant;
    }

    /**
     * function to store new resturant
     *
     * @param Request $_REQUEST
     *
     * @return response
     *
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $data['provider_id'] = Auth::user()->id;
        $validator = $this->makeValidation($request, $this->restaurant->_new_resturant);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()]);
            $this->response(false,$validator->errors(), 'Somthing want wrong , please try again');
        }
        $imageData = $request->get('logo');
        $fileName = time().'.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
        \Image::make($request->get('logo'))->save(public_path('images/logo/').$fileName);

        $data['logo'] = $fileName;
        /*$new_resturant_location = new ResturantLocation;
        $new_resturant_location = $new_resturant_location->create($data);
        $saved = $new_resturant_location->save();

        if ($saved) {
            $data['location_id'] = $new_resturant_location->id;
        }
        */
        $restaurant = new Restaurant;
        $restaurant = $restaurant->create($data);
        $saved = $restaurant->save();

        $this->response(true, $restaurant, 'New resturant created successfully');
    }

        /**
     * function to store new resturant
     *
     * @param Request $_REQUEST
     *
     * @return response
     *
     */
    public function update(Request $request)
    {
        $data = $request->all();
        $validator = $this->makeValidation($request, $this->restaurant->_update_resturant($data['id']));
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()]);
        }
        if ($request->get('logo')) {
            $imageData = $request->get('logo');
            $fileName = time().'.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
            \Image::make($request->get('logo'))->save(public_path('images/logo/').$fileName);
            $data['logo'] = $fileName;
        }

        try {
            $restaurant = Restaurant::findOrFail($data['id']);
            $restaurant = $restaurant->fill($data);
            $saved = $restaurant->save();
            $this->response(true, $restaurant, 'resturant updated successfully');
        } catch (ModelNotFoundException $e) {
            $this->response(false,$e, 'Somthing want wrong , please try again');
        }
    }

    /**
     * function to show resturant by id
     *
     * @param Integer $resturant_id
     *
     * @return response
     *
     */
    public function show($resturant_id)
    {
        try {
            $resturant = Restaurant::findOrFail($resturant_id);
            return response()->json($resturant);
        } catch (ModelNotFoundException $e) {
            $this->response(false,$e, 'Somthing want wrong , please try again');
        }
    }

    /**
     * function to show the list of resturants for provider
     *
     * @param Request $request
     *
     * @return response
     *
     */
    public function index(Request $request)
    {
        $user = Auth::user();

        return response()->json($user);
    }

    /**
     * function to get list of resturants for provider
     *
     * @param Request $request
     *
     * @return response
     *
     */
    public function getForProvider(Request $request)
    {
        $resturants = Restaurant::where('provider_id', '=', Auth::user()->id)->get();
        return response($resturants);
        $this->response(true, $resturants, 'resturent fetched sucesfully');
    }

    /**
     * function to get resturants menu items
     *
     * @param Integer $id
     *
     * @return response
     *
     */
    public function getResturantMenu($id)
    {
        $menus = MenuItems::where('restaurant_id', '=', $id)->get();
        return response()->json($menus);
    }

    /**
     * function to delete resturant
     *
     * @param int $resturant_id
     *
     * @return response
     *
     */
    public function delete($resturant_id)
    {
        try {
            $resturant = Restaurant::findOrFail($resturant_id)->delete();
            if ($resturant) {
                return response()->json([
                    'status' => true
                ]);
            } else {
                return response()->json([
                    'status' => false
                ]);
            }
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => $e]);
        }
    }

    /**
     * function to get list of resturants for user search
     *
     * @param int $location_id
     *
     * @return response
     *
     */
    public function all($location_id)
    {
        try {
            $resturants = Restaurant::where('status', '=', 1)->get();
            return response()->json([
                'status' => true,
                'items' => $resturants
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'errors' => $e
            ]);
        }
    }
}
