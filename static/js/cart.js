var updateBtn = document.getElementsByClassName('update-cart')

for(i=0; i < updateBtn.length; i++){
    updateBtn[i].addEventListener('click', function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:', productId, 'Action:', action)

        console.log('USER:', user)
        if(user === 'AnonymousUser'){
            console.log('Not logged in')
        }else{
            console.log('User is logged in, sending data..')
        }

    })
}


function updateUserOrder(productId, action){
    // 16:24
}