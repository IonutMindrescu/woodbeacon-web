<?php

namespace App\Http\Controllers;

use App\Events\{Alert, DeviceAlert};
use Illuminate\Http\Request;

class DeviceController extends Controller
{
    // < manage the device alerts >
    public function alert(Request $request) {
        $requestData = json_decode($request->getContent());

        // check if data is sent by our TTN device
        if (isset($requestData->app_id) && $requestData->app_id == 'wood-beacon') {
            // define payload fields
            $oPayloadFields = $requestData->payload_fields->message;

            // broadcast the event with Pusher
            event(new Alert($oPayloadFields));

            // check the sent action
            switch ($oPayloadFields->action) {
                case 'sound-detected':
                    break;

                case 'device-alert':
                    break;

                default:
                    break;
            }
            dd($requestData);
        }
    }
}
