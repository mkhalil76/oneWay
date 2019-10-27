<?php

use Illuminate\Database\Seeder;

class LocationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('locations')->insert([
            'name' => 'azmout',
            'city_id' => 1,
            'country_id' => 173
        ]);
        DB::table('locations')->insert([
            'name' => 'aldawar',
            'city_id' => 1,
            'country_id' => 173
        ]);
        DB::table('locations')->insert([
            'name' => 'rafidea',
            'city_id' => 1,
            'country_id' => 173
        ]);
        DB::table('locations')->insert([
            'name' => 'beteba',
            'city_id' => 1,
            'country_id' => 173
        ]);
        DB::table('locations')->insert([
            'name' => 'zawata',
            'city_id' => 1,
            'country_id' => 173
        ]);
        DB::table('locations')->insert([
            'name' => 'der sharaf',
            'city_id' => 1,
            'country_id' => 173
        ]);
        DB::table('locations')->insert([
            'name' => 'balata ',
            'city_id' => 1,
            'country_id' => 173
        ]);
        DB::table('locations')->insert([
            'name' => 'nablus aljadedah ',
            'city_id' => 1,
            'country_id' => 173
        ]);
        DB::table('locations')->insert([
            'name' => 'almasaken',
            'city_id' => 1,
            'country_id' => 173
        ]);
        DB::table('locations')->insert([
            'name' => 'alamrya',
            'city_id' => 1,
            'country_id' => '173'
        ]);
        DB::table('locations')->insert([
            'name' => 'al Jneed',
            'city_id' => 1,
            'country_id' => '173'
        ]);
        DB::table('locations')->insert([
            'name' => 'sofyan street',
            'city_id' => 1,
            'country_id' => '173'
        ]);
        DB::table('locations')->insert([
            'name' => 'almakhfeay',
            'city_id' => 1,
            'country_id' => '173'
        ]);
    }
}
