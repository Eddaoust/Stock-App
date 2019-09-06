<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Requests\CategoryValidation;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    /**
     * Display a listing of the main category.
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $mainCat = $user->categories->where('parent_id', '=', null);
        $categories = [];
        foreach ($mainCat as $category) {
            $categories[] = $category;
            $category->children;
        }
        return response()->json($categories);
    }

    /**
     * Display a listing of secondary category.
     * @param Category $category
     */
    public function secondaryIndex(Category $category)
    {
        $categories = DB::table('categories')->where('parent_id', '=', $category->id)->get();
        return response()->json($categories);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryValidation $request)
    {
        $validated = $request->validated();
        $category = new Category();
        foreach ($validated as $key => $value) {
            $category->$key = $value;
        }
        $category->save();
        $validated['parent_id'] = null;
        $validated['id'] = $category->id;
        return response()->json($validated, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryValidation $request, Category $category)
    {
        $validated = $request->validated();
        foreach ($validated as $key => $value) {
            $category->$key = $value;
        }
        $category->save();
        $validated['message'] = 'Category updated!';
        $validated['id'] = $category->id;
        return response()->json($validated, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        DB::table('categories')->where('parent_id', '=', $category->id)->delete();
        $category->delete();

        return response()->json('Category deleted!', 200);
    }
}
