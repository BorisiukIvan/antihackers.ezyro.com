<?php
    if (($_SERVER['REQUEST_METHOD'] == "POST") && (file_exists('SERVER_SECRET_DATA/LOGPASS/' . $_COOKIE['account']))) {
        file_put_contents('inbox/AAunreadInbox_' . explode('-', $_COOKIE['account'])[0] . '_707070', '');
    } else {
        http_response_code('400');
        exit;
    };
    header("Location: /inbox/?reload=1");
    http_response_code('301');
?>