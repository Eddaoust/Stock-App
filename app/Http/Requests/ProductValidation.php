<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductValidation extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|min:2|max:50',
            'description' => 'string|min:1',
            'img' => 'url',
            'rating' => 'integer',
            'infos' => 'json',
            'category_id' => 'integer',
            'user_id' => 'integer'
        ];
    }
}
