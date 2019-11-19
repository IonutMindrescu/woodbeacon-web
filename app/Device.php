<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    /**
     * Get the user that owns the device
     */
    public function owner() {
        return $this->belongsTo('App\User');
    }

    /**
     * Get the device's alerts
     */
    public function alerts() {
        return $this->hasMany('App\DeviceAlert');
    }
}
