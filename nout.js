import{render} from'./smart.js';
import{setAt} from'./smart.js';
import{checkard} from'./smart.js';
import{showMiniCart} from'./smart.js'

window.onload = () => {
    
    getData();
    setAt()
    checkard();
    showMiniCart()
}

const productURL = 'https://dh.cubicle.53xapps.com/products';
let product = [];
 async function getData(){
 await axios.get(productURL).then((response)=>{
     let products =[]
     products = response.data
     product = products.filter(item => item.category == 2)
   
     render(product)
    })
 
}