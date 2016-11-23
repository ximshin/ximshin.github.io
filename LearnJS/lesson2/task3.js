/**
 * Created by Maksim on 20.10.2016.
 */
var userName = prompt( 'Введите логин', 'логин' );
if (userName == 'admin') {
   var userPass = prompt( 'Введите пароль' ); {
        if (userPass == 'passw0rd') {
            alert( 'Заходи' );
        } else if (userPass == null) {
            alert( 'Ахрана, атмена!' );
        } else {
            alert( 'Неверный пароль' );
        }
    }
} else if (userName == null) {
    alert( 'Canceled' );
} else {
    alert( 'Access denied' );
}
