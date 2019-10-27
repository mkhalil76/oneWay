<?php

use Illuminate\Database\Seeder;

class CityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cities')->insert([
            'name' => 'nablus',
            'country_id' => 173
        ]);
        DB::table('cities')->insert([
            'name' => 'gaza',
            'country_id' => 173
        ]);
        DB::table('cities')->insert([
            'name' => 'hebron',
            'country_id' => 173
        ]);
        DB::table('cities')->insert([
            'name' => 'tulkarm',
            'country_id' => 173
        ]);
        DB::table('cities')->insert([
            'name' => 'ramallah',
            'country_id' => 173
        ]);
        DB::table('cities')->insert([
            'name' => 'tubas',
            'country_id' => 173
        ]);
        DB::table('cities')->insert([
            'name' => 'betlahem',
            'country_id' => 173
        ]);
        DB::table('cities')->insert([
            'name' => 'qalqilya',
            'country_id' => 173
        ]);
        DB::table('cities')->insert([
            'name' => 'selfit',
            'country_id' => 173
        ]);
        DB::table('cities')->insert([
            'name' => 'rafah',
            'country_id' => 173
        ]);
        DB::table('cities')->insert([
            'name' => 'jerusalem',
            'country_id' => 173
        ]);
    }
}
