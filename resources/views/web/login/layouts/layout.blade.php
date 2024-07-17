

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>@yield('title')</title>
    <meta name="description" content="Latest updates and statistic charts">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
    <link href="{{asset('assets/vendors/base/vendors.bundle.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/demo/demo10/style.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/demo/demo10/base/style.bundle.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/vendors/custom/fullcalendar/fullcalendar.bundle.css')}}" rel="stylesheet"
        type="text/css" />
        <link href="{{asset('assets/demo/demo10/base/style.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets_staff/vendors/base/vendors.bundle.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets_staff/demo/default/base/style.bundle.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets_staff/vendors/custom/fullcalendar/fullcalendar.bundle.css')}}" rel="stylesheet"
        type="text/css" />
    <link rel="icon" href="{{asset('assets/demo/img/logo/icon-logo.png')}}" />

    <script>
    WebFont.load({
        google: {
            "families": ["Roboto:300,400,500,600,700", "Roboto:300,400,500,600,700", "Asap+Condensed:500"]
        },
        active: function() {
            sessionStorage.fonts = true;
        }
    });
    </script>
    <style>
    .login {
        min-height: 100%;
        background-image: url("{{asset('assets/app/media/img/banner_full_hd.jpg')}}");
        width: 100%;
        background-repeat: no-repeat;
        background-size: contain;
    }
    </style>
    <link href="{{asset('assets_staff/trangchu/favicon.png')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets_staff/trangchu/font-awesome.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets_staff/trangchu/bootstrap.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets_staff/trangchu/bootstrap-social.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets_staff/trangchu/web_static_css.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets_staff/trangchu/web_static_css.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets_staff/trangchu/viewport.css')}}" rel="stylesheet" type="text/css" />
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
  
 
    <script>
    WebFont.load({
        google: {
            "families": ["Roboto:300,400,500,600,700", "Roboto:300,400,500,600,700", "Asap+Condensed:500"]
        },
        active: function() {
            sessionStorage.fonts = true;
        }
    });
    </script>
  
   
</head>

<body
    class="m-page--fluid m-page--loading-enabled m-page--loading m-header--fixed m-header--fixed-mobile m-footer--push m-aside--offcanvas-default">
    @include('web/login/layouts/header')
    @yield('content')
    @include('web/login/layouts/footer')
    <script src="{{asset('assets/vendors/base/vendors.bundle.js')}}" type="text/javascript"></script>
    <script src="{{asset('assets/demo/demo10/base/scripts.bundle.js')}}" type="text/javascript"></script>
    <script src="{{asset('assets/vendors/custom/fullcalendar/fullcalendar.bundle.js')}}" type="text/javascript">
    </script>
    <script src="{{asset('assets/app/js/dashboard.js')}}" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="{{asset('assets_staff/vendors/base/vendors.bundle.js')}}" type="text/javascript"></script>
    <script src="{{asset('assets_staff/demo/default/base/scripts.bundle.js')}}" type="text/javascript"></script>
    <script src="{{asset('assets_staff/vendors/custom/fullcalendar/fullcalendar.bundle.js')}}" type="text/javascript">
    </script>
    <script src="{{asset('assets_staff/app/js/dashboard.js')}}" type="text/javascript"></script>
    <script src="{{asset('assets_staff/demo/default/custom/crud/wizard/wizard.js')}}" type="text/javascript"></script>
    <script src="{{asset('assets_staff/demo/default/custom/components/base/sweetalert2.js')}}" type="text/javascript">
    </script>
    <script>
    $(window).on('load', function() {
        $('body').removeClass('m-page--loading');
    });
    </script>
</body>

</html>