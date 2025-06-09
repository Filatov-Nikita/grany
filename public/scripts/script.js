Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (e) { for (var t = this; t;) { if (t.matches(e)) return t; t = t.parentElement } return null });
var ct_get_val = function (form, selector) { if (!!form.querySelector(selector)) { return form.querySelector(selector).value; } else { return ''; } }
document.addEventListener('click', function (e) {
    var t_el = e.target;
    if (t_el.closest('form [type="submit"]')) {
        try {
            var form = t_el.closest('form');
            var fio = ct_get_val(form, 'input#name');
            var phoneNumber = ct_get_val(form, 'input#cellphone');

            var subject = 'Заявка с ' + location.hostname;
            var site_id = '73357';
            var ct_data = {
                fio: fio,
                phoneNumber: phoneNumber,
                subject: subject,
                requestUrl: location.href,
                sessionId: window.ct?.('calltracking_params', 'yveh9kp7')?.sessionId
            };
            var post_data = Object.keys(ct_data).reduce(function (a, k) { if (!!ct_data[k]) { a.push(k + '=' + encodeURIComponent(ct_data[k])); } return a }, []).join('&');

            var CT_URL = 'https://api.calltouch.ru/calls-service/RestAPI/requests/' + site_id + '/register/';
            if (!!fio && !!phoneNumber && !window.ct_snd_flag) {
                window.ct_snd_flag = 1; setTimeout(function () { window.ct_snd_flag = 0; }, 20000);
                var request = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
                request.open("POST", CT_URL, true); request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                request.send(post_data);
            }
        } catch (e) { console.log(e); }
    }
});
