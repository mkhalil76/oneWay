<?php

use Illuminate\Database\Seeder;

class FoodCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('menu_categories')->insert([
            'name' => '	Legumes'
        ]);
        DB::table('menu_categories')->insert([
            'name' => 'Edible plants'
        ]);
        DB::table('menu_categories')->insert([
            'name' => '	Edible fungi'
        ]);
        DB::table('menu_categories')->insert([
            'name' => 'Edible nuts and seeds'
        ]);
        DB::table('menu_categories')->insert([
            'name' => 'Baked goods'
        ]);
        DB::table('menu_categories')->insert([
            'name' => 'Breads'
        ]);
        DB::table('menu_categories')->insert([
            'name' => 'Dairy products'
        ]);
        DB::table('menu_categories')->insert([
            'name' => 'Eggs'
        ]);
        DB::table('menu_categories')->insert([
            'name' => 'Meat'
        ]);
        DB::table('menu_categories')->insert([
            'name' => 'Cereals'
        ]);
        DB::table('menu_categories')->insert([
            'name' => 'Seafood'
        ]);
    }
}
