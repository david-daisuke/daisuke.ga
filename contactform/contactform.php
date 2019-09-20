<?php
mb_language("Japanese");
mb_internal_encoding("UTF-8");

$to = $_POST['name'];
$title = $_POST['email'];
$content = $_POST['message'];

if(mb_send_mail($to, $title, $content)){
echo "メールを送信しました";
} else {
echo "メールの送信に失敗しました";
}
?>
