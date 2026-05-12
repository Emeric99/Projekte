function regFormHaendler(event) {
    event.preventDefault();

    let vorname      = document.getElementById('firstname').value;
    let nachname     = document.getElementById('lastname').value;
    let gbdate       = document.getElementById('gbdate').value;
    let benutzername = document.getElementById('username').value;
    let emailAd      = document.getElementById('email').value;
    let passwort     = document.getElementById('enterpass').value;
    let confirmPass  = document.getElementById('confirmpass').value;

    if (passwort !== confirmPass) {
        alert('Die Passwörter stimmen nicht überein.');
        return;
    }

    let queryString = 'vorname='      + encodeURIComponent(vorname)
        + '&nachname='     + encodeURIComponent(nachname)
        + '&gbdate='       + encodeURIComponent(gbdate)
        + '&benutzername=' + encodeURIComponent(benutzername)
        + '&emailAd='      + encodeURIComponent(emailAd)
        + '&passwort='     + encodeURIComponent(passwort);

    fetch('https://informatik.hs-bremerhaven.de/docker-swe2-2024-team17-web/cgi-bin/register.sh?' + queryString, {
        method: 'GET'
    })
    .then(function(response) {
        return response.text();
    })
    .then(function(result) {
        document.write(result);
    })
    .catch(function(error) {
        console.error('Registrierung fehlgeschlagen:', error);
        alert('Fehler bei der Registrierung. Bitte versuche es erneut.');
    });
}

function logHaendler(event) {
    event.preventDefault();

    let benutzername = document.getElementById('username').value;
    let passwort     = document.getElementById('enterpass').value;

    let queryString = 'benutzername=' + encodeURIComponent(benutzername)
        + '&passwort=' + encodeURIComponent(passwort);

    fetch('https://informatik.hs-bremerhaven.de/docker-swe2-2024-team17-web/cgi-bin/login.sh?' + queryString, {
        method: 'GET'
    })
    .then(function(response) {
        return response.text();
    })
    .then(function(result) {
        document.write(result);
    })
    .catch(function(error) {
        console.error('Login fehlgeschlagen:', error);
        alert('Fehler beim Login. Bitte versuche es erneut.');
    });
}

if (document.getElementById('registerFormular')) {
    document.getElementById('registerFormular').addEventListener('submit', regFormHaendler);
}

if (document.getElementById('loginFormular')) {
    document.getElementById('loginFormular').addEventListener('submit', logHaendler);
}
