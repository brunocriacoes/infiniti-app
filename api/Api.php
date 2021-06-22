<?php

class Api
{
    static function _licence($localizador)
    {
        $path = "https://licenca.infinitisistemas.com.br";
        $path .= "/localizaregistro.php";
        $path .= "?localizador={$localizador}";
        $response_string_json = file_get_contents($path);
        $response_string_json = utf8_decode($response_string_json);
        $response_string_json = str_replace('?', '', $response_string_json);
        $response = json_decode($response_string_json, true);
        $host = $response[0]['HOST_REMOTO'];
        $port = $response[0]['PORTA'];
        return "http://{$host}:{$port}";
    }
    static function _welcome()
    {
        $welcome_base64 = $_REQUEST['dwwelcomemessage'];
        $welcome_json_string = base64_decode($welcome_base64);
        $welcome = json_decode($welcome_json_string, true);
        return $welcome;
    }

    static function _catastrofico() {
        echo json_encode(["error" => [
            "code" => 500,
            "status" => false,
            "message" => "Error Catastrofico"
        ]]);
    }

    static function login_app($query_string)
    {
        $welcome = Api::_welcome();
        $localizador = $welcome['localizador'];
        $host = Api::_licence($localizador);
        try {
            echo file_get_contents("{$host}/adm/login?{$query_string}");
        } catch (\Throwable $th) {
            Api::_catastrofico();
        }
    }
    static function resumo_app($query_string)
    {
        $welcome = Api::_welcome();
        $localizador = $welcome['localizador'];
        $host = Api::_licence($localizador);
        try {
            echo file_get_contents("{$host}/adm/Ler_Resumo_Lav_Balcao?{$query_string}");
        } catch (\Throwable $th) {
            Api::_catastrofico();
        }
    }
}
