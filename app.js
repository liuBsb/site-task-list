'use strict'
    const switcher = document.querySelector('.btn')

    switcher.addEventListener('click', function(){
        document.body.classList.toggle('dark-theme')
        var class_name = document.body.className
        console.log(class_name)
        if (class_name == 'light-theme') {
            this.textContent = 'Dark'
        }else this.textContent = 'Light'
    })


