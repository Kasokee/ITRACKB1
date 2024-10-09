let searchForm = document.querySelector('.search-form');

// =============== IF CLICK SEARCH BUTTON ===============

document.querySelector('#search-btn').onclick = () =>{
	searchForm.classList.toggle('active');
	signInForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	navbar.classList.remove('active');
}

// =============== IF CLICK CART BUTTON ===============

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
	shoppingCart.classList.toggle('active');
	signInForm.classList.remove('active');
	searchForm.classList.remove('active');
	navbar.classList.remove('active');
}

let signInForm = document.querySelector('.form');

document.querySelector('#login-btn').onclick = () =>{
	signInForm.classList.toggle('active');
	shoppingCart.classList.remove('active');
	searchForm.classList.remove('active');
	navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
	navbar.classList.toggle('active');
	signInForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	searchForm.classList.remove('active');
}

// =============== LOGIN POPUP ===============

document.querySelector("#show-login").addEventListener("click",function(){
	document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
	document.querySelector(".popup").classList.remove("active");
});


// =============== SIGNUP POPUP ===============

document.querySelector('#show-signup').addEventListener("click",function() {
	document.querySelector(".popup2").classList.add("active");
});

document.querySelector(".popup2 .close-btn").addEventListener("click",function(){
	document.querySelector(".popup2").classList.remove("active");
});

window.onscroll = () =>{
	signInForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	searchForm.classList.remove('active');
	navbar.classList.remove('active');
}

let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

document.getElementById('carousel_button--next').addEventListener("click",function(){moveToNextSlide();});

document.getElementById('carousel_button--prev').addEventListener("click",function(){moveToPrevSlide();});

function updateSlidePosition(){
	for(let slide of slides){
		slide.classList.remove('carousel_item--visible');
		slide.classList.add('carousel_item--hidden');
	}
	slides[slidePosition].classList.add('carousel_item--visible');
}

function moveToNextSlide(){
	if(slidePosition === totalSlides-1){
		slidePosition = 0;
	}else{
		slidePosition++;
	}
	updateSlidePosition();

}
function moveToPrevSlide(){
	
	if(slidePosition === 0){
		slidePosition = totalSlides - 1;
	}else{
		slidePosition--;
	}
	updateSlidePosition();
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".recipes-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

// ADD TO CART

document.addEventListener("DOMContentLoaded", function() {
	const addToCartButtons = document.querySelectorAll('.add-to-cart');

	addToCartButtons.forEach(button => {
		button.addEventListener('click', function() {
			const productBox = button.closest('.container');
			const productName = productBox.querySelector('.product-name').innerText;
			const productPrice = productBox.querySelector('.product-price').innerText;
			const productImage = productBox.querySelector('.product-image').src;

			const shoppingCart = document.querySelector('.shopping-cart');

			const cartItem = document.createElement('div');
			cartItem.classList.add('box');
			cartItem.innerHTML = `
				<i class="fas fa-trash"></i>
				<img src="${productImage}">
				<div class="content">
					<h3>${productName}</h3>
					<span class="items">items : 1 </span>
					<span class="price">${productPrice}</span>
				</div>
			`;
			
			shoppingCart.appendChild(cartItem);
		});
	});
});

