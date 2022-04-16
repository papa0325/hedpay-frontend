<template>
    <div class="page-content">
        <div class="container-fluid pb-5">
            <!--<div class="col-12 d-flex flex-column align-items-sm-start align-items-center pb-3 position-relative">
                <div class="d-flex align-items-center justify-content-between col-12 px-0">
                  <p class="TextBlue fontW-600 H-18 col-lg-12 col px-lg-0 mb-0">Mailbox</p>
                  <div class="d-flex justify-content-end px-0 py-3 col-6 d-lg-none">
                      <button type="button" class="col-12 py-2 H-14 TextWhite Bg-LBlue" onclick="NewEmail();">New</button>
                  </div>
                </div>
                <ul class="Box-Card MailMenu col-12 position-absolute " style="display: none;z-index: 6;top:60px;left:0;">
                  <li class="Active-Mailbox row justify-content-between px-3 py-2"><a href="#" ><span class="pr-2"><i class="fas fa-inbox"></i></span> Inbox  </a> <span class=" px-2">2</span></li>
                  <li class=" row justify-content-between px-3 py-2"><a href="#" ><span class="pr-2"><i class="far fa-star"></i></span> Favorites  </a> <span class=" px-2">2</span></li>
                  <li class=" row justify-content-between px-3 py-2"><a href="#" ><span class="pr-2"><i class="fab fa-firstdraft"></i></span> Drafts  </a> <span class="px-2">2</span></li>
                  <li class=" row justify-content-between px-3 py-2"><a href="#" ><span class="pr-2"><i class="fas fa-paper-plane"></i></span> Messages sent  </a> <span class="px-2">2</span></li>
                  <li class=" row justify-content-between px-3 py-2"><a href="#" ><span class="pr-2"><i class="far fa-trash-alt"></i></span> Deleted messages  </a> <span class="px-2">2</span></li>
              </ul>
            </div> -->

          <section class="d-flex">
            <div class="col-xl-3 col-lg-4 d-none d-lg-inline"><p class="TextBlue fontW-600 H-18 col-lg-12 col px-lg-0 mb-0">Mailbox</p>
              <div class="row justify-content-start px-0 py-3 ">
                  <button type="button" class="Blue-Button col-12 py-2 H-14 TextWhite Bg-LBlue rounded ">New</button>
              </div>
              <ul class="px-2 MailMenu">
                  <li class="Active-Mailbox row justify-content-between py-2"><a href="#" ><span class="pr-2"><i class="fas fa-inbox"></i></span> Inbox  </a> <span class=" px-2">2</span></li>
                  <li class=" row justify-content-between py-2"><a href="#" ><span class="pr-2"><i class="far fa-star"></i></span> Favorites  </a> <span class=" px-2">2</span></li>
                  <li class=" row justify-content-between py-2"><a href="#" ><span class="pr-2"><i class="fab fa-firstdraft"></i></span> Drafts  </a> <span class="px-2">2</span></li>
                  <li class=" row justify-content-between py-2"><a href="#" ><span class="pr-2"><i class="fas fa-paper-plane"></i></span> Messages sent  </a> <span class="px-2">2</span></li>
                  <li class=" row justify-content-between py-2"><a href="#" ><span class="pr-2"><i class="far fa-trash-alt"></i></span> Deleted messages  </a> <span class="px-2">2</span></li>
              </ul>
            </div>
            <div class="col-xl-9 col-lg-8">
              <div class="col-12  px-0 position-relative">
                <div class="H-13 TextDark mb-0  text-center Box-Mail-Position " >
                    <div class=" P-Mail px-0 Mailbox-Chk d-flex align-items-center">
                        <input type="checkbox" class="BlueCBox" >
                        <span class="TextDark H-22 fontW-700 p-0 "><i class="mdi mdi-chevron-down"></i></span>
                        <button class="ml-3 btn"><span class="BD-Color H-18"><i class="fas fa-trash"></i></span></button>
                    </div>
                    <ul class="Box-Card  Ul-Mail " style="display: none;">
                        <li class="linebottomgray d-flex justify-content-between py-2 pl-5"><a class="TextDark H-14">All</a></li>
                        <li class="linebottomgray d-flex justify-content-between py-2 pl-5"><a class="TextDark H-14">None</a></li>
                        <li class="linebottomgray d-flex justify-content-between py-2 pl-5"><a class="TextDark H-14">Read</a></li>
                        <li class="linebottomgray d-flex justify-content-between py-2 pl-5"><a class="TextDark H-14">Not read</a></li>
                        <li class="linebottomgray d-flex justify-content-between py-2 pl-5"><a class="TextDark H-14">Favorites</a></li>
                        <li class="linebottomgray d-flex justify-content-between py-2 pl-5"><a class="TextDark H-14">Unfavorite posts</a></li>
                    </ul>
                </div>

                <table class="table " id="Mailbox-Table"  style="width:100%;">
                  <thead>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody class="Mailbox-Body ">

                      <tr class="Mail-Active">
                          <td class="H-13 TextDark mb-0 px-0 text-center" >
                              <div class=" S-Curr px-0">
                                  <input type="checkbox" class=" BlueCBox" checked >
                              </div>
                          </td>
                          <td class="H-13 TextDark mb-0 px-0 text-center" >
                              <div class="Contact-Star  px-0">
                                  <input type="checkbox" class="star icon-table-star Fav-Mail" checked >
                              </div>
                          </td>
                          <td class="Name">Chantal Origel
                              <p class="Desc-Resp d-sm-none">Lorem Ipsum is simply text lorem ipsum dummy textprinti…</p>
                          </td>
                          <td class="Mail-Desc d-sm-inline-block d-none">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text of the printi…</td>
                          <td class="Mail-Date">14:35</td>
                      </tr>
                      <tr class="Mail-Active">
                          <td class="H-13 TextDark mb-0 px-0 text-center" >
                              <div class=" S-Curr px-0">
                                  <input type="checkbox" class=" BlueCBox"  >
                              </div>
                          </td>
                          <td class="H-13 TextDark mb-0 px-0 text-center" >
                              <div class="Contact-Star  px-0">
                                  <input type="checkbox" class="star icon-table-star Fav-Mail" checked >
                              </div>
                          </td>
                          <td class="Name">Hedpay Customer Service
                              <p class="Desc-Resp d-sm-none">Lorem Ipsum is simply text lorem ipsum dummy textprinti…</p>
                          </td>
                          <td class="Mail-Desc d-sm-inline-block d-none">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text of the printi…</td>
                          <td class="Mail-Date">22 May</td>
                      </tr>
                      <tr class="">
                          <td class="H-13 TextDark mb-0 px-0 text-center" >
                              <div class=" S-Curr px-0">
                                  <input type="checkbox" class=" BlueCBox"  >
                              </div>
                          </td>
                          <td class="H-13 TextDark mb-0 px-0 text-center" >
                              <div class="Contact-Star  px-0">
                                  <input type="checkbox" class="star icon-table-star Fav-Mail"  >
                              </div>
                          </td>
                          <td class="Name">Harry Hekimian
                              <p class="Desc-Resp d-sm-none">Lorem Ipsum is simply text lorem ipsum dummy textprinti…</p>
                          </td>
                          <td class="Mail-Desc d-sm-inline-block d-none">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text of the printi…</td>
                          <td class="Mail-Date">09 May</td>
                      </tr>
                      <tr class="">
                          <td class="H-13 TextDark mb-0 px-0 text-center" >
                              <div class=" S-Curr px-0">
                                  <input type="checkbox" class=" BlueCBox"  >
                              </div>
                          </td>
                          <td class="H-13 TextDark mb-0 px-0 text-center" >
                              <div class="Contact-Star  px-0">
                                  <input type="checkbox" class="star icon-table-star Fav-Mail"  >
                              </div>
                          </td>
                          <td class="Name">Maria-Dhrifa Adjaoudi

                              <p class="Desc-Resp d-sm-none">Lorem Ipsum is simply text lorem ipsum dummy textprinti…</p>
                          </td>
                          <td class="Mail-Desc d-sm-inline-block d-none">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text of the printi…</td>
                          <td class="Mail-Date">17 May</td>
                      </tr>
                      <tr class="Mail-Active">
                          <td class="H-13 TextDark mb-0 px-0 text-center" >
                              <div class=" S-Curr px-0">
                                  <input type="checkbox" class=" BlueCBox" checked >
                              </div>
                          </td>
                          <td class="H-13 TextDark mb-0 px-0 text-center" >
                              <div class="Contact-Star  px-0">
                                  <input type="checkbox" class="star icon-table-star Fav-Mail" checked >
                              </div>
                          </td>
                          <td class="Name">Chantal Origel
                              <p class="Desc-Resp d-sm-none">Lorem Ipsum is simply text lorem ipsum dummy textprinti…</p>
                          </td>
                          <td class="Mail-Desc d-sm-inline-block d-none">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text of the printi…</td>
                          <td class="Mail-Date">14:35</td>
                      </tr>
                      <tr class="Mail-Active">
                          <td class="H-13 TextDark mb-0 px-0 text-center" >
                              <div class=" S-Curr px-0">
                                  <input type="checkbox" class=" BlueCBox"  >
                              </div>
                          </td>
                          <td class="H-13 TextDark mb-0 px-0 text-center" >
                              <div class="Contact-Star  px-0">
                                  <input type="checkbox" class="star icon-table-star Fav-Mail" checked >
                              </div>
                          </td>
                          <td class="Name">Hedpay Customer Service
                              <p class="Desc-Resp d-sm-none">Lorem Ipsum is simply text lorem ipsum dummy textprinti…</p>
                          </td>
                          <td class="Mail-Desc d-sm-inline-block d-none">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text of the printi…</td>
                          <td class="Mail-Date">22 May</td>
                      </tr>
                      <tr class="">
                          <td class="H-13 TextDark mb-0 px-0 text-center" >
                              <div class=" S-Curr px-0">
                                  <input type="checkbox" class=" BlueCBox"  >
                              </div>
                          </td>
                          <td class="H-13 TextDark mb-0 px-0 text-center" >
                              <div class="Contact-Star  px-0">
                                  <input type="checkbox" class="star icon-table-star Fav-Mail"  >
                              </div>
                          </td>
                          <td class="Name">Harry Hekimian
                              <p class="Desc-Resp d-sm-none">Lorem Ipsum is simply text lorem ipsum dummy textprinti…</p>
                          </td>
                          <td class="Mail-Desc d-sm-inline-block d-none">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text of the printi…</td>
                          <td class="Mail-Date">09 May</td>
                      </tr>
                      <tr class="">
                          <td class="H-13 TextDark mb-0 px-0 text-center" >
                              <div class=" S-Curr px-0">
                                  <input type="checkbox" class=" BlueCBox"  >
                              </div>
                          </td>
                          <td class="H-13 TextDark mb-0 px-0 text-center" >
                              <div class="Contact-Star  px-0">
                                  <input type="checkbox" class="star icon-table-star Fav-Mail"  >
                              </div>
                          </td>
                          <td class="Name">Maria-Dhrifa Adjaoudi

                              <p class="Desc-Resp d-sm-none">Lorem Ipsum is simply text lorem ipsum dummy textprinti…</p>
                          </td>
                          <td class="Mail-Desc d-sm-inline-block d-none">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text of the printi…</td>
                          <td class="Mail-Date">17 May</td>
                      </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </section>
      </div>
  </div>
</template>

<style src="./style.scss" lang="scss"></style>
<script src="./script.js"></script>
