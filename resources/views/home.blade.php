@extends('adminlte::page')

@section('title', 'Live Alerts')

@section('content_header')
    <h1>Live Alerts</h1>
@stop

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="box box-default">

                {{-- Init Google Maps --}}
                <div class="box-body js-google-maps"></div>

            </div>
        </div>
    </div>
@stop
