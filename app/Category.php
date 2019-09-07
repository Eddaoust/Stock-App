<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name', 'parent_id', 'user_id'];

    public $timestamps = false;

    public function products() {
        return $this->hasMany('App\Product');
    }

    public function parent()
    {
        return $this->belongsTo('App\Category', 'parent_id');
    }

    public function children()
    {
        return $this->hasMany('App\Category', 'parent_id');
    }

    public function user() {
        return $this->belongsTo('App\User');
    }
}
