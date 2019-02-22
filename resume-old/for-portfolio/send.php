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
 // echo "<h1>Ваше сообщение успешно отправленно!</h1>";
  
 //    echo "<div class='div-btn'><a class='btn' href=http://my-resume.esy.es/>Exit</a></div>";
 //    //Выполнять больше нечего, выходим из программы
 //    exit;
    header('Location: http://my-resume.esy.es/for-portfolio/');
exit;

} 
?>


 
