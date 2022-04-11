import { allNotification, allMessages, allCart, profile } from "../headerData.js";
const getId = (id) => {
  return document.getElementById(id);
};

const header = {
  sideBar: getId("side"),
  sideImage: getId("sidebar-bottom"),
  allNotification: getId("notification"),
  allMessages: getId("allMessages"),
  allCart: getId("cart"),
  profile: getId("profile1"),
};

header.sideBar.innerHTML = ` <ul id="iq-sidebar-toggle" class="iq-menu">
<li class="active active-menu">
   <a href="#dashboard" class="iq-waves-effect" data-toggle="collapse" aria-expanded="true"><span class="ripple rippleEffect"></span><i class="las la-home iq-arrow-left"></i><span>Shop</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
   <ul id="dashboard" class="iq-submenu collapse show" data-parent="#iq-sidebar-toggle">
      <li class="active"><a href="index.html"><i class="las la-house-damage"></i>Home Page</a></li>
      <li><a href="category.html"><i class="ri-function-line"></i>Category Page</a></li>
      <li><a href="book-page.html"><i class="ri-book-line"></i>Book Page</a></li>
      <li><a href="book-pdf.html"><i class="ri-file-pdf-line"></i>Book PDF</a></li>
      <li><a href="Checkout.html"><i class="ri-checkbox-multiple-blank-line"></i>Checkout</a></li>
     <li><a href="wishlist.html"><i class="ri-heart-line"></i>wishlist</a></li>
   </ul>
</li>

<li>
   <a href="#userinfo" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-user-tie iq-arrow-left"></i><span>User</span><i class="ri-arrow-right-s-line iq-arrow-right"></i></a>
   <ul id="userinfo" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle" style="">
      <li><a href="profile.html"><i class="las la-id-card-alt"></i>User Profile</a></li>
      <li><a href="profile-edit.html"><i class="las la-edit"></i>User Edit</a></li>
      <li><a href="add-user.html"><i class="las la-plus-circle"></i>User Add</a></li>
      <li><a href="user-list.html"><i class="las la-th-list"></i>User List</a></li>
   </ul>
</li>

</ul>`;

header.sideImage.innerHTML = `<div class="iq-card">
<div class="iq-card-body">
   <div class="sidebarbottom-content">
      <div class="image">
      <img src='../images/page-img/side-bkg.png' alt="">
      </div>                    
      <button type="submit" class="btn w-100 btn-primary mt-4 view-more">Become Membership</button>
   </div>
</div>
</div> `;

allNotification.map((noti, index) => {
  let numNoti = document.getElementById("num-notification");
  numNoti.innerHTML = `<h5 class="mb-0 text-white">All Notifications<small class="badge  badge-light float-right pt-1">${allNotification.length}</small></h5>`;

  header.allNotification.innerHTML += `
    <a href="#" class="iq-sub-card" key=${index}>
    <div class="media align-items-center">
       <div class="">
          <img class="avatar-40 rounded" src=${noti.image} alt="">
       </div>
       <div class="media-body ml-3">
          <h6 class="mb-0 ">Emma Watson Barry</h6>
          <small class="float-right font-size-12">${noti.time}</small>
          <p class="mb-0"> ${noti.name}</p>
       </div>
    </div>
    </a>
    `;
});

allMessages.map((message) => {
  let numNoti = document.getElementById("num-message");
  numNoti.innerHTML = `<h5 class="mb-0 text-white">All Messages<small class="badge  badge-light float-right pt-1">${allMessages.length}</small></h5>`;

  header.allMessages.innerHTML += `   <a href="#" class="iq-sub-card">
    <div class="media align-items-center">
       <div class="">
          <img class="avatar-40 rounded" src=${message.image} alt="">
       </div>
       <div class="media-body ml-3">
          <h6 class="mb-0 ">${message.message}</h6>
          <small class="float-left font-size-12">${message.time}</small>
       </div>
    </div>
 </a>`;
});

allCart.map((cart) => {
  let numCarts = document.getElementById("num-carts");
  numCarts.innerHTML = allCart.length;

  let numCart = document.getElementById("num-cart");
  numCart.innerHTML = `<h5 class="mb-0 text-white">All Carts<small class="badge  badge-light float-right pt-1">${allCart.length}</small></h5>`;

  header.allCart.innerHTML += `<a href="#" class="iq-sub-card">
    <div class="media align-items-center">
       <div class="">
          <img class="rounded" src=${cart.image} alt="">
       </div>
       <div class="media-body ml-3">
          <h6 class="mb-0 ">${cart.item}</h6>
          <p class="mb-0">$${cart.price}</p>
       </div>
       <div class="float-right font-size-24 text-danger"><i class="ri-close-fill"></i></div>
    </div>
 </a>`;
});

header.profile.innerHTML = `  <a href="#" class="search-toggle iq-waves-effect d-flex align-items-center">
<img
  src=${ profile.image}
  class="img-fluid rounded-circle mr-3"
  alt="user"
/>
<div class="caption">
  <h6 class="mb-1 line-height">${ profile.name}</h6>
  <p class="mb-0 text-primary">$${ profile.amount}</p>
</div>
</a>
<div class="iq-sub-dropdown iq-user-dropdown">
<div class="iq-card shadow-none m-0">
  <div class="iq-card-body p-0">
    <div class="bg-primary p-3">
      <h5 class="mb-0 text-white line-height">
        Hello ${ profile.name}
      </h5>
      <span class="text-white font-size-12">Available</span>
    </div>
    <a
      href="profile.html"
      class="iq-sub-card iq-bg-primary-hover"
    >
      <div class="media align-items-center">
        <div class="rounded iq-card-icon iq-bg-primary">
          <i class="ri-file-user-line"></i>
        </div>
        <div class="media-body ml-3">
          <h6 class="mb-0">My Profile</h6>
          <p class="mb-0 font-size-12">
            View personal profile details.
          </p>
        </div>
      </div>
    </a>
    <a
      href="profile-edit.html"
      class="iq-sub-card iq-bg-primary-hover"
    >
      <div class="media align-items-center">
        <div class="rounded iq-card-icon iq-bg-primary">
          <i class="ri-profile-line"></i>
        </div>
        <div class="media-body ml-3">
          <h6 class="mb-0">Edit Profile</h6>
          <p class="mb-0 font-size-12">
            Modify your personal details.
          </p>
        </div>
      </div>
    </a>
    <a
      href="account-setting.html"
      class="iq-sub-card iq-bg-primary-hover"
    >
      <div class="media align-items-center">
        <div class="rounded iq-card-icon iq-bg-primary">
          <i class="ri-account-box-line"></i>
        </div>
        <div class="media-body ml-3">
          <h6 class="mb-0">Account settings</h6>
          <p class="mb-0 font-size-12">
            Manage your account parameters.
          </p>
        </div>
      </div>
    </a>
    <a
      href="privacy-setting.html"
      class="iq-sub-card iq-bg-primary-hover"
    >
      <div class="media align-items-center">
        <div class="rounded iq-card-icon iq-bg-primary">
          <i class="ri-lock-line"></i>
        </div>
        <div class="media-body ml-3">
          <h6 class="mb-0">Privacy Settings</h6>
          <p class="mb-0 font-size-12">
            Control your privacy parameters.
          </p>
        </div>
      </div>
    </a>
    <div class="d-inline-block w-100 text-center p-3">
      <a
        class="bg-primary iq-sign-btn"
        href="sign-in.html"
        role="button"
        >Sign out<i class="ri-login-box-line ml-2"></i
      ></a>
    </div>
  </div>
</div>
</div>`;
