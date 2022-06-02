window.onload = () => {
  setTimeout(getData)
}
const productURL = 'https://dh.cubicle.53xapps.com/products';
const categoryURL ='https://dh.cubicle.53xapps.com/categories';
let src1 = []

let category = [];
async function getData(){
await axios.get(categoryURL).then((response)=>{
   category = response.data
})
render(category)

}





function render(list){
   const blocks = document.querySelector('.blocks');
  const fragment = document.createDocumentFragment();
  for(let prod of list){
      let html = ``
    if(prod.title =='Смартфоны'){
     
          html = `
          <div>
          <a href='smart.html'>
          <img src="https://st2.depositphotos.com/1001877/5759/i/600/depositphotos_57593913-stock-photo-mobile-phones-background-pile-of.jpg" class="card-img-top" alt="...">
          <div class="card-body">
          <p class="card-text">${prod.title}</p>
          </div>
          </div> `
    } 
    else if(prod.title =='Наутбуки'){
      html = `
      <div>
          <a href='nout.html'>
     <img src="https://27.img.avito.st/640x480/8773749827.jpg" class="card-img-top" alt="...">
     <div class="card-body">
     <p class="card-text">${prod.title}</p>
     </div>
     </div>`
    } else if(prod.title=='Телефизоры'){
      html = `
      <div>
          <a href='televizor.html'>
     <img src="https://www.expertcen.ru/uploads/article/rating/2017/10/979/500_a68efd5645057fdb72c26a34ed36de51.jpg" class="card-img-top" alt="...">
     <div class="card-body">
     <p class="card-text">${prod.title}</p>
     </div>
     </div>`
    } else if(prod.title =='Часы'){
      html = `
      <div>
          <a href='watch.html'>
     <img src="https://ixbt.online/live/images/original/01/86/22/2019/08/14/a2006a5faf.png?w=877" class="card-img-top" alt="...">
     <div class="card-body">
     <p class="card-text">${prod.title}</p>
     </div>
     </div>`
    }
          
          const block = document.createElement('div')
          block.className = 'placeholder-glow block shadow rounded text-center'
          block.innerHTML = ''
          blocks.appendChild(block)
      block.innerHTML = html
      fragment.appendChild(block)
      console.log(prod.title);
  }

  blocks.appendChild(fragment)
}