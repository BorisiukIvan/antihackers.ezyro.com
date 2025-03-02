<?php
    exit;
    $i = 62;
    while ($i > 0) {
        $i = $i - 1;
        if (!file_exists($i.'POSTS')) continue;
        unlink($i."INFO");
        unlink($i."lastPost");
        unlink($i."numberPosts");
        unlink($i."creationDate");
        echo($i);
    }

?>