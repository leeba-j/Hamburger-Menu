const menuBtn = document.querySelector('.menu-wrap .hamburger');
document.querySelector('.menu-wrap .hamburger').addEventListener('click', opened);

let clicked = false;

function opened()
{
    if ( clicked === false)
        {
            menuBtn.classList.add('opened');
            clicked = true;
        }
    else
        {
            menuBtn.classList.remove('opened');
            clicked = false;
        }
}