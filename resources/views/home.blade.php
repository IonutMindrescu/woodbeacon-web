@extends('adminlte::page')

@section('title', 'Live Alerts')

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
            <!-- Widget: user widget style 1 -->
            <div class="box box-widget widget-user">
                <!-- Add the bg color to the header using any of the bg-* classes -->
                <div class="widget-user-header bg-green-gradient">
                    <h3 class="widget-user-username">Wood Beacon</h3>
                    <h5 class="widget-user-desc">Location: Assist Forest</h5>
                </div>
                <div class="widget-user-image">
                    <img class="img-circle device-image" src="{{ asset('images/wbdevice.png') }}" alt="User Avatar">
                </div>
                <div class="box-footer">
                    <div class="row">
                        <div class="col-sm-4 border-right">
                            <div class="description-block">
                                <h5 class="description-header">BATTERY</h5>
                                <span class="description-text"><i class="fa fa-battery-three-quarters"></i> <span class="js-battery-level">71%</span></span>
                            </div>
                            <!-- /.description-block -->
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-4 border-right">
                            <div class="description-block">
                                <h5 class="description-header">STATUS</h5>
                                <span class="description-text"><span class="device-status bg-green-gradient"></span></span>
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
            <!-- /.widget-user -->
        </div>

        {{-- Alerts History --}}
        <div class="col-md-4">
            <h3>Alerts History</h3>
            <div class="card card-alert" data-json='{"lat":"47.640362","lng":"26.258420"}'>
                <h3>#Alert - 18/10/2019</h3>
                Location: <strong>parcel 128B</strong><br/>
                Sound: <strong>unknown</strong>
            </div>
        </div>
    </div>
@stop
