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
                        <link href="{!! url('admin/bower_components/bootstrap/dist/css/bootstrap.min.css') !!}" rel="stylesheet">

                        <!-- MetisMenu CSS -->
                        <link href="{!! url('admin/bower_components/bootstrap/dist/css/bootstrap.min.css') !!}bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

                        <!-- Custom CSS -->
                        <link href="{!! url('admin/bower_components/bootstrap/dist/css/bootstrap.min.css') !!}dist/css/sb-admin-2.css" rel="stylesheet">

                        <!-- Custom Fonts -->
                        <link href="{!! url('admin/bower_components/bootstrap/dist/css/bootstrap.min.css') !!}bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

                    </head>

                    <body>

                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-lg-4 col-md-offset-4">
                                <div class="login-panel panel panel-default">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">Register</h3>
                                    </div>
                                    <div class="panel-body">
                                        <form method="POST" action="{{ url('auth/register') }}">
                                            {!! csrf_field() !!}
                                            <fieldset>
                                                <div class="form-group">Name
                                                    <input type="text" class="form-control" name="name" value="{{ old('name') }}">
                                                </div>
                                                <div class="form-group">Email
                                                    <input type="email"  class="form-control" name="email" value="{{ old('email') }}">
                                                </div>
                                                <div class="form-group">Password
                                                    <input type="password"  class="form-control" name="password">
                                                </div>
                                                <div class="form-group">Confirm Password
                                                    <input type="password"  class="form-control" name="password_confirmation">
                                                </div>
                                                <div>
                                                    <button type="submit">Register</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- jQuery -->
                    <script src="{!! url('admin/bower_components/jquery/dist/jquery.min.js') !!}"></script>

                    <!-- Bootstrap Core JavaScript -->
                    <script src="{!! url('admin/bower_components/bootstrap/dist/js/bootstrap.min.js') !!}"></script>

                    <!-- Metis Menu Plugin JavaScript -->
                    <script src="{!! url('admin/bower_components/metisMenu/dist/metisMenu.min.js') !!}"></script>

                    <!-- Custom Theme JavaScript -->
                    <script src="{!! url('admin/dist/js/sb-admin-2.js') !!}"></script>
                    </body>
</html>
