@extends('auth.master')
@section('content')
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
@endsection