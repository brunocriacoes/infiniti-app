<?php

header('Content-Type: text/html; charset=utf-8');
header('Access-Control-Allow-Origin: *');

include __DIR__ . '/Api.php';

function router( $path, $action_hook ) {
    $corruente_uri = $_SERVER['REQUEST_URI'];
    $corruente_path = parse_url($corruente_uri, PHP_URL_PATH);
    $corruente_quary = parse_url($corruente_uri, PHP_URL_QUERY);
    if( $corruente_path == $path ) {
        $explode_method_instace = explode( '@', $action_hook );
        call_user_func( $explode_method_instace, urldecode( $corruente_quary ) );
        return;
    }
}


router('/api/login', 'Api@login_app' );
router('/api/resumo', 'Api@resumo_app' );