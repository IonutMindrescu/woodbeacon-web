@extends('adminlte::page')

@section('title', 'Live Alerts')

@section('content_header')
    <h1>Live Alerts</h1>
@stop

@section('content')
    <div class="row">
        <div class="col-md-9">
            {{-- Init Google Maps --}}
            <div id="js-google-maps" class="box-body"></div>
        </div>
        <div class="col-md-3">
            <div class="card card-alert" data-json='{"lat":"47.640362","lng":"26.258420"}'>
                <h3>#Alert - 18/10/2019</h3>
                Location: <strong>parcel 128B</strong><br/>
                Sound: <strong>unknown</strong>
            </div>
            <div class="card card-alert" data-json='{"lat":"47.639995","lng":"26.259057"}'>
                <h3>#Alert - 18/10/2019</h3>
                Location: <strong>parcel 128B</strong><br/>
                Sound: <strong>unknown</strong>
            </div>
            <div class="card card-alert" data-json='{"lat":"47.619995","lng":"26.259057"}'>
                <h3>#Alert - 18/10/2019</h3>
                Location: <strong>parcel 128B</strong><br/>
                Sound: <strong>unknown</strong>
            </div>
            <div class="card card-alert" data-json='{"lat":"47.629995","lng":"26.259057"}'>
                <h3>#Alert - 18/10/2019</h3>
                Location: <strong>parcel 128B</strong><br/>
                Sound: <strong>unknown</strong>
            </div>
        </div>
    </div>
@stop
