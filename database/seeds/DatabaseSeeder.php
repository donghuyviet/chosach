<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
<<<<<<< HEAD
        $this->call(UserTableSeeder::class);
    }
}
class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('users')->insert([
            array('name' => 'admin', 'password'=> Hash::make(123123), 'email'=> 'quannguyen1456@gmail.com')
        ]);
=======
        Model::unguard();

        // $this->call('UserTableSeeder');

        Model::reguard();
>>>>>>> refs/remotes/origin/quannh
    }
}
