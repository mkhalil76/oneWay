<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'name' => 'Foods'
        ]);
        DB::table('categories')->insert([
            'name' => 'Drink'
        ]);
        DB::table('categories')->insert([
            'name' => 'Coffee'
        ]);
    }
}
