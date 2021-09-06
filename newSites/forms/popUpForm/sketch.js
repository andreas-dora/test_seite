function init(){
    const modalBox = document.getElementById('modalBox');
    const newForm = document.getElementById('newForm');
    const tForm = document.getElementById('toDo__Form');
    const tTitle = document.getElementById('todo__title');
    const tContent = document.getElementById('todo__content');
    const tSave = document.getElementById('save');
    tForm.addEventListener('submit', onSubmit);
    tSave.addEventListener('click', sendTData);
    newForm.addEventListener('click', openForm);
    document.getElementById('closeBtn').addEventListener('click', () =>{
        modalBox.style.display = 'none';

    });

    function openForm(){
        modalBox.style.display = 'flex';
    }

    function onSubmit(e){
        e.preventDefault();
}
    function sendTData(){
        console.log('from sendData');
        const tData = {
            title: tTitle.value,
            content: tContent.value
         }; 
         console.log(tData);
         google.script.run.notizEintragen(tData);    
    }
}



document.addEventListener('DOMContentLoaded', init);
