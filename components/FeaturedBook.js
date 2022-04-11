import { featured} from '../bookData.js'
const getId = (id) => {
    return document.getElementById(id);
  };
  
  const book = {
     books: getId('featured-book')
  };

  const star = () => {
    for(let i =0; i<5; i++){
      return '<i class="fa fa-star"></i>'
    }
  }


 

  book.books.innerHTML = `
                  <div class="row align-items-center">
                    <div class="col-sm-5 pr-0">
                      <a href="javascript:void();"
                        ><img
                          class="img-fluid rounded w-100"
                          src=${ featured.img}
                          alt=""
                      /></a>
                    </div>
                    <div class="col-sm-7 mt-3 mt-sm-0">
                      <h4 class="mb-2">
                        ${ featured.title}
                      </h4>
                      <p class="mb-2">Author: Gheg origin</p>
                      <div class="mb-2 d-block">
                        <span class="font-size-12 text-warning" >
                        ${ star() }
                        </span>
                      </div>
                      <span class="text-dark mb-3 d-block"
                        >${ featured.description}</span
                      >
                      <button type="submit" class="btn btn-primary learn-more">
                        Learn More
                      </button>
                    </div>
                  </div>`