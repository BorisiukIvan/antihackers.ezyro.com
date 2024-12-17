<?php
    $list1 = [];
    $list2 = [];
    $pl = explode("\n", file_get_contents('mathplayers'));
    for ($i = 0; $i < count($pl); $i++) {
        if (!$pl[$i]) continue;
        $fposts = file_get_contents("@/" . $pl[$i] . "/rating");
        $list1[] = $pl[$i];
        $list2[] = $fposts;
    }
    array_multisort($list2, SORT_DESC, $list1);
    $towrite = '';
    for ($i = 0; $i < 10; $i++) {
        $towrite = $towrite . '<tr><td>' . $list1[$i] . '</td><td style="text-align: right">' . $list2[$i] . '</td></tr>';
    }
   
?>
<br><br>
<table style='width: 100%'>
<tr>
<td>
<section style='border-color: black; border-width: 1px; border-style: solid; padding: 5px'>
<div style='text-align: center;'><b>The Strongest Players</b></div>
<hr>
<table width='100%'>
<?=$towrite?>
</table>
<hr>
<div style='text-align: center;'>Total <i><?=count(explode("\n", file_get_contents('members_list')))?></i> players registered on the site. The numbers on the right are the rating of the players. <a href='/math.php'>Read more..</a></div>
</section>
</td>
</tr>
</table>