function bd_theme() {

    var body_class = document.body.getAttribute('class')

    if (body_class === 'light-theme') {
        changeTheme('dark-theme')
    }

    if (body_class === 'dark-theme'){
        changeTheme('light-theme')

    }

    function changeTheme(vl) {


        document.querySelector('.theme-option').innerHTML = body_class
        document.body.setAttribute('class', vl)

    }

}

