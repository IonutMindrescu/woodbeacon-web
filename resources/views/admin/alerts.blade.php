@extends('adminlte::page')

@section('title', 'Wood Beacon - Alpha 1.1a')

@section('content_header')
    <h1>Alerts History</h1>
@stop

@section('content')
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <!-- /.card-header -->
                <div class="box-body">
                    <table id="alerts-table" class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Parcel</th>
                                <th>Sound</th>
                                <th>Device</th>
                                <th>Coordinates</th>
                                <th>Date/Time</th>
                            </tr>
                        </thead>
                        <tbody>
                        @foreach($alerts as $alert)
                            <tr>
                                <td>{{ $alert->location }}</td>
                                <td>{{ $alert->sound }}</td>
                                <td>{{ $alert->device->name }}</td>
                                <td>{{ $alert->lat }}, {{ $alert->lng }}</td>
                                <td>{{ $alert->created_at }}</td>
                            </tr>
                        @endforeach
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Parcel</th>
                                <th>Sound</th>
                                <th>Device</th>
                                <th>Coordinates</th>
                                <th>Date/Time</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
    </div>
@stop
