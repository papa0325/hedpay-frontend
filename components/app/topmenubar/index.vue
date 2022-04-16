<template>
 <header id="page-topbar" class="px-0">
  <div class="navbar-header d-flex align-items-md-center  justify-content-between  px-lg-2 px-lg-4 px-0">
      <div class=" d-flex align-items-center justify-content-between ">
          <!-- d-lg-none -->
          <button type="button" class="btn btn-sm px-sm-3 px-2 font-size-16 header-item waves-effect d-inline-block d-sm-none"
          id="vertical-menu-btn">
          <span class="W-Color"><i class="fa fa-fw fa-bars"></i></span>
          </button>
          <div class=" d-flex align-items-center justify-content-between ">
            <!-- d-lg-none -->
            <button type="button" class="btn btn-sm px-sm-3 px-2 font-size-16 header-item waves-effect d-inline-block d-sm-none"
            id="vertical-menu-btn">
            <span class="W-Color"><i class="fa fa-fw fa-bars"></i></span>
            </button>
            <div class="d-flex justify-content-between align-items-start pl-sm-2 pl-1">
                <div class="d-flex GrayBox mr-2">
                    <p class="Nav-TextGray">Hdp.ф &nbsp;&nbsp;</p>
                    <p class="Nav-TextGray">0.1039</p>
                    <p class="Nav-TextGreen">(+15.15%)</p>
                </div>
                <div class="d-flex GrayBox">
                    <p class="Nav-TextGray">Vol: &nbsp;&nbsp;</p>
                    <p class="Nav-TextGray">2,082</p>
                </div>
            </div>
        </div>
    </div>
    <div id="ButtonProfileMenu">
        <div class="col d-flex align-items-center justify-content-end" >
            <div class="d-flex justify-content-end align-items-center px-lg-2 px-lg-4 px-0" >
                <a class="d-flex align-items-start justify-content-center H-16 BD-Color px-3 waves-effect position-relative pt-2"
                    href="/app/mailbox">
                    <img src="~assets/Icons/Profile/envelope.svg" class="Icon-Menu envelope-icon" />
                    <img src="~assets/Icons/Profile/MessageOrange.svg" class="Icon-Menu  position-absolute"  style="top:0px;right: 3px;"/>
                    <p class="TextWhite position-absolute H-14 fontW-500" style="top:-1px;right: 8px;" >2</p>
                </a>

                <a class="d-flex align-items-center H-16 BD-Color pl-md-4  pr-2 pt-2"
                    href="/app/kyc">
                    <img src="~assets/Icons/Profile/info-circle.svg" class="Icon-Menu  " />
                    <p class="d-flex TextWhite pl-1 mr-2 my-0 H-16" >KYC<span class="OrangeColor pl-1"> 50%</span> </p>
                </a>

                <a class="d-flex align-items-center H-16 BD-Color pl-md-2  pr-3 pt-2"
                    href="/app/2fa">
                    <img src="~assets/Icons/Profile/mobile-alt.svg" class="Icon-Menu " />
                    <p class="d-flex TextWhite pl-1 mr-2 my-0 H-16" >2FA </p>
                    <img src="~assets/Icons/Profile/record-vinyl.svg" class="Icon-Menu " />
                </a>
                <a class="d-flex align-items-center H-16 BD-Color pl-md-3 ml-1 pr-3 pt-2"
                    href="/app/referal">
                    <span class="BD-Color MenuText pr-2 d-none d-sm-inline-block" style="color: white;">Referral</span>
                    <img src="~assets/Icons/Profile/icon-referral.svg" class="Icon-Menu" />
                </a>
            </div>
            <div class="dropdown d-inline-block ml-xl-2 ml-0 pr-md-0 pr-4">
                <button type="button" class="btn header-item waves-effect px-0 d-flex align-items-center" id="page-header-user-dropdown"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="d-none d-sm-inline-block mr-2 W-Color H-16" style="line-height: 0.9;">Joe Doe
                        <br>
                        <span class="H-12 py-0 my-2 OrangeColor">87654321</span>
                    </span>
                    <img class="rounded-circle header-profile-user" src="~assets/images/users/avatar-2.jpg"
                        alt="Header Avatar">
                    <i class="mdi mdi-chevron-down d-sm-inline-block H-20 BD-Color pr-2 ArrowIcon" ></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item d-flex align-items-center" data-toggle="modal" data-target=".bd-example-modal-lg"
                        href="">
                        <span class="TextBlue H-18 pr-3"><img src="~assets/images/fund-package.svg" class="H-16"></span>
                        <span class="BD-Color H-16 fontW-500">Settings</span>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" data-target=".bd-example-modal-lg"
                        href="/app/profile">
                        <span class="TextBlue H-18 pr-3"><img src="~assets/Icons/Profile/profile.svg" class="H-16"></span>
                        <span class="BD-Color H-16 fontW-500">Profile</span>
                    </a>
                    <a class="dropdown-item d-flex align-items-center" @click="logOut();">
                        <span class="TextBlue H-18 pr-3"><img src="~assets/Icons/Profile/lock-info.svg" class="H-15" width="18"></span>
                        <span class="BD-Color H-16 fontW-500">Logout</span>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Setting Modal -->
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content p-sm-5 px-2 py-4">
                <div class="modal-header py-0">
                    <p class="H-18 LigthBlue col-11 fontW-600 text-sm-left text-center">Settings</p>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                <div class=" col-12 px-0 mt-3">
                    <div class="d-flex align-items-start">
                        <span class="OrangeColor pr-2"><img src="~assets/Icons/Profile/info-circle.svg" class="Icon-Menu  " /></span>
                        <p class="H-14 TextDark">Select the accounts you want to be visible on your dashboard and your choice of default conversion currency.</p>
                    </div>
                    <div class="control-group col-12 px-0 ">
                        <label class="H-16 LigthBlue ml-3" for="Choose">Default conversion currency *</label>
                        <div class="d-flex">
							<select class="H-16 shadow-sm p-2 mb-3 bg-white rounded	border w-100">
								<option value="USD"><p class=" H-14 TextDark my-0">CAD - Canadian Dollar</p></option>
								<option value="EUR"><p class=" H-14 TextDark my-0">USD - Dollar</p></option>
								<option value="GBP"><p class=" H-14 TextDark my-0">EUR - Euro</p></option>
								<option value="HDP"><p class=" H-14 TextDark my-0">GBP - British Pound</p></option>
							</select>
						</div>
                    </div>
                    <div class="pt-3 row flex-column flex-md-row px-lg-4 px-sm-0 px-4">
                        <div class="col-md-6">
                            <div class="text-left S-Curr row form-group align-items-center">
                                <input class="BlueCBox lockeds"  type="checkbox" checked disabled/>&nbsp;&nbsp;&nbsp;
                                <label class="TextDark H-16 fontW-500"><img class="pr-2" src="~assets/Icons/HDP.svg"/>HDP - Hdp.ф</label>
                            </div>
                            <div class="text-left S-Curr row form-group align-items-center">
                                <input class="BlueCBox"  type="checkbox" />&nbsp;&nbsp;&nbsp;
                                <label class="TextDark H-16 fontW-500"><img class="pr-2" src="~assets/Icons/BTC.svg"/>BTC - Bitcoin</label>
                            </div>
                            <div class="text-left S-Curr row form-group align-items-center">
                                <input class="BlueCBox"  type="checkbox" />&nbsp;&nbsp;&nbsp;
                                <label class="TextDark H-16 fontW-500"><img class="pr-2" src="~assets/Icons/ETH.svg"/>ETH - Ethereum</label>
                            </div>
                            <div class="text-left S-Curr row form-group align-items-center">
                                <input class="BlueCBox"  type="checkbox" />&nbsp;&nbsp;&nbsp;
                                <label class="TextDark H-16 fontW-500"><img class="pr-2" src="~assets/Icons/USDT.svg"/>USDT - Tether</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="text-left S-Curr row form-group align-items-center">
                                <input class="BlueCBox locked S-Coin" id="CAD-SettCheck"  type="checkbox" checked disabled/>&nbsp;&nbsp;&nbsp;
                                <label class="TextDark H-16 fontW-500"><img class="pr-2 envelope-icon" src="~assets/Icons/CAD.svg"/>CAD - Canadian Dollar</label>
                            </div>
                            <div class="text-left S-Curr row form-group align-items-center">
                                <input class="BlueCBox S-Coin" id="USD-SettCheck"  type="checkbox" />&nbsp;&nbsp;&nbsp;
                                <label class="TextDark H-16 fontW-500"> <img class="pr-2" src="~assets/Icons/USD.svg"/>USD - Dollar</label>
                            </div>
                            <div class="text-left S-Curr row form-group align-items-center">
                                <input class="BlueCBox S-Coin" id="EUR-SettCheck" type="checkbox" />&nbsp;&nbsp;&nbsp;
                                <label class="TextDark H-16 fontW-500"> <img class="pr-2" src="~assets/Icons/EUR.svg"/>EUR - Euro</label>
                            </div>
                            <div class="text-left S-Curr row form-group align-items-center">
                                <input class="BlueCBox S-Coin" id="GBP-SettCheck" type="checkbox" />&nbsp;&nbsp;&nbsp;
                                <label class="TextDark H-16 fontW-500"> <img class="pr-2" src="~assets/Icons/GBP.svg"/>GBP - British Pound</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <!-- <div class="d-flex justify-content-end align-items-center px-lg-2 px-lg-4 px-0 pt-2" style="background: #FFFFFF;">
      <a class="d-flex align-items-start justify-content-center H-16 BD-Color px-3 waves-effect position-relative pt-2"
          href="javascript:void(0)">
          <img src="~assets/Icons/Profile/envelope.svg" class="Icon-Menu envelope-icon" />
          <img src="~assets/Icons/Profile/MessageOrange.svg" class="Icon-Menu  position-absolute"  style="top:0px;right: 3px;"/>

          <p class="TextWhite position-absolute H-14 fontW-500" style="top:-1px;right: 8px;" >2</p>
      </a>

      <a class="d-flex align-items-center H-16 BD-Color pl-md-4  pr-2 pt-2"
          href="javascript:void(0)">
          <img src="~assets/Icons/Profile/icon-KYC-account.svg" class="Icon-Menu icon-2fa" />
          <p class="OrangeColor pl-1 mr-2 my-0 H-16" >50%</p>
      </a>

      <a class="d-flex align-items-center H-16 BD-Color pl-md-2  pr-3 pt-2"
          href="javascript:void(0)">
          <img src="~assets/Icons/Profile/2FA-icon.svg" class="Icon-Menu icon-2fa" />
      </a>
      <a class="d-flex align-items-center H-16 BD-Color pl-md-3 ml-1 pr-3 pt-2"
          href="Referral.html">
          <span class="BD-Color MenuText pr-2 d-none d-sm-inline-block">Referral</span>
          <img src="~assets/Icons/Profile/icon-referral.svg" class="Icon-Menu" />
      </a>
      <div id="ButtonBottomProfileMenu">
      <div class="col d-flex align-items-center justify-content-end " >
          <p class="BD-Color H-16 my-2 mx-xl-5 mx-2">|</p>
          <div class="dropdown d-inline-block ml-xl-2 ml-0 pr-md-0 pr-sm-4 pr-1">
              <button type="button" class="btn header-item waves-effect px-0" id="page-header-user-dropdown"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span class=" mr-2 BD-Color H-16 my-2 pl-2 d-none d-sm-inline-block">Joe Doe</span>

                  <img class="rounded-circle header-profile-user" src="assets/images/users/avatar-2.jpg"
                      alt="Header Avatar">
                  <i class="mdi mdi-chevron-down d-sm-inline-block H-20 BD-Color pr-2 ArrowIcon" ></i>

              </button>
              <div class="dropdown-menu dropdown-menu-right">
                  <p class="BD-Color text-center H-16 my-2 mr-xl-2 mr-0 d-xs-none d-inline-block col-12">Joe Doe</p>
                  <p class="BD-Color text-center H-16 my-2 mr-xl-2 mr-0 col-12 LineBlueBottom">Last login 12 May 2021 5:58 PM</p>

                  <a class="dropdown-item d-flex align-items-center justify-content-between H-16 BD-Color LineBlueBottom"
                  href="javascript:void(0)">
                  <span>Go to website</span>
                  <img src="~assets/Icons/Profile/angle-left.svg" class="H-16">

                  </a>
                  <a class="dropdown-item d-flex align-items-center justify-content-between H-16 BD-Color LineBlueBottom"
                  href="javascript:void(0)">
                      <span>Profile</span>
                      <img src="~assets/Icons/Profile/Dark-user.svg" class="H-16">
                  </a>
                  <a class="dropdown-item d-flex align-items-center justify-content-between H-16 BD-Color LineBlueBottom"
                  href="javascript:void(0)">
                      <span>Sign out</span>
                      <img src="~assets/Icons/Profile/sign-out-alt.svg" class="H-16">
                  </a>
              </div>
          </div>
      </div>
  </div>
  </div> -->

    <div class="topnav" style="padding-top: 20px;">
        <div class="container-fluid px-0">
            <nav class="navbar navbar-light navbar-expand-lg topnav-menu  pl-lg-5 pr-lg-5 px-md-3">
                <div class="Menu-Logo d-flex justify-content-between col px-2">
                    <!-- LOGO -->
                    <div class="navbar-brand-box d-flex justify-content-start col px-0">
                        <a href="Home.html" class="logo">
                            <img src="~assets/images/logo-hedpay-header-top.svg"/>
                        </a>
                    </div>
                    <div class="Menu-Mobile d-flex justify-content-end col px-0">
                        <div  id="topnav-menu-content" class="collapse navbar-collapse justify-content-end ">
                            <ul class="navbar-nav align-items-end">
                                <nuxt-link to="/app/dashboard">
                                    <li class="nav-item col px-0">
                                        <a class="nav-link top-nav-item fontW-500">
                                            <img src="~assets/images/home.svg" class="nav-img "/> Dashboard
                                        </a>
                                    </li>
                                </nuxt-link>
                                <nuxt-link to="/app/wallets">
                                    <li class="nav-item col px-0">
                                        <a class="nav-link top-nav-item fontW-500">
                                            <img src="~assets/images/wallet.svg" class="nav-img"/> Wallet
                                        </a>
                                    </li>
                                </nuxt-link>
                                <nuxt-link to="/app/exchange">
                                    <li class="nav-item col px-0">
                                        <a class="nav-link top-nav-item fontW-500">
                                            <img src="~assets/images/exchange.svg" class="nav-img"/> Exchange
                                        </a>
                                    </li>
                                </nuxt-link>
                                <nuxt-link to="/app/packages">
                                    <li class="nav-item col px-0">
                                        <a class="nav-link top-nav-item fontW-500">
                                            <img src="~assets/images/fund-package.svg" class="nav-img"/> Fund Packages
                                        </a>
                                    </li>
                                </nuxt-link>
                                <nuxt-link to="/app/faq">
                                    <li class="nav-item col px-0">
                                        <a class="nav-link top-nav-item fontW-500">
                                            <img src="~assets/images/questions.svg" class="nav-img"/> FAQ
                                        </a>
                                    </li>
                                </nuxt-link>
                            </ul>
                        </div>

                        <div class="d-flex justify-content-between">
                        <div class="Login-Nav d-none">
                            <ul class="list-unstyled d-none d-flex justify-content-end align-items-center mb-0 ">
                                <li><button type="button" class="btn waves-effect  Nav-Signin" onclick="parent.open('Login.html')">Sign In</button></li>
                                <li><button type="button" class="btn waves-effect Nav-Account" onclick="parent.open('Login.html')">Open an Account</button></li>
                            </ul>
                        </div>
                        <button type="button" class="btn btn-sm mr-2 font-size-16 d-lg-none header-item waves-effect waves-light" data-toggle="collapse" data-target="#topnav-menu-content">
                        <span style="color: #17B0B7 !important; font-size: 24px;"><i class="fa fa-fw fa-bars"></i></span>
                        </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</header>
</template>

<style src="./style.scss" lang="scss"></style>
<script src="./script.js"></script>
