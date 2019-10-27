<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->integer('extension_id')->unsigned();
            $table->foreign('extension_id')
                ->references('id')
                ->on('extensions');
            $table->integer('menu_item_id')->unsigned();
            $table->foreign('menu_item_id')
                ->references('id')
                ->on('menu_items');
            $table->float('price');
            $table->enum('status', ['to_confirm', 'pinding', 'success','rejected','done']);
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
        Schema::dropIfExists('carts');
    }
}
