import { allBook} from  '../bookData.js'
const getId = (id) => {
    return document.getElementById(id);
  };
  
  const book = {
     books: getId('browser-book')
  };

  allBook.map((books, index) =>{
    book.books.innerHTML += ` <div class="col-sm-6 col-md-4 col-lg-3"  key=${ index++}>
    <div
      class="iq-card iq-card-block iq-card-stretch iq-card-height browse-bookcontent"
    >
      <div class="iq-card-body p-0">
        <div class="d-flex align-items-center">
          <div
            class="col-6 p-0 position-relative image-overlap-shadow"
          >
            <a href="javascript:void();"
              ><img
                class="img-fluid rounded w-100"
                src=${ books.img}
                alt=""
            /></a>
            <div class="view-book">
              <a
                href="book-page.html"
                class="btn btn-sm btn-white"
                >View Book</a
              >
            </div>
          </div>
          <div class="col-6">
            <div class="mb-2">
              <h6 class="mb-1">${ books.title}</h6>
              <p class="font-size-13 line-height mb-1">
                ${ books.name}
              </p>
              <div class="d-block line-height">
                <span class="font-size-11 text-warning">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </span>
              </div>
            </div>
            <div class="price d-flex align-items-center">
              <span class="pr-1 old-price">${ books.slashedPrice}</span>
              <h6><b>${ books.price}</b></h6>
            </div>
            <div class="iq-product-action">
              <a href="javascript:void();"
                ><i
                  class="ri-shopping-cart-2-fill text-primary"
                ></i
              ></a>
              <a href="javascript:void();" class="ml-2"
                ><i class="ri-heart-fill text-danger"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  
})
  