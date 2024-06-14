let num = 0
let _inp = document.querySelectorAll('input')
let _category2 = ''
let _category3 = ''
let _product = ''



window.addEventListener('scroll',()=>{ 
    let _scrollTop = window.scrollY
    let _maxScrollTop = document.getElementById('test').offsetTop
    if(_scrollTop+500 > _maxScrollTop){
        myApi()
    }
})

function myApi() {   
      fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(_store =>{    
        if(num<20){         
        num++        
        for (let i = (num - 1 ); i < num; i++) {
            let _div = document.createElement('div')
            document.getElementById('box').appendChild(_div)
            document.getElementById('box').appendChild(_div)
            _div.innerHTML = `
            <figure>
                <img src=${_store[i].image} alt="" />
                    <figcaption>
                        <h5>title: ${_store[i].title}</h5>
                        <p>category:${_store[i].category} </p>
                        <p>price:${_store[i].price} </p>                        
                    </figcaption>
            </figure>
          ` 
        _div.setAttribute('data-h',_store[i].category)  
        _div.setAttribute('data-h2','all')      
        console.log(num,i);
        }
    }
    })
    _product =  document.querySelectorAll('#box>div')
    
}



