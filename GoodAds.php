<!DOCTYPE html>
<html>
<body>
<strong>
<?php
$ads = json_decode(file_get_contents("https://api.bnpo.xyz/ads/index.php"));
echo $ads;
?>
</strong>
</body>
</html>
