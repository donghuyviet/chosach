@extends('auth.master')
@section('content')
                    <form method="POST" action="{{ url('/auth/login') }}">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}"/>
                        <fieldset>
                            <div class="form-group">
                                Email
                                <input type="email" class="form-control" name="email" value="{{ old('email') }}">
                            </div>

                            <div class="form-group">
                                Password
                                <input type="password" class="form-control" name="password" id="password">
                            </div>

                            <div>
                                <input type="checkbox" name="remember"> Remember Me
                            </div>

                            <div>
                                <button type="submit" class="btn btn-lg btn-success btn-block">Login</button>
                            </div>
                        </fieldset>
                    </form>
 @endsection