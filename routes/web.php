<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Http\Request;

Route::get('/signin_with_doctorbattles', function () {
    $query = http_build_query([
        'scope' => '',
        'client_id' => 16, // Replace with Client ID
        'redirect_uri' => 'https://metrotech.gg/callback',
        'response_type' => 'code',
    ]);
    return redirect('https://doctorbattles.com/oauth/authorize?'.$query);
});

Route::get('/test',function(Request $request){
    $token = session()->get('token.access_token');
});

Route::get('/api/token',function(Request $request){
    $token = session()->get('token.access_token');
    return response()->json(['token' => $token],200);
});
Route::get('/api/load_auth',function(Request $request){
    $user = null;
    if (auth()->check()){
        $user = auth()->user();
    }
    return response()->json(['user' => $user],200);
});

Route::get('/callback', function (Request $request) {
    $response = (new GuzzleHttp\Client)->post('https://doctorbattles.com/oauth/token', [
        'form_params' => [
            'grant_type' => 'authorization_code',
            'client_id' => 16, // Replace with Client ID
            'client_secret' => 'VqhL4Iqg0kUJZsq8tZBfhloEmOwZHljptjzDO3pa', // Replace with client secret
            'scope' => '',
            'redirect_uri' => 'https://metrotech.gg/callback',
            'code' => $request->code,
        ]
    ]);

    session()->put('token', json_decode((string) $response->getBody(), true));
    return redirect('/home');
});
Route::post('/api/register_metro',function(Request $request){
    $requestData = $request->all();
    \App\User::updateOrCreate([
        'email' => $requestData['email']
    ],[
        'name' => $requestData['user_name'],
        'first_name' => $requestData['first_name'],
        'last_name' => $requestData['last_name'],
        'school' => $requestData['school'],
        'grade' => $requestData['grade'] ? $requestData['grade'] : '',
        'organization' => $requestData['organization'] ? $requestData['organization'] : '',
        'xbox' => $requestData['xbox'],
        'd_o_b' => $requestData['d_o_b'],
        'password' => $requestData['password'],
        'parent_full_name' => $requestData['parent_full_name'],
        'parent_email' => $requestData['parent_email'],
    ]);
    return response()->json(['status' => 'OK'],200);
});
Route::post('/contactus', 'ContactUsController@contactUSPost');
Route::post('/subscribe', 'ContactUsController@subscribePost');

Route::get('/', 'BaseController@index');
Route::get('/home', 'BaseController@index');
Route::get('/compete/leagues/nflflag', function(Request $request){
    return redirect('/nfl_flag');
});
Route::get('/{any}', 'BaseController@index')->where('any', '.*');

