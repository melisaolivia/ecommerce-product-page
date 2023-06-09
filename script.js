
// List BUTTON

/* #menu-btn | to show navbar
 #preview-cart-btn | the cart icon/button on the navbar, to preview the item and price that we add to the card. When we clicked, there's a basket filled appear

 #previous-btn | on mobile screen - we use that to slide an image, (DONE)

 #next-btn | on mobile screen - we use that to slide an image,(DONE)

 #minus-btn | to set how many item we want to add to cart (DONE)
 
 #plus-btn | to set how many item we want to add to cart (DONE)

 #add-cart-btn | to add the item that we already set to the cart, and will be displayed, if we clicked on (DONE)
 
 #preview-cart-btn | DONE

 LIST FEATURE  THAT NEED TO DO 
 - Lightbox 
 - Menu Navbar
 - Active States
 - Design Checkout Page (?)
 - Make some animation, Like opening cart, etc
 - Make Loading animation when opening 
 */

document.addEventListener("DOMContentLoaded", function (event) {
const fallLimitedSneaker = 
   [{
    "name" : "sneaker1",
    "type" : "img-1", //The radio button ID
    "src" : "images/image-product-1.jpg"
    },
    {
    "name" : "sneaker2",
    "type" : "img-2", //The radio button ID
    "src" : "images/image-product-2.jpg"
    },
    {
    "name" : "sneaker3",
    "type" : "img-3", //The radio button ID
    "src" : "images/image-product-3.jpg"
    },
    {
    "name" : "sneaker4",
    "type" : "img-4", //The radio button ID
    "src" : "images/image-product-4.jpg"
    }
];

fallLimitedSneaker.forEach(item => {
  // for web
  const imageShow = document.getElementById("image-show");
  const radioBtnElement = document.getElementById(`${item.type}`);
  radioBtnElement.addEventListener("click",function(){
    imageShow.style.backgroundImage = `url('${item.src}')`;
  })
  //for mobile
  let currentIndex = 0;
  function showImage(index) {
    const { src } = fallLimitedSneaker[index];
    imageShow.style.backgroundImage = `url(${src})`;
  }
  const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click",function nextImage() {
      if (currentIndex === fallLimitedSneaker.length - 1){
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      showImage(currentIndex);
    }  
  )
  const previousBtn = document.getElementById("previous-btn");
  previousBtn.addEventListener("click", function previousImage() {
      if (currentIndex === 0) {
        currentIndex = fallLimitedSneaker.length - 1;
      } else {
        currentIndex--;
      }
      showImage(currentIndex);
    }
  )
})

  // to edit how much item i want to add the cart
  const totalItem = document.querySelector(".total-item");
  let count = 0;
  totalItem.textContent = count;
  // add amount
  const plusBtn = document.getElementById("plus-btn")
  plusBtn.addEventListener("click",()=>{
    count++;
    totalItem.textContent = count;
  })
  // subtrack amount
  const minusBtn = document.getElementById("minus-btn");
  minusBtn.addEventListener("click", ()=>{
    if(totalItem.textContent < 1){
      return false
    } else{
        count--;
    totalItem.textContent = count;
    }
  })

  // the price before get discount and adding the currency
  const normalPriceCurrency = 250;
  const normalPrice = normalPriceCurrency.toLocaleString('en-US', { style: 'currency', currency: 'USD' }); //$250.00
  const normalPriceElement = document.getElementById("normal-price");
  normalPriceElement.textContent = normalPrice;

  //discount product
  const discountElement = document.querySelector(".discount p");
  const discount = document.createElement("div");
  const discountSymbol = document.createElement("span");
  const discountPrice = 50;
  
  discountSymbol.textContent = "%";
  discount.appendChild(document.createTextNode(discountPrice));
  discount.appendChild(discountSymbol);
  discountElement.appendChild(discount);
  
  // function discount 
  function afterDiscount(normalPriceCurrency,discountPrice){
    const discountAmount = (discountPrice / 100) * normalPriceCurrency;
    const discountedPrice = normalPriceCurrency - discountAmount;
    return discountedPrice;
  }
  
  // after discount
  const productPriceElement = document.getElementById("product-price");
    //please targetin the variable that has integer datatype
  const productPrice = afterDiscount(normalPriceCurrency,discountPrice);//150
  const productPriceCurrency = productPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  productPriceElement.append(productPriceCurrency);

  const titleProductElement = document.getElementById("product-title");
  const titleProduct = "Fall Limited Edition Sneakers";
  titleProductElement.textContent = titleProduct;

  //cart container display when be clicked
  const previewCartBtn = document.getElementById('preview-cart-btn');
  const cartContainer = document.querySelector(".cart-container");
  function openCart(){
    const show = ["hidden","block","transition-all","duration-300", "ease-out"];
    for (let i = 0; i < show.length; i++) {
      cartContainer.classList.toggle(show[i]);       
    }
  }
  previewCartBtn.addEventListener("change",function(){
    if (this.checked){
      openCart();
    } else {
      openCart();
    }
  })

  // preview the total item that i adding to cart
  if (cartContainer.children.length < 1) {
    cartContainer.style.height = 'auto';
    } else {
      cartContainer.style.height = '45%';
    }

  const checkoutBtn = document.getElementById("checkout-btn");
  const addCartBtn = document.getElementById("add-cart-btn");
  const NumberItemCart = document.querySelector(".item-cart");
  const cartContainerElement = document.getElementById("product-added-cart");

  // const cartContent = document.createElement("div");
  // cartContent.classList.add("cart-content");
  // cartContainerElement.appendChild(cartContent);

  const emptyNotify = document.querySelector(".empty-notify");
    
  addCartBtn.addEventListener("click", function(){
      let cartContent = document.querySelector(".cart-content");
      if(count < 1){
            return false
          }else{
            NumberItemCart.textContent = count;
          }
    if(!cartContent){
      checkoutBtn.style.display = "block";
      let cartContent = document.createElement("div");
      cartContent.classList.add("cart-content");
       
      emptyNotify.style.display = "none";   
      
      // notif count
      
        //product
        const shoesImage = document.createElement('img');
        shoesImage.classList.add("shoes-image")
        const shoes = 'images/image-product-1.jpg';
        shoesImage.src = shoes;
        cartContent.appendChild(shoesImage);

        //text section
        const textSectionCart = document.createElement("div");
        textSectionCart.classList.add("text-section-cart");
        cartContent.appendChild(textSectionCart);
        
          //title append
          const titleProductCartElement = document.createElement("p");
          titleProductCartElement.textContent = titleProduct;
          textSectionCart.appendChild(titleProductCartElement);

          //priceAmountSection
          const priceAmountSection = document.createElement("div");
          priceAmountSection.classList.add("price-amount-section");
          textSectionCart.appendChild(priceAmountSection);

            //price
            const productPriceOnCartElement = document.createElement("p");
            productPriceOnCartElement.classList.add("product-price-on-cart");
            productPriceOnCartElement.textContent = productPriceCurrency;
            priceAmountSection.appendChild(productPriceOnCartElement);

            //multiply simbol
            const multipleSymbolElement = document.createElement("span");
            multipleSymbolElement.classList.add("multiple-symbol");
            multipleSymbolElement.textContent = "x"; 
            priceAmountSection.appendChild(multipleSymbolElement);

            //amount
            const amountProductElement = document.createElement("p");
            amountProductElement.classList.add("amount-product");
            amountProductElement.textContent = count;
            priceAmountSection.appendChild(amountProductElement);

            //result of calculation 
            function CalculatingTotalPrice(productPrice,count){
              const total = productPrice * count;
              return '$' + total.toFixed(2);
            }

            const totalPriceElement = document.createElement("p");
            totalPriceElement.classList.add("total-price");
            const totalPrice = CalculatingTotalPrice(productPrice,count);
            totalPriceElement.append(totalPrice);
            priceAmountSection.appendChild(totalPriceElement);
        
        //delete button    
        const removeBtn = document.createElement("button");
        const removeIcon = document.createElement('img');
        removeIcon.src = 'images/icon-delete.svg';
        removeBtn.append(removeIcon);
        cartContent.appendChild(removeBtn);      
            
        removeBtn.addEventListener("click", function() {
          // Remove the cart item container from the DOM
          cartContainerElement.removeChild(cartContent);
          //remove the icon of the count cart too
          NumberItemCart.textContent = "";
          emptyNotify.style.display = "block";
          checkoutBtn.style.display = "none";
        })
        cartContainerElement.appendChild(cartContent);
    }
  }) 
 

  /*

  */ 







})