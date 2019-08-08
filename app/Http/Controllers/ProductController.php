<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductValidation;
use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();

        return response()->json($products);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductValidation $request)
    {
        $validated = $request->validated();
        $product = new Product();
        foreach ($validated as $key => $value) {
            $product->$key = $value;
        }
        $product->save();
        $validated['message'] = 'Product created!';
        $validated['id'] = $product->id;
        return response()->json($validated, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return response()->json($product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(ProductValidation $request, Product $product)
    {
        dd($product);
        /*$validated = $request->validated();
        foreach ($validated as $key => $value) {
            $product->$key = $value;
        }
        $product->save();
        $validated['message'] = 'Product updated!';
        $validated['id'] = $product->id;
        return response()->json($validated, 200);*/
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
