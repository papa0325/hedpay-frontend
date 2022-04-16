<template>
  <div class="2fa">
    <div class="container-fluid pb-5 ">
      <div class="d-flex flex-column align-items-center col-12">
        <p class="H-18 fontW-500 TextBlue text-center">Enable your Google Authenticator</p>
        <!-- STEP 1 -->
        <!-- PROGRESS BAR -->
        <div class="progress mb-2 Step1" v-if="step1">
          <div class="progress-bar Bg-LBlue "  role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <p class="H-14 LigthBlue text-left my-0"></p>
          </div>
        </div>
        <div class="Box-Card Two-Container row flex-column align-items-center Step1 p-md-5 p-2" v-if="step1">
          <div class=" d-flex justify-content-center" >
            <img class="col-xl-4 col-md-6 col-sm-8 " style="max-width: 270px;" src="~assets/Images/logo-hedpay-header-top.svg" />
          </div>
          <p class="H-20 fontW-500 TextDark text-center">Step 1</p>
          <p class="H-20 fontW-500 LigthBlue text-center">Install the App</p>
          <p class="H-14 fontW-400 TextDark text-center pt-2">Install the Google Authenticator mobile app</p>

          <div class="d-flex flex-column flex-md-row align-items-center justify-content-center col-xl-10  py-4">
            <img class="col-6 pr-md-0 " style="max-width: 250px;" src="~assets/Icons/Groupe290.svg"/>
            <img class="col-6 pl-md-0 " style="max-width: 250px;" src="~assets/Icons/Groupe291.svg"/>
          </div>

          <div class="d-flex justify-content-end mt-auto" >
            <button type="button" class="Bg-LBlue TextWhite rounded px-5 py-2 text-white" v-on:click="GoTo('Step1', 'Step2')" >Next step</button>
          </div>
        </div>
        <!-- STEP 2 -->
        <!-- PROGRESS BAR -->
        <div class="progress mb-2 Step2" v-if="step2">
          <div class="progress-bar Bg-LBlue "  role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <p class="H-14 LigthBlue text-left my-0"></p>
          </div>
        </div>
        <div class="Box-Card Two-Container row flex-column align-items-center Step2 p-md-5 p-2" v-if="step2">
          <div class=" d-flex justify-content-center" >
            <img class="col-xl-4 col-md-6 col-sm-8 " style="max-width: 270px;" src="~assets/Images/logo-hedpay-header-top.svg" />
          </div>
          <p class="H-24 fontW-500 TextDark text-center">Step 2</p>
          <p class="H-20 fontW-500 LigthBlue text-center">Scan QR code</p>
          <div class="d-flex flex-column flex-md-row justify-content-between  col-12 px-md-5">
            <div class="d-flex flex-column align-items-center col-md-6 self-align-center">
              <p class="H-14 fontW-400 TextDark text-center pt-2">Scan this QR code with the Google Authenticator</p>
              <img class=" pr-md-0 " style="max-width: 210px;" src="Images/Profile/QR_Example.png"/>
            </div>
            <div class="d-flex flex-column align-items-center col-md-6 ">
              <p class="H-14 fontW-400 TextDark text-center pt-2">If you can’t scan the QR code, enter this code manually into the app</p>
              <div class="d-flex px-0 col-12">
                <input type="text" style="border-right:none;border-radius: 6px 0 0 6px;" class="fontW-600 Invite-Input H-16 TextDark form-control col-9 " id="Amount-Transfer" placeholder="HDP0xb6CE559DC67268b8c431757734656678…"/>
                <button class="d-flex justify-content-center align-items-center col-3 Ref-Button my-0" style="border-left:none;border-radius:0 6px 6px 0;max-height: 58px;">
                  <p class="H-16 TextWhite mb-0">Copy</p>
                </button>
              </div>
            </div>
          </div>
          <div class=" d-flex justify-content-between align-items-center py-4 col-12">
            <button type="button" v-on:click="GoTo('Step2','Step1')" class="btn py-2 col-md-6 LigthBlue H-14">Go back</button>
            <button type="button" v-on:click="GoTo('Step2','Step3')" class="Bg-LBlue rounded py-2 col-md-6 TextWhite H-14 ">Next step</button>
          </div>
        </div>
        <!-- STEP 3 -->
        <!-- PROGRESS BAR -->
        <div class="progress mb-2 Step3" v-if="step3">
          <div class="progress-bar Bg-LBlue "  role="progressbar" style="width: 75%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <p class="H-14 LigthBlue text-left my-0"></p>
          </div>
        </div>
        <div class="Box-Card Two-Container row flex-column align-items-center  Step3 p-md-5 p-2" v-if="step3">
          <div class=" d-flex justify-content-center" >
            <img class="col-xl-4 col-md-6 col-sm-8 " style="max-width: 270px;" src="~assets/Images/logo-hedpay-header-top.svg" />
          </div>
          <p class="H-24 fontW-500 TextDark text-center">Step 3</p>
          <p class="H-20 fontW-500 LigthBlue text-center">Backup key</p>

          <p class="H-14 fontW-400 TextDark text-center pt-2">Please copy this key into a safe place. It’ll allow you to reset your Google Authenticator even if you lose your phone</p>

          <div class="d-flex justify-content-center col py-3">
            <input type="text"  class="Invite-Input H-16 fontW-600 TextDark col-md-6 " value="JY7TMRJMGRUGTYUSBE"/>
          </div>
          <img class=" py-2 " src="~assets/Icons/Profile/lock-info.svg"/>
          <p class="H-14 fontW-400 TextDark text-center py-2">Resetting your Google Authenticator requires opening a support ticket, and takes at least 7 days to process</p>
          <div class=" d-flex justify-content-between align-items-center py-4 col-12">
            <button type="button" v-on:click="GoTo('Step3','Step2')" class="btn py-2 col-md-6 LigthBlue H-14">Go back</button>
            <button type="button" v-on:click="GoTo('Step3','Step4')" class="Bg-LBlue rounded py-2 col-md-6 TextWhite H-14 ">Next step</button>
          </div>
        </div>
        <!-- STEP 4 -->
        <!-- PROGRESS BAR -->
        <div class="progress mb-2 Step4" v-if="step4">
          <div class="progress-bar Bg-LBlue "  role="progressbar" style="width: 100%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <p class="H-14 LigthBlue text-left my-0"></p>
          </div>
        </div>
        <div class="Box-Card Two-Container row flex-column align-items-center  Step4 p-md-5 p-2"  v-if="step4">
          <div class=" d-flex justify-content-center" >
              <img class="col-xl-4 col-md-6 col-sm-8 " style="max-width: 270px;" src="~assets/Images/logo-hedpay-header-top.svg" />
          </div>
          <p class="H-24 fontW-500 TextDark text-center">Step 4</p>
          <p class="H-20 fontW-500 LigthBlue text-center">Enable Google Authenticator</p>

          <p class="H-14 fontW-400 TextDark text-center pt-2">Please copy this key into a safe place. It’ll allow you to reset your Google Authenticator even if you lose your phone</p>

          <div class="form-group col-md-6">
              <label for="password" class="TextBlue H-14 ml-3">Account password *</label>
              <input id="password" type="text" class="form-control H-16 Input-F-Quick TextDark"  placeholder="Enter your password" />
          </div>
          <div class="form-group col-md-6">
            <label for="Authentication" class="TextBlue H-14 ml-3">Google Authentication Code *</label>
            <input id="Authentication" type="text" class="form-control H-16 Input-F-Quick TextDark"  placeholder="Enter your code" />
          </div>

          <div class=" d-flex justify-content-between align-items-center py-4 col-12">
            <button type="button" v-on:click="GoTo('Step4','Step3')" class="btn py-2 col-md-6 LigthBlue H-14">Go back</button>
            <button type="button" v-on:click="GoTo('Step4','Step1')" class="Bg-LBlue rounded py-2 col-md-6 TextWhite H-14 ">Next step</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./style.scss" lang="scss"></style>
<script src="./script.js"></script>
