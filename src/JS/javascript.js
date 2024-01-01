menu = document.getElementById('dropdown-sort')
button = document.getElementById('btn')

function showList(){
    if(menu.style.display === 'none'){
        menu.style.display = 'flex'
    }else{
        menu.style.display = 'none'
    }
}