
<?php
	//snippet for adding user data in MODX
	
	$profile = array();
	$profile = $modx->user->getOne('Profile');
	if($profile){
    $modx->setPlaceholders(array(
   		'contact_name' => ['fullname'],
   		'contact_email' => $profile['email'],
   		'contact_phone'=>$profile['phone']
	),'my.');
	}  
?>