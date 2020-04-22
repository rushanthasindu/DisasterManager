
<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods:  POST, GET');
header("Content-Type: application/json");

$userLongitude=$_REQUEST["longitude"];
$userLatitude=$_REQUEST["latitude"];

include "config.php";

$minDeviceID='';

$minDistance=10000000000000000000;

$sql = "SELECT * FROM `device` order by `id`";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $deviceLongitude=$row["longitude"];
        $deviceLatitude=$row["latitude"];

        $distance=distance($deviceLatitude,$deviceLongitude,$userLatitude,$userLongitude,'K');
        $deviceID=$row["deviceId"];
        if ($distance<$minDistance) {
            $minDistance=$distance;         
            $minDeviceID=$row["deviceId"];
        }


    }
} else {
    
}
$sql = "SELECT * FROM `deviceInfo` WHERE deviceId like '$deviceID'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $uniId = $conn->insert_id;
        $myObj=new \stdClass();
        $myObj->success =true;
        $myObj->temp =$row["temp"];
        $myObj->hum =$row["hum"];
        $myObj->waterLevel =$row["distance"];
        $myObj->distance =$minDistance;
        $myObj->lastUpdated =$row["lastUpdated"];
        

        $myJSON = json_encode($myObj);
        echo $myJSON;

    }
} else {
    
}



$conn->close();


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
?>