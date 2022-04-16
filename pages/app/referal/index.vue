<template>
  <div class="main-content">
    <div class="page-content ">
      <section class="d-flex flex-column flex-xl-row justify-content-between   px-xl-5 px-md-3 px-2  mr-xl-5 mr-2">
        <div class="col-xl-8 px-3">
          <div class="d-flex flex-column flex-md-row justify-content-between SizeH-Ref">
            <div class="col-md-5 col-12 d-flex flex-column justify-content-between px-0 pr-md-3 mb-xl-0 mb-3">
              <div class="ReferenceBox  mr-0">
                <div class="d-flex flex-column">
                  <p class="H-14 LigthBlue text-left my-2">Personal invites sent</p>
                  <div class="d-flex justify-content-between">
                    <div class="d-flex">
                      <img src="~assets/images/share.svg" />
                    </div>
                    <p class="H-16 BD-Color text-right my-0 fontW-500">8</p>
                  </div>
                </div>
              </div>
             <!-- Referrals -->
              <div class="ReferenceBox  mr-0">
                <div class="d-flex flex-column">
                  <p class="H-14 LigthBlue text-left my-2">My referrals</p>
                  <div class="d-flex justify-content-between">
                    <div class="d-flex">
                      <img src="~assets/images/user-check.svg" />
                    </div>
                    <p class="H-16 BD-Color text-right my-0 fontW-500">20</p>
                  </div>
                </div>
              </div>
              <!-- HDP -->
              <div class="ReferenceBox mb-0 mr-0">
                <div class="d-flex flex-column">
                  <p class="H-14 LigthBlue text-left my-2">My bonuses</p>
                  <div class="d-flex justify-content-between flex-wrap">
                    <div class="d-flex">
                      <img src="~assets/images/HDP.svg" />
                      <p class="H-14 BD-Color text-left ml-2 my-0 RespIcon " >HDP</p>
                    </div>
                    <p class="H-16 BD-Color text-right my-0 fontW-500">2,000,000 Hdp.ф</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-7 col-12  Box-Card px-0 mb-xl-0 mb-3" >
              <div class="d-flex flex-column flex-sm-row align-items-center col-12" style="background: #D9FDFF;">
                <div class="col-sm-3 col-4 px-0">
                  <img src="~assets/images/hedpay-referral-5.png" class="w-100" />
                </div>
                <div class="col px-sm-3 px-1 py-4">
                  <p class="H-30 LigthBlue fontW-500 " style="line-height: 0.9;">Referral System</p>
                  <p class="H-14 BD-Color ">Each referral receives 10 Hdp as a new user for the fact of registration on Hedpay. Each referrer receives 5% in Hdp tokens from each purchase of the referral.</p>
                </div>
              </div>
              <div class="col-12 d-flex flex-column my-3  px-4">
                <p class="H-16 LigthBlue col-12">Create Your Link</p>
                <div class="d-flex flex-column flex-sm-row align-items-sm-center align-items-end justify-content-between row">
                  <input class="Ref-input H-16 col-sm-9 col-12" placeholder="main.hedpay.com/?ref=7fbdz67a6a8b4f88"/>
                  <button class="Ref-Button Ref TextWhite H-16 col-sm-2 col-12 px-1">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 my-5 px-0">
            <div class="row col-12 d-flex  mt-xl-0 mt-5 flex-column align-content-xl-start align-items-center justify-content-start ">
              <p class="H-20 LigthBlue fontW-500 my-0 text-left col-12" >Last invitations</p>
              <div class="col-12 d-flex flex-column">
                <table class="table Table-Hedpay" id="Referral-Table" style="width:100%;">
                  <thead >
                    <tr style="border-top: none;margin-top: 0;width: 100%;">
                      <th style="border-top: none;" class="H-14 TextDark mb-0 col-4">Date</th>
                      <th style="border-top: none;" class="H-14 TextDark mb-0 col-4">Email</th>
                      <th style="border-top: none;" class="H-14 TextDark mb-0 col-4">Status</th>
                    </tr>
                  </thead>
                  <tbody class="Box-Card">
                    <tr class="col-12 px-0">
                      <td class="H-14 TextDark col-4" >05/05/2021</td>
                      <td class="H-14 TextDark col-4" >harry@malopan.com</td>
                      <td class="H-14 OrangeColor col-4" >Standby</td>
                    </tr>
                    <tr>
                      <td class="H-14 TextDark" >05/05/2021</td>
                      <td class="H-14 TextDark" >camilo@malopan.com</td>
                      <td class="H-14 LigthBlue" >Referred</td>
                    </tr>
                    <tr>
                      <td class="H-14 TextDark" >05/05/2021</td>
                      <td class="H-14 TextDark" >harry@malopan.com</td>
                      <td class="H-14 OrangeColor" >Standby</td>
                    </tr>
                    <tr>
                      <td class="H-14 TextDark" >05/05/2021</td>
                      <td class="H-14 TextDark" >camilo@malopan.com</td>
                      <td class="H-14 LigthBlue" >Referred</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 col-12 Box-Card SizeH-Ref BoxShare-Send  py-3 py-xl-0 mb-xl-0 mb-3" >
          <div class="d-flex flex-column align-items-center ">
            <p class="H-25 LigthBlue my-3  text-left col-12">Invite Your Friends</p>
            <div class="control-group col-12 px-0">
              <label class="H-14 LigthBlue" for="Email">Email</label>
              <input class="Invite-Input H-14 TextDark form-control" id="Email" placeholder="Email"/>
            </div>
            <div class="control-group my-3 col-12 px-0">
              <label class="H-14 LigthBlue" for="Message">Type in a message</label>
              <textarea class="Invite-Input H-14 TextDark form-control" id="Message"></textarea>
            </div>
            <button class="Ref-Button Share-Send TextWhite H-18 col-sm-8 col-12 align-self-end">Send</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style src="./style.scss" lang="scss"></style>
<script src="./script.js"></script>
