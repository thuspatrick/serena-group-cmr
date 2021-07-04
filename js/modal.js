function modal(openModalSelector, modalWrapperSelector, modalContentSelector, closeModal = false){
    const openModalBtn = document.querySelector(openModalSelector);
    const modalContent = document.querySelector(modalContentSelector);
    const modalWrapper = document.querySelector(modalWrapperSelector);
    
    openModalBtn.addEventListener('click', ()=>{
        modalWrapper.style.display = "block"
    })

    if(closeModal){
        modalContent.innerHTML += "<span class='close-modal'>X</span>";
        const closeModalBtn = modalWrapper.querySelector(".close-modal");
        closeModalBtn.addEventListener('click', ()=>{
            modalWrapper.style.display = "none";
            console.log("closing...")
        })
    }
    // closing Modal by clicking outside of it
    modalWrapper.addEventListener('click', (e)=>{
        if(e.target === modalWrapper){
            modalWrapper.style.display = "none";
        }
    })

}
