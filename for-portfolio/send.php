<!DOCTYPE html>
<html>
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style>
    body {
    background: url(../img/fon.png) repeat;
}
   h1 { 
    font-size: 120%; 
    font-family: Verdana, Arial, Helvetica, sans-serif; 
    color: #333366; 
    width: 50%;
    margin: 50px auto;
   }
   .div-btn {  
    width: 50%;
    margin: 50px auto;
    padding-left: 30%;
   }
   .btn {
    background: #d16258;
    color: #fff;
    border: 2px solid #d16258;
    padding: 13px 30px;
    border-radius: 5px;
    text-decoration: none;
   }
   .btn:hover {
    background: #D1620E;
   }
  </style>
</head>
<body>

<?php

//Если была нажата кнопка ОК,
//то отправляем письмо и информируем об этом пользователя
if (isset($_POST['okbutton']))
{
  if ($_POST['person']=='' or $_POST['email']=='' or
 $_POST['question']=='')
  {
    echo "<font color='red'>Вы ввели не все данные</font>";
    echo "<br><a href=backform.php>Назад</a>";
    exit;
  }
 
    //Куда будет отправлено письмо
    $komu="sharnirio@mail.ru";
    //Тема письма
    $tema="Вопрос от ".$_POST['person']."".$_POST['e-mail'];
    //Само письмо
    $text_pisma=$_POST['question'];
 
    //Отправляем письмо
    mail($komu,$tema,$text_pisma);
 echo "<h1>Ваше сообщение успешно отправленно!</h1>";
  
    echo "<div class='div-btn'><a class='btn' href=http://my-resume.esy.es/>Exit</a></div>";
    //Выполнять больше нечего, выходим из программы
    exit;
}
?>

</body>
</html>

 