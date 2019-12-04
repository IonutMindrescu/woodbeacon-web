<?php

namespace App\Http\Controllers;

use App\{Device, DeviceAlert};

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home', ['devices' => Device::all(), 'alerts' => DeviceAlert::orderBy('id', 'desc')->take(10)->get()]);
    }

    public function alerts()
    {
        return view('admin.alerts', ['alerts' => DeviceAlert::orderBy('id', 'desc')->get()]);
    }
}
