function toggleMode(){

    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")


    if (html.classList.contains('light')){

        img.setAttribute('src', './assets/avatar-light.png')
        
    } else {
        
        img.setAttribute('src', "https://avatars.githubusercontent.com/u/98500930?v=4")

    }





   
    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }

}