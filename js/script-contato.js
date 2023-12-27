
let linkedin = document.querySelector('div#linkedin')
linkedin.addEventListener('click', ()=>redirect('linkedin'))

let insta = document.querySelector('div#instagram')
insta.addEventListener('click', ()=>redirect('instagram'))

let git = document.querySelector('div#github')
git.addEventListener('click', ()=>redirect('github'))

let email = document.querySelector('div#email')
email.addEventListener('click', copiar)

let tel = document.querySelector('div#telefone')
tel.addEventListener('click', ()=>redirect('whatss'))

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

        case 'whatss':
            location.href = 'https://wa.me/5551993473445'
    }
}

function copiar(){
    navigator.clipboard.writeText('rafaellopes.ifrs@gmail.com').then(() => {
        alert('Email copiado para a área de transferência')
    })
}