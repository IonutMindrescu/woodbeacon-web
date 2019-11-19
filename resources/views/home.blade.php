@extends('adminlte::page')

@section('title', 'Wood Beacon - Alerts')

@section('content_header')
    <h1>Live Alerts</h1>
@stop

@section('content')
    <div class="row">
        {{-- Init Google Maps --}}
        <div class="col-md-8">
            <div id="js-google-maps" class="box-body"></div>
        </div>

        {{-- Device Card --}}
        <div class="col-md-4">
            @foreach($devices as $device)
                @if($device->status === 'online')
                    <div class="box box-widget widget-user">
                <div class="widget-user-header bg-green-gradient">
                    <h3 class="widget-user-username">{{ $device->name }}</h3>
                    <h5 class="widget-user-desc">Location: {{ $device->location }}</h5>
                </div>
                <div class="widget-user-image">
                    <img class="img-circle device-image" src="{{ asset('images/wbdevice.png') }}" alt="User Avatar">
                </div>
                <div class="box-footer">
                    <div class="row">
                        <div class="col-sm-4 border-right">
                            <div class="description-block">
                                <h5 class="description-header">BATTERY</h5>
                                <span class="description-text"><i class="fa fa-battery-three-quarters"></i> <span class="js-battery-level">{{ $device->battery }}%</span></span>
                            </div>
                            <!-- /.description-block -->
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 border-right">
                            <div class="description-block">
                                <h5 class="description-header">STATUS</h5>
                                <span class="description-text">
                                    <div class="status {{ $device->status }}"></div>
                                </span>
                            </div>
                            <!-- /.description-block -->
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4">
                            <div class="description-block">
                                <h5 class="description-header">LOCATION</h5>
                                <span class="description-text"><i class="fa fa-location-arrow"></i></span>
                            </div>
                            <!-- /.description-block -->
                        </div>
                        <!-- /.col -->
                    </div>
                    <!-- /.row -->
                </div>
            </div>
                @endif
            @endforeach
        </div>

        {{-- Alerts History --}}
        <div class="col-md-4">
            <h3>Alerts History</h3>
            <div class="js-alerts">
                @foreach($alerts as $alert)
                    <div class="card card-alert" data-json='{"lat":"{{ $alert->lat }}","lng":"{{ $alert->lng }}"}'>
                        <h3>#Alert - {{ $alert->created_at }}</h3>
                        Location: <strong>{{ $alert->location }}</strong><br/>
                        Sound: <strong>{{ $alert->sound }}</strong>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
@stop
