<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DeviceAlert extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'device_alerts';

    /**
     * Get the device that has the logs
     */
    public function device() {
        return $this->belongsTo('App\Device');
    }
}
