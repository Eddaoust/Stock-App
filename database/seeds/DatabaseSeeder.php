<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Category::class, 30)->create()->each(function(\App\Category $category){
            factory(App\Category::class, rand(0, 6))->create(['parent_id' => $category->id])
            ->each(function (\App\Category $subCategory) {
                factory(\App\Product::class, 3)->create(['category_id' => $subCategory->id]);
            });
        });
    }

}
