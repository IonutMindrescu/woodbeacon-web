<?php

namespace App\Http\Controllers;

use App\Events\Alert;
use Illuminate\Http\Request;

class DeviceController extends Controller
{
    // < manage the device alerts >
    public function alert(Request $request) {
        $requestData = json_decode($request->getContent());

        // check if data is sent by our TTN device
        if(isset($requestData->app_id) && $requestData->app_id == 'wood-beacon') {

            // check the sent action
            switch ($requestData->payload_fields->message->action) {
                case 'sound-detected':
                    event(new Alert($requestData->payload_fields->message));
                    break;

                case 'device-status':
                    //
                    break;

                default:
                    break;
            }
            dd($requestData);
        }
    }
}
