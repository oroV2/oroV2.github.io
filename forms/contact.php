<?php
  /**
  * Requires the "PHP Email Form" library
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  $contact->recaptcha_secret_key = '6LeA6cAZAAAAAJ9EnTwlrxLAeY2fZgUykvS47IOy';
  $receiving_email_address = '6661466c2a-dc7093@inbox.mailtrap.io';

  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }
  
  $host ='smtp.mailtrap.io';
  $port = '2525';
  $username = '7321912793b3b2';
  $password = '6df45859cffd90';

  $contact = new PHP_Email_Form;
  $contact->ajax = true;
  
  $contact->to = $receiving_email_address;
  $contact->from_name = $_POST['name'];
  $contact->from_email = $_POST['email'];
  $contact->subject = $_POST['subject'];

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
 
  $contact->smtp = Mail::factory ('smtp',array(
    'host' => $host,
    'username' => $username,
    'password' => $password,
    'port' => $port,
    'auth' => true
  ));


  $contact->add_message( $_POST['name'], 'From');
  $contact->add_message( $_POST['email'], 'Email');
  $contact->add_message( $_POST['message'], 'Message', 10);
  
  $contact->cc = array('6661466c2a-dc7093@inbox.mailtrap.io');

  echo $contact->send();
?>
