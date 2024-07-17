<!DOCTYPE html>
<html lang="en">

<!-- begin::Head -->

<head>
    <meta charset="utf-8" />
    <title>@yield('title')</title>
    <meta name="description" content="Latest updates and statistic charts">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <!--begin::Web font -->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://cdn.ckeditor.com/4.15.1/standard/ckeditor.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
    <script>
    WebFont.load({
        google: {
            "families": ["Roboto:300,400,500,600,700", "Roboto:300,400,500,600,700"]
        },
        active: function() {
            sessionStorage.fonts = true;
        }
    });
    </script>
    <link href="{{asset('assets_staff/vendors/base/vendors.bundle.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets_staff/demo/default/base/style.bundle.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets_staff/demo/demo10/base/style.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets_staff/vendors/custom/fullcalendar/fullcalendar.bundle.css')}}" rel="stylesheet"
        type="text/css" />
    <link href="{{asset('assets_staff/css/style-giaovien.scss')}}" rel="stylesheet" type="text/css" />
    <link rel="icon" href="{{asset('assets/demo/img/logo/icon-logo.png')}}" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/switchery/0.8.2/switchery.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/switchery/0.8.2/switchery.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
</head>

<body
    class="m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">
    <div class="m-grid m-grid--hor m-grid--root m-page">
        @include('staff/giao-vien/layouts/header')
        <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
            @include('staff/giao-vien/layouts/sidebar')
            @yield('content')
        </div>
    </div>
    <div id="m_quick_sidebar" class="m-quick-sidebar m-quick-sidebar--tabbed m-quick-sidebar--skin-light">
        <div class="m-quick-sidebar__content m--hide">
            <span id="m_quick_sidebar_close" class="m-quick-sidebar__close"><i class="la la-close"></i></span>
            <ul id="m_quick_sidebar_tabs" class="nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand" role="tablist">
                <li class="nav-item m-tabs__item">
                    <a class="nav-link m-tabs__link active" data-toggle="tab" href="#m_quick_sidebar_tabs_messenger"
                        role="tab">Messages</a>
                </li>
                <li class="nav-item m-tabs__item">
                    <a class="nav-link m-tabs__link" data-toggle="tab" href="#m_quick_sidebar_tabs_settings"
                        role="tab">Settings</a>
                </li>
                <li class="nav-item m-tabs__item">
                    <a class="nav-link m-tabs__link" data-toggle="tab" href="#m_quick_sidebar_tabs_logs"
                        role="tab">Logs</a>
                </li>
            </ul>
        </div>
    </div>
    <script src="{{asset('assets_staff/demo/default/custom/crud/forms/widgets/bootstrap-switch.js')}}"
        type="text/javascript"></script>
    <script src="{{asset('assets_staff/vendors/custom/fullcalendar/fullcalendar.bundle.js')}}" type="text/javascript">
    </script>
    <script src="{{asset('assets_staff/vendors/custom/fullcalendar/fullcalendar.bundle.js')}}" type="text/javascript">
    </script>
    		<script src="{{asset('assets_staff/demo/default/custom/crud/forms/widgets/select2.js')}}" type="text/javascript"></script>
    <script src="{{asset('assets_staff/vendors/base/vendors.bundle.js')}}" type="text/javascript"></script>
    <script src="{{asset('assets_staff/demo/default/base/scripts.bundle.js')}}" type="text/javascript"></script>
    <script src="{{asset('assets_staff/app/js/dashboard.js')}}" type="text/javascript"></script>
    <script src="{{asset('assets_staff/demo/default/custom/crud/forms/widgets/bootstrap-select.js')}}" type="text/javascript"></script>
    <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/js/bootstrap4-toggle.min.js"></script>
    
</body>

</html>