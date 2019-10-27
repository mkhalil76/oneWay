<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\MenuItems;
use App\Models\MenuCategories;
use App\Http\Controllers\Controller;

class MenuController extends Controller
{

    private $menu_item;
    /**
     * Create a new userController instance.
     *
     * @return void
     */
    public function __construct(MenuItems $menu_item)
    {
        $this->menu_item = $menu_item;
    }

    /**
     * function to store new menu item
     *
     * @param Request $request
     *
     * @return response
     */
    public function store(Request $request)
    {

        $data = $request->all();
        $data['restaurant_id'] = 36;
        $validator = $this->makeValidation($request, $this->menu_item->_add_new);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()]);
        }

        $imageData = $request->get('item_photo');
        $fileName = time().'.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
        \Image::make($request->get('item_photo'))->save(public_path('images/menu/').$fileName);

        $data['item_photo'] = $fileName;
        $new_menu_item = new MenuItems;
        $new_menu_item = $new_menu_item->create($data);
        $saved = $new_menu_item->save();

        $this->response($saved, $new_menu_item, 'New resturant created successfully');
    }

    /**
     * function to get menu info
     *
     * @param Integer $menu_id
     *
     * @return response
     *
     */
    public function getMenuInfo($menu_id)
    {
        $menu = MenuItems::where('id', '=', $menu_id)->exclude('item_photo')->first();
        return response($menu);
    }

    /**
     * function to update menu item
     *
     * @param Request $request , Integer $menu_id
     *
     * @return response
     */
    public function updateMenu(Request $request)
    {
        $data = $request->all();
        $validator = $this->makeValidation($request, $this->menu_item->_update($data['id']));
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()]);
        }

        if (!empty($request->get('item_photo'))) {
            $imageData = $request->get('item_photo');

            $fileName = time().'.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
            \Image::make($request->get('item_photo'))->save(public_path('images/menu/').$fileName);

            $data['item_photo'] = $fileName;
        }

        $menu = MenuItems::findOrFail($data['id']);
        $menu = $menu->fill($data);
        $saved = $menu->save();
        return response($menu);
        return $this->response($saved,$menu,'item updated successflu');
    }

    /**
     * function to delete menu item
     *
     * @param Integer $_menu_id
     *
     * @return response
     *
     */
    public function deleteMenuItem($_menu_id)
    {
        $menu = MenuItems::where('id', '=', $_menu_id)->delete();
        if ($menu) {
            return response()->json([
                'status' => true
            ]);
        } else {
            return response()->json([
                'status' => false
            ]);
        }
    }

    /**
     * function to get list of menu items for resturant
     *
     * @param int $resturant_id
     *
     * @return response
     *
     */
    public function menuItem($resturant_id)
    {

        try {
            $menu_items = MenuItems::findOrFail($resturant_id);
            return response()->json([
                'status' => true,
                'items' => $menu_items
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'errors' => $e
            ]);
        }
    }

    /**
     * function to get menu items by categories
     *
     * @param int $cat_id
     *
     * @return response
     *
     */
    public function menuByCategory($cat_id)
    {
        $menu_items = MenuItems::where('category_id', '=', $cat_id)->get();
        return response()->json([
            'status' => true,
            'items' => $menu_items,
        ]);
    }
}
