<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Nguyễn Hồng Quân">

    <title>Admin - Khoa Phạm</title>

    <!-- Bootstrap Core CSS -->
<<<<<<< HEAD
    <link href="{!! url('public/admin/bower_components/bootstrap/dist/css/bootstrap.min.css') !!}" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="{!! url('public/admin/bower_components/bootstrap/dist/css/bootstrap.min.css') !!}bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="{!! url('public/admin/bower_components/bootstrap/dist/css/bootstrap.min.css') !!}dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="{!! url('public/admin/bower_components/bootstrap/dist/css/bootstrap.min.css') !!}bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
=======
    <link href="{!! url('admin/bower_components/bootstrap/dist/css/bootstrap.min.css') !!}" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="{!! url('admin/bower_components/bootstrap/dist/css/bootstrap.min.css') !!}bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="{!! url('admin/bower_components/bootstrap/dist/css/bootstrap.min.css') !!}dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="{!! url('admin/bower_components/bootstrap/dist/css/bootstrap.min.css') !!}bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
>>>>>>> refs/remotes/origin/quannh

</head>

<body>

<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <div class="login-panel panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Please Log In</h3>
                </div>
                <div class="panel-body">
<<<<<<< HEAD
                    <form role="form" action="" method="POST">
=======
                    @if(count($errors) > 0)
                        <div class="alert alert-danger">
                            <ul>
                                @foreach($errors->all() as $error)
                                    <li>{!! $error !!}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif
                    @if(Session::has('flash_message'))
                        <div class="alert alert-{{ Session::get('flash_level')}}">{{ Session::get('flash_message') }}</div>
                    @endif
                    <form role="form" action="" method="POST">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}"
>>>>>>> refs/remotes/origin/quannh
                        <fieldset>
                            <div class="form-group">
                                <input class="form-control" placeholder="E-mail" name="email" type="email" autofocus>
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="Password" name="password" type="password" value="">
                            </div>
                            <button type="submit" class="btn btn-lg btn-success btn-block">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- jQuery -->
<<<<<<< HEAD
<script src="{!! url('public/admin/bower_components/jquery/dist/jquery.min.js') !!}"></script>

<!-- Bootstrap Core JavaScript -->
<script src="{!! url('public/admin/bower_components/bootstrap/dist/js/bootstrap.min.js') !!}"></script>

<!-- Metis Menu Plugin JavaScript -->
<script src="{!! url('public/admin/bower_components/metisMenu/dist/metisMenu.min.js') !!}"></script>

<!-- Custom Theme JavaScript -->
<script src="{!! url('public/admin/dist/js/sb-admin-2.js') !!}"></script>
=======
<script src="{!! url('admin/bower_components/jquery/dist/jquery.min.js') !!}"></script>

<!-- Bootstrap Core JavaScript -->
<script src="{!! url('admin/bower_components/bootstrap/dist/js/bootstrap.min.js') !!}"></script>

<!-- Metis Menu Plugin JavaScript -->
<script src="{!! url('admin/bower_components/metisMenu/dist/metisMenu.min.js') !!}"></script>

<!-- Custom Theme JavaScript -->
<script src="{!! url('admin/dist/js/sb-admin-2.js') !!}"></script>
>>>>>>> refs/remotes/origin/quannh

</body>

</html>
