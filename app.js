const img = document.querySelector('img');
const section = document.querySelector('section');


img.addEventListener('dragstart',(event) =>
{
    event.dataTransfer.setData('text/plain','img');;
    event.dataTransfer.effectAllowed='move';
    // event.target.closest('div');
    setTimeout(() =>{event.target.style.display='none'},0) // by using this after catching the img we are going to remove it from before it was!
});

img.addEventListener('dragend',(event) =>
{
    // event.target.append(img);
    event.target.style.display='block';
});


section.addEventListener('dragenter',(event) =>
{
    if(event.dataTransfer.types[0] === 'text/plain')
    {
        event.preventDefault();
        if(event.target.tagName=='DIV')
        {
            event.target.classList.add('droppable');
        }
    }
});

section.addEventListener('dragover',(event) =>
{
    if(event.dataTransfer.types[0] === 'text/plain')
    {
        event.preventDefault();
        if(event.target.tagName=='DIV')
        {
            event.target.classList.add('droppable');
        }
    }
});

section.addEventListener('dragleave',(event) =>
{
    if(event.target.tagName=='DIV')
    {
        event.target.classList.remove('droppable');
    }  
})


section.addEventListener('drop',event =>
{
    if(event.target.tagName=='DIV')
    {
        event.target.append(img);
        event.target.classList.remove('droppable');
    }  
})