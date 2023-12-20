
let linkedin = document.querySelector('div#linkedin')
linkedin.addEventListener('click', ()=>redirect('linkedin'))

let insta = document.querySelector('div#instagram')
insta.addEventListener('click', ()=>redirect('instagram'))

let git = document.querySelector('div#github')
git.addEventListener('click', ()=>redirect('github'))

let email = document.querySelector('div#email')
email.addEventListener('click', ()=>copiar('email'))

let tel = document.querySelector('div#telefone')
tel.addEventListener('click', copiar)

function redirect(link){

    switch(link){

        case 'linkedin':
            location.href = 'https://www.linkedin.com/in/rafael-lopes-0b9822218/'
            break

        case 'instagram':
            location.href = 'https://www.instagram.com/raffa_ens'
            break

        case 'github':
            location.href = 'https://www.github.com/rafakimanja'
            break
    }
}

function copiar(campo){

    if(campo == 'email'){
        navigator.clipboard.writeText('rafaellopes.ifrs@gmail.com').then(() => {
            alert('Email copiado para a área de transferência')
        })
    }else{
        navigator.clipboard.writeText('(51) 993473445').then(() => {
            alert('Numero de telefone copiado para a área de transferência')
        })
    }

}