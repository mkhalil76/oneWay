<?php

use Illuminate\Database\Seeder;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $path = public_path('country.json');

        $json = json_decode(file_get_contents($path), true);

        if(!empty($json)){
            foreach($json as $key => $value){
                $insert[] = ['name' => $value];
            }
            if(!empty($insert)){
                DB::table('countries')->insert($insert);
            }
        }
    }
}
