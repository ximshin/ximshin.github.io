/*
 * Created by Maksim on 22.10.2016.
 */
/*var name = prompt( 'Ваш логин', 'admin' );
var text = (name == 'admin') ? 'Hi' :
    (name == 'manager') ? 'Hello' :
        (name == '') ? 'введите ченить' : 'такой должности нет';
alert(text);
*/
/*
var browser = prompt('Ваш браузер', 'браузер');
if (browser == 'IE') {
    alert('О, да у вас IE!');
}
else if (browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera') {
    alert('Браузер норм!');
}
else {
    alert('Кто здесь ?');
}
*/
function min(a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}

console.log(min(-10, -7));