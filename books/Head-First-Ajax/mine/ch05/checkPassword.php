<?php

sleep(2);

if (strlen($_REQUEST['password']) >= 6) {
	echo "okay";
} else {
	echo "denied";
}
