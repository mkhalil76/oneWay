<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRestaurantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('restaurants', function (Blueprint $table) {
            $table->increments('id');
            $table->String('name');
            $table->Integer('country_id');
            $table->Integer('location_id')->unsigned();
            $table->foreign('location_id')
                ->references('id')
                ->on('resturant_locations')
                ->onDelete('cascade');
            $table->Integer('category_id')->unsigned();
            $table->foreign('category_id')
                ->references('id')
                ->on('categories')
                ->onDelete('cascade');
            $table->Integer('has_branch');
            $table->String('logo');
            $table->Integer('provider_id')->unsigned();
            $table->foreign('provider_id')
                ->references('id')->on('users')
                ->onDelete('cascade');
            $table->Integer('status');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('restaurants');
    }
}
