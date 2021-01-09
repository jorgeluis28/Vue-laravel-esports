@extends('layouts.app')
@section('title', (isset($title) && $title != "" ? $title : "Title"))
@section('content')
    {{--<link href='{{ url(mix('css/landing.css')) }}' rel="stylesheet" />--}}
    <div id="vue-app"></div>
    <script src="{{ url(mix('js/manifest.js')) }}"></script>
    <script src="{{ url(mix('js/vendor.js')) }}"></script>
    <script src="{{ url(mix('js/vue-app.js')) }}"></script>
@stop
@section('scripts')
    {{--<script type="text/javascript" src="{{ url(mix('js/landing.js')) }}"></script>--}}
@stop
