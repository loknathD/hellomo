const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="image/unnamed.jpg" width="100" height="100" class="d-inline-block align-top" alt="mystore logo">
            </a>   
            
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <a href="login.html" class="btn btn-primary">LOGIN</a>
            <ul class="nav-item">
                <a class="nav-link" href="cart.html">
                    <i class="fa-solid fa-cart-shopping fa-lg"></i>
                </a>
            </ul>
  
          </div>
        </div>
      </nav>
      <br>
      <ul id="nav" class="nav nav-pills">
          <!-- we use class="nav nav-pills" to create pill like navbar, the upeer one is tab based  -->
          <li class="nav-item">
               <a class="nav-link" href="index.html">Home</a> 
          </li>
          <li class="nav-item">
            <a class="nav-link" href="allprod.html">All Products</a>
       </li>
       <li class="nav-item dropdown">
        <a class="nav-item dropdown-toggle" data-bs-toggle="dropdown">Women</a>
        <ul class="dropdown-menu">
            <li> <a class="dropdown-item" href="allprod.html">All products</a></li>
            <li> <a class="dropdown-item" href="dresses.html">Dresses</a></li>
            <li> <a class="dropdown-item" href="womenpants.html">Pants</a></li>
            <li> <a class="dropdown-item" href="skirts.html">Skirts</a></li>
        </ul>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-item dropdown-toggle" data-bs-toggle="dropdown">Men</a>
        <ul class="dropdown-menu">
            <li> <a class="dropdown-item" href="allprod.html">All Products</a></li>
            <li> <a class="dropdown-item" href="shirts.html">Shirts</a></li>
            <li> <a class="dropdown-item" href="menpants.html">Pants</a></li>
            <li> <a class="dropdown-item" href="hoodies.html">Hoodies</a></li>
        </ul>
    </li>
         <li class="nav-item">
          <a class="nav-link" href="kids.html">Kids</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact us</a>
       </li>
      </ul>
      `
    }
}
customElements.define('my-header',MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
    <class="bg-warning text-center text-lg-start">
    <!-- Grid container -->
    <div class="container p-4">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Women</h5>
  
          <ul class="list-unstyled mb-0">
            <li>
              <a href="dresses.html" class="text-dark">Dresses</a>
            </li>
            <li>
              <a href="womenpants.html" class="text-dark">Pants</a>
            </li>
            <li>
              <a href="skirts.html" class="text-dark">Skirts</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->
  
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0">Men</h5>
  
          <ul class="list-unstyled">
            <li>
              <a href="shirts.html" class="text-dark">Shirts</a>
            </li>
            <li>
              <a href="menpants.html" class="text-dark">Pants</a>
            </li>
            <li>
              <a href="hoodies.html" class="text-dark">Hoodies</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->
  
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Kids</h5>
          <a href="kids.html">kids</a>
          <ul class="list-unstyled mb-0">
          </ul>
        </div>
        <!--Grid column-->
  
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0">Links</h5>
  
          <ul class="list-unstyled">
            <li>
              <a href="index.html" class="text-dark">Home</a>
            </li>
            <li>
              <a href="login.html" class="text-dark">Login</a>
            </li>
            <li>
              <a href="contact.html" class="text-dark">Contact</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </div>
    <!-- Grid container -->
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2023 Copyright:
      <a class="text-dark" href="#">Mystore.com</a>
    </div>
    <!-- Copyright -->
      `
    }
}
customElements.define('my-footer',MyFooter)

function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === 'admin@admin.com' && password === '123456') {
        alert('Login successful');
    } else {
        alert('Incorrect email or password');
    }
}