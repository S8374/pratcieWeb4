// Bx Slider
  $(document).ready(function(){
    $('.slider_area').bxSlider();
    $('#main_menu').meanmenu({
        meanMenuContainer: '#mobile_menu',
        meanScreenWidth: 991,
    });
  });


  //login section
  document.addEventListener('DOMContentLoaded', () => {
    const login = document.querySelector('.login');
    
    if (login) {
      login.addEventListener('click', () => {
        const newWin = window.open('', '', 'width=800,height=600');
  
        newWin.document.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Window</title>
            <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" type="text/css" />
            <script src="https://cdn.tailwindcss.com"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <style>
              .newlogin {
                color: red;
                font-size: 20px;
              }
            </style>
          </head>
          <body>
            <div class="hero min-h-screen bg-base-200">
              <div class="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start">
                <div class="text-center lg:text-left mb-6 lg:mb-0">
                  <h1 class="text-5xl font-bold">Sign Up now!</h1>
                  <p class="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                </div>
                <div class="card bg-base-100 w-full max-w-sm shadow-2xl">
                  <div class="buttonl flex justify-evenly mt-4">
                    <button class="btn btn-outline"><i class="fa-brands fa-google"></i> Google</button>
                    <button class="btn btn-outline"><i class="fa-brands fa-github"></i> GitHub</button>
                  </div>
                  <form class="card-body">
                    <div class="form-control">
                      <input type="email" placeholder="Email:" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                      <input type="password" placeholder="Password:" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                      <input type="text" placeholder="First Name:" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                      <input type="text" placeholder="Last Name:" class="input input-bordered" required />
                      <label class="label">
                        <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                    </div>
                    <div class="form-control mt-6">
                      <button class="btn btn-primary w-full">Sign Up</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </body>
          </html>
        `);
  
        newWin.document.close();
  
        // Add event listener to ensure the class is added when window loads
        newWin.addEventListener('load', () => {
          const content = newWin.document.querySelector('.card');
          if (content) {
            content.classList.add('newlogin');
          }
        });
      });
    }
  });

  //login2 

  document.addEventListener('DOMContentLoaded', () => {
    const login2 = document.querySelector('.login2');
    
    if (login2) {
      login2.addEventListener('click', () => {
        const newWin2 = window.open('', '', 'width=800,height=600');
  
        newWin2.document.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Window</title>
            <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" type="text/css" />
            <script src="https://cdn.tailwindcss.com"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <style>
              .newlogin {
                color: red;
                font-size: 20px;
              }
            </style>
          </head>
          <body>
            <div class="hero min-h-screen bg-base-200">
              <div class="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start">
                <div class="text-center lg:text-left mb-6 lg:mb-0">
                  <h1 class="text-5xl font-bold">Sign Up now!</h1>
                  <p class="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                </div>
                <div class="card bg-base-100 w-full max-w-sm shadow-2xl">
                  <div class="buttonl flex justify-evenly mt-4">
                    <button class="btn btn-outline"><i class="fa-brands fa-google"></i> Google</button>
                    <button class="btn btn-outline"><i class="fa-brands fa-github"></i> GitHub</button>
                  </div>
                  <form class="card-body">
                    <div class="form-control">
                      <input type="email" placeholder="Email:" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                      <input type="password" placeholder="Password:" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                      <input type="text" placeholder="First Name:" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                      <input type="text" placeholder="Last Name:" class="input input-bordered" required />
                      <label class="label">
                        <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                    </div>
                    <div class="form-control mt-6">
                      <button class="btn btn-primary w-full">Sign Up</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </body>
          </html>
        `);
  
        newWin2.document.close();
  
        // Add event listener to ensure the class is added when window loads
        newWin2.addEventListener('load', () => {
          const content = newWin2.document.querySelector('.card');
          if (content) {
            content.classList.add('newlogin');
          }
        });
      });
    }
  });



// Function to handle animations based on intersection
const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
};

// Initialize Intersection Observer
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Select all elements with class text-animation
const textAnimations = document.querySelectorAll('.text-animation');

// Observe each text-animation element
textAnimations.forEach(animation => {
  observer.observe(animation);
});