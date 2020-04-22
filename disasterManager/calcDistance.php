
<?php
$userLongitude=$_REQUEST["longitude"];
$userLatitude=$_REQUEST["latitude"];
$deviceLongitude=80.318948200;
$deviceLatitude=7.319409000;
echo distance($deviceLatitude,$deviceLongitude,$userLatitude,$userLongitude,'K');

function distance($lat1, $lon1, $lat2, $lon2, $unit) {
	if (($lat1 == $lat2) && ($lon1 == $lon2)) {
		return 0;
	}
	else {
		$radlat1 = pi() * $lat1/180;
		$radlat2 = pi() * $lat2/180;
		$theta = $lon1-$lon2;
		$radtheta = pi() * $theta/180;
		$dist = sin($radlat1) * sin($radlat2) + cos($radlat1) * cos($radlat2) * cos($radtheta);
		if ($dist > 1) {
			$dist = 1;
		}
		$dist = acos($dist);
		$dist = $dist * 180/pi();
		$dist = $dist * 60 * 1.1515;
		if ($unit=="K")  $dist = $dist * 1.609344 ;
		if ($unit=="N")  $dist = $dist * 0.8684 ;
		return $dist;
	}
}
// header("Location: ../"); /* Redirect browser */
// exit();
?>