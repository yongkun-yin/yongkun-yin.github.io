window.addEventListener('load',function(){
    let btn = document.querySelector('.btn');
    let navigation = document.querySelector('.navigation');
    const bodyElement = document.body;
    let flag = 1;
    btn.addEventListener('click',function(){
        if(flag){
            navigation.style = 'left:0rem'
            flag = 0;
        }else{
            navigation.style = 'width: 13rem;'
            flag = 1;
        }
    })
})