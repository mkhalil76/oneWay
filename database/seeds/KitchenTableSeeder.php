<?php

use Illuminate\Database\Seeder;

class KitchenTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('kitchens')->insert([
            'name' => 'المطبخ النابلس',
            'description' => 'test'
        ]);
        DB::table('kitchens')->insert([
            'name' => 'المطبخ الامريكي',
            'description' => 'test'
        ]);
        DB::table('kitchens')->insert([
            'name' => 'المطبخ الهندي',
            'description' => 'test'
        ]);
        DB::table('kitchens')->insert([
            'name' => 'المطبخ السعودي',
            'description' => 'test'
        ]);
        DB::table('kitchens')->insert([
            'name' => 'المطبخ الفرنسي',
            'description' => 'test'
        ]);
        DB::table('kitchens')->insert([
            'name' => 'المطبخ الاردني',
            'description' => 'test'
        ]);
        DB::table('kitchens')->insert([
            'name' => 'المطبخ المغربي',
            'description' => 'test'
        ]);
    }
}
