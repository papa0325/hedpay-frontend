<template>
  <div class="sign-up-content px-0 py-1 d-flex justify-content-center">
    <section class="container-pricing col-12" v-if="pageStep === 0">
      <div class="pricing-container">
        <div class="col-12 px-0">
          <p class="text-xl-left text-center mb-0 FW600 FS-24">
            {{ $t("auth.form.options.title") }}
          </p>
        </div>
        <!-- All USD$ equivelant -->
        <div class="d-flex flex-xl-row flex-column justify-content-center align-items-xl-start align-items-center mx-0 py-2">
          <div class="position-relative card-option-text mx-0 col-md-3 px-0 py-4">
            <p class="FCBlue FS-20 text-left pt-3 col-12 px-0">
              {{ $t("auth.form.options.equivalent") }}
            </p>
            <p class="FS-14 FW600 FCDark mb-0 text-left underline" v-for="(order, i) in normal_o" :key="i">
              {{ order }}
            </p>
          </div>
          <!-- Limited -->
          <div class="position-relative card-option d-flex flex-column align-items-center justify-content-start col-12 col-md-3 p-0 pb-4">
            <p class="FCDark text-center FS-14 pricingw FW600">
              {{ $t("auth.form.options.limited") }}
            </p>
            <p class="FCDark FS-14 text-center text-top-pricing">
              {{ $t("auth.form.options.equivalent_l") }}
            </p>
            <p class="FS-14 FCDark text-center underline mb-0 d-flex flex-column flex-md-row justify-content-xl-center justify-content-between"
                      v-for="(price, i) in pricingData" :key="i">
              <span class="resppricing">{{ price.title }}</span>
              {{ price.limit }}
            </p>
            <div class="d-flex justify-content-center align-items-center pt-3">
              <button class="btn FS-14 FW600 FCDark px-3">
                {{ $t("auth.form.step") }}
              </button>
              <span class="BlueArrow" v-on:click="setStep(1, 2)">
                <i class="fas fa-arrow-right"></i>
              </span>
            </div>
          </div>
          <!-- Standard -->
          <div class="position-relative card-option d-flex flex-column align-items-center justify-content-start col-12 col-md-3 p-0 pb-4">
            <p class="FCDark text-center FS-14 pricingw FW600">
              {{ $t("auth.form.options.standard") }}
            </p>
            <p class="FCDark FS-14 text-center text-top-pricing">
              {{ $t("auth.form.options.equivalent_s") }}
            </p>
            <p class="FS-14 FCDark text-center underline mb-0 d-flex flex-column flex-md-row justify-content-xl-center justify-content-between"
                      v-for="(price, i) in pricingData" :key="i">
              <span class="resppricing">{{ price.title }}</span>
              {{ price.standard }}
            </p>
            <div class="d-flex justify-content-center align-items-center pt-3">
              <button class="btn FS-14 FW600 FCDark px-3">
                {{ $t("auth.form.step") }}
              </button>
              <span class="BlueArrow" @click="setStep(2, 2)"
                ><i class="fas fa-arrow-right"></i
              ></span>
            </div>
          </div>
          <!-- Pro -->
          <div class="position-relative card-option d-flex flex-column align-items-center justify-content-start col-12 col-md-3 p-0 pb-4">
            <p class="FCDark text-center FS-14 pricingw FW600">
              {{ $t("auth.form.options.pro") }}
            </p>
            <p class="FCDark FS-14 text-center text-top-pricing">
              {{ $t("auth.form.options.equivalent_p") }}
            </p>
            <!-- <button class="Blue-Button PricingW Web-Pricing" >Next step</button> -->
            <p class="FS-14 FCDark text-center underline mb-0 d-flex flex-column flex-md-row justify-content-xl-center justify-content-between"
                  v-for="(price, i) in pricingData"  :key="i">
              <span class="resppricing">{{ price.title }}</span>{{ price.pro }}
            </p>
            <div class="d-flex justify-content-center align-items-center pt-3">
              <button class="btn FS-14 FW600 FCDark px-3">
                {{ $t("auth.form.step") }}
              </button>
              <span class="BlueArrow" @click="setStep(3, 1)"
                ><i class="fas fa-arrow-right"></i
              ></span>
            </div>
          </div>
        </div>
        <p class="FS-16 FCBlue mt-2 text-center col-12 BackButton" @click="previousStep(1)">
          {{ $t("auth.form.backbut") }}
        </p>
      </div>
    </section>
    <!-- Pro => next step -->
    <section class="container-geth GetHedpays" v-else-if="pageStep === 1">
      <div class="d-flex flex-column align-items-center">
        <p class="FS-30 FCDark text-center FW600 my-5">
          {{ $t("auth.form.comment.title_q") }}
        </p>
        <span class="FS-18 FCOrange"><i class="fas fa-info-circle"></i></span>
        <p class="FS-18 FCOrange text-center FW600">
          {{ $t("auth.form.comment.title_qq") }}
        </p>

        <p class="FS-14 FCDark py-3 text-center">
          {{ $t("auth.form.comment.description") }}
        </p>

        <div class="d-flex flex-lg-row flex-column-reverse justify-content-between align-items-center col-12 py-5">
          <p class="FS-16 FCBlue ml-lg-4 mt-lg-0 mt-5 BackButton" @click="previousStep(1)">
            {{ $t("auth.form.backbut") }}
          </p>
          <button class="DarkButton" @click="nextStep(1)">
            <span>{{ $t("auth.form.step") }}</span>
          </button>
        </div>
      </div>
    </section>
    <!-- Login  -->
    <section class="container-w" v-else-if="pageStep === 2">
      <div class="account-container d-flex flex-column justify-content-start align-content-between">
        <div class="d-flex flex-lg-row flex-column justify-content-between">
          <div class="col-12 col-lg-5 d-flex flex-column">
            <p class="mt-4 FCDark FS-30 FW600">
              {{ $t("auth.form.account_name.left_title") }}
            </p>
            <client-only>

              <ValidationProvider class="form-group mt-1 pr-0 mb-0" tag="div" name="country" rules="required">
                <label for="Country" class="FCBlue FS-14 ml-3">
                  {{$t("auth.form.account_name.country")}}
                </label>
                <div class="selectdiv">
                  <label class="w-100">
                    <select id="Country" name="Country" :value="modelCountry" v-model="country" class="mb-1 select-wrapper form-control FS-16 InputF FCDark">
                      <option v-for="country in countryList" :key="country" :value="country" :selected="country === modelCountry">
                        {{ country }}
                      </option>
                    </select>
                  </label>
                </div>
              </ValidationProvider>

              <ValidationProvider class="form-group pr-0" tag="div" v-slot="{ errors }" name="nickName" rules="required">
                <label for="nickname" class="FCBlue FS-14 ml-3">
                  {{$t("auth.form.account_name.nickname")}}
                </label>
                <input id="nickname" type="text" class="form-control FS-13 InputF FCDark" v-model="nickName" :class="{ error: errors[0] }" placeholder="Your nickname" />
                <span class="error-msg f-4" v-if="errors[0]">*{{ errors[0] }}</span>
              </ValidationProvider>

              <ValidationProvider class="form-group pr-0" tag="div" v-slot="{ errors }" name="email" rules="required|email">
                <label for="email" class="FCBlue FS-14 ml-3">
                  {{$t("auth.form.account_name.email")}}
                </label>
                <input id="email" type="email" class="form-control FS-16 InputF FCDark" v-model="email" :class="{ error: errors[0] }" placeholder="Your email" />
                <span class="error-msg" v-if="errors[0]">*{{ errors[0] }}</span>
              </ValidationProvider>

              <ValidationProvider class="form-group pr-0" tag="div" v-slot="{ errors }" name="password" rules="password">
                <label for="password" class="FCBlue FS-14 ml-3">
                  {{$t("auth.form.account_name.password")}}
                </label>
                <input id="password" type="password" v-model="password" class="form-control FS-16 InputF FCDark" :class="{ error: !!errors[0] }" placeholder="********" />
                <span class="error-msg" v-if="errors[0]">*{{ errors[0] }}</span>
              </ValidationProvider>

              <ValidationProvider class="form-group pr-0" tag="div" v-slot="{ errors }" name="rpassword" rules="password">
                <label for="rpassword" class="FCBlue FS-14 ml-3">
                  {{$t("auth.form.account_name.rpassword")}}
                </label>
                <input id="rpassword" type="password" v-model="rpassword" class="form-control FS-16 InputF FCDark" :class="{ error: !!errors[0] }" placeholder="********" />
                <span class="error-msg" v-if="errors[0]">*{{ errors[0] }}</span>
              </ValidationProvider>

            </client-only>
          </div>

          <div class="col-12 col-lg-5 d-flex flex-column">
            <p class="mt-4 FCBlue FS-30 FW600"></p>
            <client-only>

              <ValidationProvider class="form-group mt-lg-5 mb-0 w-50" tag="div" name="nameTitle" rules="required">
                <label for="Title" class="FCBlue FS-14 ml-3">Title *</label>
                <div class="selectdiv w-100">
                  <label class="w-100">
                    <select id="Title" class="select-wrapper form-control FS-16 InputF FCDark" v-model="nameTitle">
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs.</option>
                      <option value="Ms">Ms</option>
                    </select>
                  </label>
                </div>
              </ValidationProvider>

              <ValidationProvider class="form-group" tag="div" v-slot="{ errors }" name="firstName" rules="required">
                <label for="First" class="FCBlue FS-14 ml-3">First name *</label>
                <input id="First" type="text" class="form-control FS-16 InputF FCDark" v-model="firstName" :class="{ error: !!errors[0] }" placeholder="First name" />
                <span class="error-msg" v-if="errors[0]">*{{ errors[0] }}</span>
              </ValidationProvider>

              <ValidationProvider class="form-group" tag="div" v-slot="{ errors }" name="middleName" rules="required">
                <label for="Middle" class="FCBlue FS-14 ml-3">Middle name(s)</label>
                <input id="Middle" type="text" class="form-control FS-16 InputF" v-model="middleName" :class="{ error: !!errors[0] }" placeholder="Middle name" />
                <span class="error-msg" v-if="errors[0]">*{{ errors[0] }}</span>
              </ValidationProvider>

              <ValidationProvider class="form-group" tag="div" v-slot="{ errors }" name="lastName" rules="required">
                <label for="Last" class="FCBlue FS-14 ml-3">Last name *</label>
                <input id="Last" type="text" class="form-control FS-16 InputF" v-model="lastName" :class="{ error: !!errors[0] }" placeholder="Last name" />
                <span class="error-msg" v-if="errors[0]">*{{ errors[0] }}</span>
              </ValidationProvider>

            </client-only>
          </div>
        </div>
        <div class="d-flex flex-lg-row flex-column-reverse justify-content-between align-items-center mt-3">
          <p class="FS-16 FCBlue ml-lg-4 mt-lg-0 mt-5 BackButton" @click="previousStep(2)">
            {{ $t("auth.form.backbut") }}
          </p>
          <button v-if="stepType == 1" class="BlueButton" @click="nextStep(3)">
            {{ $t("profile.buttons.create_account") }}
          </button>
          <button v-else class="DarkButton" @click="nextStep(1)">
            <span>{{ $t("auth.form.step") }}</span>
          </button>
        </div>
      </div>
    </section>
    <!-- Your details -->
    <section class="container-w" v-else-if="pageStep === 3">
      <div class="box-card welcome-container d-flex flex-column justify-content-start align-content-between">
        <p class="mt-4 FCDark FW600 FS-24">Your details</p>
        <div class="sign-up-row">
          <div class="col-lg-6">
            <div class="sign-up-row flex-column flex-sm-row">
              <div class="form-group col-sm-4">
                <label for="AddressNo" class="FCBlue FS-14 ml-3">No. *</label>
                <input id="AddressNo" type="text" class="form-control FS-16 InputF" placeholder="#" v-model="postNo" />
              </div>
              <div class="form-group col">
                <label for="StreetAddress" class="FCBlue FS-14 ml-3">Street *</label>
                <input id="StreetAddress" type="text" class="form-control FS-16 InputF" placeholder="Your street" v-model="street" />
              </div>
            </div>
            <div class="sign-up-row flex-column flex-sm-row">
              <div class="form-group col-sm-4">
                <label for="AddressApt" class="FCBlue FS-14 ml-3">Apt. </label>
                <input id="AddressApt" type="text" class="form-control FS-16 InputF" placeholder="# Apt" v-model="postApt" />
              </div>
              <div class="form-group col">
                <label for="AddressCity" class="FCBlue FS-14 ml-3">City *</label>
                <input id="AddressCity" type="text" class="form-control FS-16 InputF" placeholder="Your city" v-model="city" />
              </div>
            </div>
            <div class="sign-up-row flex-column flex-sm-row">
              <div class="form-group col-sm-4">
                <label for="AddressPostal" class="FCBlue FS-14 ml-3">Postal Code *</label>
                <input id="AddressPostal" type="text" class="form-control FS-16 InputF" placeholder="Your postal code" v-model="postCode" />
              </div>
              <div class="form-group col">
                <label for="AddressProvince" class="FCBlue FS-14 ml-3">Province *</label>
                <input id="AddressProvince" type="text" class="form-control FS-16 InputF" placeholder="Your province" v-model="province" />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-0">
              <label for="Phone" class="FCBlue FS-14 ml-3"> Phone number</label>
              <div class="input-group-prepend d-flex flex-column flex-sm-row col-12 px-0">
                <div class="selectdiv col-12 col-sm-5 px-0">
                  <label class="w-100">
                    <select name="countryCode" class="select-wrapper form-control FS-16 InputF FCDark"
                      style="box-shadow: 3px 3px 12px #00000019, none, 3px 3px 12px #00000019, 3px 3px 12px #00000019 !important; border-radius: 6px 0 0 6px !important;
                        border-right: 1px solid #e2e2e2 !important;" v-model="phoneNo">
                      <option data-countryCode="CA" value="1" Selected>
                        Canada (+1)
                      </option>
                      <option data-countryCode="US" value="2">USA (+1)</option>
                      <optgroup label="Other countries">
                        <option data-countryCode="ccode.code" value="ccode.dial_code" v-for="(ccode, i) in countryCode" :key="i+2">
                          {{ ccode.name }} ({{ ccode.dial_code }})
                        </option>
                      </optgroup>
                    </select>
                  </label>
                </div>
                <input id="Phone" type="number" maxlength="10" class="col form-control FS-16 InputF FCDark"
                    style="border-radius: 0 6px 6px 0 !important; box-shadow: 3px 3px 12px #00000019, 3px 3px 12px #00000019, 3px 3px 12px #00000019, none;"
                    placeholder="555 555 55 55" v-model="phoneNumber" />
              </div>
            </div>
            <div class="form-group px-0 mb-0">
              <label for="" class="FCBlue FS-14 ml-3">Date of birth *</label>
              <div class="input-group-prepend flex-column flex-sm-row justify-content-between col-12 px-0">
                <div class="selectdiv col-sm-5 px-0">
                  <label class="w-100">
                    <select name="" class="select-wrapper form-control FS-16 InputF FCDark w-100" style="padding: 9px 10px" v-model="birthMonth">
                      <option v-for="(month, i) in monthList" :key="i" :value="i+1">
                        {{ month }}
                      </option>
                    </select>
                  </label>
                </div>
                <div class="d-flex col-sm-7 px-0">
                  <input id="Day-P" type="number" maxlength="2" class="form-control FS-16 InputF FCDark col-6" style="padding: 9px 10px" placeholder="day" v-model="birthDay" />
                  <input id="Year-P" type="number" maxlength="4" class="form-control FS-16 InputF FCDark col-6" style="padding: 9px 10px" placeholder="year" v-model="birthYear" />
                </div>
              </div>
            </div>
            <div class="form-group mb-0 mt-1 col-sm-5 px-0">
              <label for="Gender" class="FCBlue FS-14 ml-3">Gender *</label>
              <div class="selectdiv w-100">
                <label class="w-100">
                  <select id="Gender" class="select-wrapper form-control FS-14 InputF FCDark" v-model="gender">
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-4">
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body d-flex flex-column justify-content-between">
                <div class="d-flex justify-content-start justify-content-between">
                  <h4 class="card-title col-lg-10 col-11 px-0">Your current picture</h4>
                  <div class="position-relative d-flex justify-content-start">
                    <span class="help-box orangecolor Quest-icon ml-2"><i class="fas fa-question-circle"></i></span>
                    <div class="expand-box Profile_Exp_Box Profile_Exp_Box box-card text-justify FS-14 FCDark position-absolute p-4">
                      <p class="FS-16 FCGray">Information about how to take the KYC picture.</p>
                    </div>
                    <!-- <p class="expand-box box-card text-justify FS-14 FCDark position-absolute p-4 ">The system will only accept one PDF document, if the ID document requires 2 sides, please put it all together in one PDF document</p> -->
                  </div>
                </div>
                <div class="form-group mb-0 pr-0">
                  <div class="kyc-avatar d-flex align-items-center justify-content-start">
                    <p class="mb-0 pr-2 FS-16 FCDark">Take a picture</p>
                    <button class="button-camara Avatar-Button" type="button">
                      <span class="icon-camera"><i class="fas fa-camera"><input type="file" accept="image/*" hidden /></i></span>
                    </button>
                  </div>
                </div>
                <vue-dropify v-model="curFaceUrl" message="Choose a file" uploadIcon="far fa-cloud-upload"/>
                <!-- <input type="file" class="dropify"  capture="camera" accept="image/*"/> -->
                <!-- <input
                  type="file"
                  class="vue-dropify"
                  capture="camera"
                  accept="image/*"
                  @change="handleFileDoc"
                /> -->
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Your identity document</h4>
                <span class="d-flex align-items-center justify-content-between DocSelected mb-2">
                  <div class="selectdiv col-11 px-0">
                    <label class="col-12 px-0 mb-0">
                      <select name="IdentityDocument" class="select-wrapper form-control FS-16 InputF FCDark" style="width: 100%; padding: 9px 10px" onchange="IdentityDocument(this);">
                        <option value="select">-Select-</option>
                        <option value="Passport">Passport</option>
                        <option value="OfficialCard">
                          Citizenship card/Residency card
                        </option>
                        <option value="DLicense">Driver license</option>
                      </select>
                    </label>
                  </div>
                  <div class="position-relative d-flex justify-content-start">
                    <span class="help-box OrangeColor Quest-icon ml-2"><i class="fas fa-info-circle"></i></span>
                    <div class="expand-box Profile_Exp_Box box-card text-justify FS-14 FCDark position-absolute p-4">
                      <img class="col-12 Img-Doc-pass" style="display: none" src="Images/Profile/passport-bilingual.jpg" />
                      <img class="col-12 Img-Doc-greeg" style="display: none" src="Images/Profile/a_green_card.jpg" />
                      <img class="col-12 Img-Doc-citi" style="display: none" src="Images/Profile/Citizenship card.jpg" />
                    </div>
                    <p class="expand-box box-card text-justify FS-14 FCDark position-absolute p-4 ">The system will only accept one PDF document, if the ID document requires 2 sides, please put it all together in one PDF document</p>
                  </div>
                </span>
                <!-- <input type="file" class="dropify"/> -->
                <vue-dropify v-model="identityFileUrl" message="Choose a file" uploadIcon="far fa-cloud-upload"></vue-dropify>
                <!-- <input type="file" class="vue-dropify" /> -->
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body d-flex flex-column justify-content-between">
                <div class="d-flex justify-content-start justify-content-between">
                  <h4 class="card-title col-lg-10 col-11 px-0">Yourself with your identity document</h4>
                  <div class="position-relative d-flex justify-content-start">
                    <span class="help-box OrangeColor Quest-icon ml-2"><i class="fas fa-question-circle"></i></span>
                    <div class="expand-box Profile_Exp_Box box-card text-justify FS-14 FCDark position-absolute p-4">
                      <img class="col-12" src="Images/Profile/a_green_card.jpg" />
                    </div>
                    <p class="expand-box box-card text-justify FS-14 FCDark position-absolute p-4 ">The system will only accept one PDF document, if the ID document requires 2 sides, please put it all together in one PDF document</p>
                  </div>
                </div>
                <div class="form-group mb-0 pr-0">
                  <div class="KYC-Avatar d-flex align-items-center justify-content-start">
                    <p class="mb-0 pr-2 FS-16 FCDark">Take a picture</p>
                    <button class="button-camara Avatar-Button" type="button">
                      <span class="icon-camera"><i class="fas fa-camera"><input type="file" accept="image/*" hidden /></i></span>
                    </button>
                  </div>
                </div>
                <!-- <input type="file" class="dropify" capture="camera" accept="image/*"/> -->
                <vue-dropify v-model="identityFaceUrl" message="Choose a file" uploadIcon="far fa-cloud-upload"></vue-dropify>
                <!-- <input
                  type="file"
                  class="vue-dropify"
                  capture="camera"
                  accept="image/*"
                /> -->
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end align-items-center mt-auto mb-2">
          <!--button
            class="BlueButton"
            onclick="$('.KYC-Updated').show('slow');"
            @click="handleFileUpload();"
          >
            Upload
          </button -->
          <button class="BlueButton" onclick="$('.KYC-Updated').show('slow');">Upload</button>
        </div>
        <div class="KYC-Updated" style="display: none">
          <div class="my-5 row justify-content-between align-items-center px-3">
            <button class="btn FS-20 p-1 DarkBlueButton FCWhite mb-2">KYC</button>
            <p class="mb-0 FS-16 FCBlue">Successfully done<span class="FCBlue px-2"><i class="fas fa-check"></i></span></p>
            <p class="mb-0 FS-16 FCBlue">18 / may / 2021</p>
          </div>
          <p class="FS-16 FCDark text-center my-3">
            <span class="OrangeColor px-2"><i class="fas fa-bell"></i></span>Next KYC update scheduled for the: </p>
          <div class="d-flex justify-content-center">
            <button class="btn DarkBlueButton FCWhite FS-16 align-self-center">18 / August / 2021</button>
          </div>
          <p class="mb-0 FS-16 FCGray text-center my-5">An alert will be sent to remind you to update your KYC.</p>
        </div>
        <div class="d-flex flex-column">
          <span style="color: #ffa300"><i class="fas fa-info-circle"></i></span>
          <p class="FS-16 FCGray">
            Information requested is required by Hedpay UAB according to the Law
            on the Prevention of Money Laundering and Terrorist Financing of the
            Republic of Lithuania and all other international standards in order
            to ensure the «Knowledge of Client’s Activities», as well as for
            providing you with high quality and secure financial services.
          </p>
        </div>
        <div class="d-flex flex-lg-row flex-column-reverse justify-content-between align-items-center mt-2">
          <p class="FS-16 FCBlue ml-lg-4 mt-lg-0 mt-5 BackButton" @click="previousStep(1)">
            {{ $t("auth.form.backbut") }}
          </p>
          <button v-if="stepType == 2" class="DarkButton" @click="nextStep(2)">
            <span>{{ $t("auth.form.step") }}</span>
          </button>
          <button v-else class="DarkButton" @click="nextStep(1)">
            <span>{{ $t("auth.form.step") }}</span>
          </button>
        </div>
      </div>
    </section>
    <section class="container-w" v-else-if="pageStep === 4">
      <div class="welcome-container d-flex flex-column justify-content-start align-content-between">
        <div class="d-flex flex-lg-row flex-column justify-content-between">
          <div class="col-12 col-lg-5">
            <p class="mt-4 FCDark FW600 FS-24">Passport</p>
            <div class="form-group mt-4 pr-0">
              <label for="Passport" class="FCBlue FS-14 ml-3">Passport / ID number *</label>
              <input id="Passport" type="text" class="form-control FS-16 InputF FCDark" placeholder="Enter your passport number" v-model="passId" />
            </div>
            <div class="form-group mt-4 pr-0">
              <label for="Expiration" class="FCBlue FS-14 ml-3">Expiration date *</label>
              <div class="input-group-prepend justify-content-between col-12 px-0">
                <div class="selectdiv" style="width: 40%">
                  <label class="w-100">
                    <select name="LadaCode" class="select-wrapper form-control FS-16 InputF FCDark" style="width: 100%; padding: 9px 10px" v-model="passExpirMonth">
                      <option v-for="(month, i) in monthList" :key="i" :value="i+1">
                        {{ month }}
                      </option>
                    </select>
                  </label>
                </div>
                <input id="Day-P" type="number" maxlength="2" class="form-control FS-16 InputF FCDark" style="width: 25%; padding: 9px 10px" placeholder="day" v-model="passExpirDay" />
                <input id="Year-P" type="number" maxlength="4" class="form-control FS-16 InputF FCDark" style="width: 25%; padding: 9px 10px" placeholder="year" v-model="passExpirYear" />
              </div>
            </div>
            <div class="form-group pr-0">
              <label for="Issue" class="FCBlue FS-14 ml-3">Place of issue *</label>
              <div class="input-group-prepend justify-content-between col-12 px-0">
                <div class="mt-0 pr-0 selectdiv col-12 px-0">
                  <label style="width: 100%">
                    <select id="Issue" name="Country" class="select-wrapper populate InputF FS-18 Inp-Contact col-12" v-model="passPlaceIssue">
                      <option v-for="(country, i) in countryList" :key="i" :value="country">
                        {{ country }}
                      </option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-5">
            <p class="mt-4 FCDark FW600 FS-24">Employment</p>
            <div class="form-group mt-4 pr-0">
              <label for="Expiration" class="FCBlue FS-14 ml-3">Employment *</label>
              <div class="selectdiv col-12 px-0">
                <label class="w-100">
                  <select name="Employment" class="select-wrapper form-control FS-16 InputF FCDark" style="width: 100%; padding: 9px 10px" v-model="employment">
                    <option :value="1" Selected>Employed</option>
                    <option :value="2">Unemployed</option>
                  </select>
                </label>
              </div>
            </div>
            <div class="form-group mt-4 pr-0">
              <label for="Expiration" class="FCBlue FS-14 ml-3">Anual income *</label>
              <div class="selectdiv col-12 px-0">
                <label class="w-100">
                  <select name="Income" class="select-wrapper form-control FS-16 InputF FCDark" style="width: 100%; padding: 9px 10px" v-model="annualIncome">
                    <option :value="1" Selected>20,000 - 50,000</option>
                    <option :value="2">50,000 - 70,000</option>
                    <option :value="3">70,000 - 100,000</option>
                  </select>
                </label>
              </div>
            </div>
            <p class="mt-4 FCDark FW600 FS-24">Proof of address</p>
            <span class="row align-items-center justify-content-between DocSelected mb-2">
              <p class="ml-3 FS-16 FCBlue mb-0">Upload a file *</p>
              <div class="position-relative d-flex justify-content-start">
                <span class="Help-Box OrangeColor Quest-icon ml-2"><i class="fas fa-info-circle"></i></span>
                <ul class="expand-box Profile_Exp_Box box-card text-justify position-absolute FS-14 FCDark p-4">
                  <li class="FW500">The document must contain:</li>
                  <li class="mt-2">* Your name</li>
                  <li> * The address must match the address you used for your KYC.</li>
                </ul>
              </div>
            </span>
            <div class="DocSelected">
              <span class="position-relative FS-16">
                <input type="file" id="KYC-File" data-buttonText="Upload File" data-input="false" data-iconName="fa fa-upload" class="FS-16 file-upload" /></span>
            </div>
          </div>
        </div>
        <div class="d-flex flex-lg-row flex-column-reverse justify-content-between align-items-center mt-5">
          <p class="FS-16 FCBlue ml-lg-4 mt-lg-0 mt-5 BackButton" @click="previousStep(1)">
            {{ $t("auth.form.backbut") }}
          </p>
          <button class="BlueButton" @click="nextStep(1)">
            {{ $t("profile.buttons.create_account") }}
          </button>
        </div>
      </div>
    </section>
    <!-- Terms and conditions -->
    <section v-else-if="pageStep === 5" class="container-pricing col-12">
      <div class="account-container d-flex flex-column justify-content-start">
        <div class="col-12">
          <p class="mt-4 FCBlue FS-24">Terms and conditions</p>
          <div class="terms-cond-register px-3 py-5">
            <div class="col-12 px-4">
              <h5 style="FW400">
                Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Https://www.hedpay.com website
                and the HEdpAY mobile applications (the "Service") operated by Hedpay UAB
                and its affiliated companies and brands of “HEdpAY”("us", "we", or "our"). <br /><br />Your access to
                and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors,
                users and others who access or use the Service. <br /><br />By accessing or using the Service you agree to be bound by these
                Terms. If you disagree with any part of the terms then you may not access the Service.
              </h5>
            </div>
            <div class="col-12 py-5 pr-3">
              <ul>
                <li class="py-3">
                  <h4>PURCHASES</h4>
                  <h5 style="FW400">
                    You are encouraged to familiarise yourself with your rights contained within the Sale of Goods Act 1979, Unfair Contract
                    Terms Act 1977 and the Unfair Terms in Consumer Contracts Regulations 1999.<br /><br />
                    If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your
                    Purchase including, without limitation, your personal information, ID number, credit card number, the expiration date of your credit card, your billing address, and your
                    shipping information. <br /><br />You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase;
                    and that (ii) the information you supply to us is true, correct and complete. You expressly agree that HEdpAY is not responsible for any loss or damage arising from the
                    submission of false or inaccurate information.<br /><br />By submitting such information, you grant us the right to provide the information to third parties for
                    purposes or facilitating the completion of Purchases or other services provided by them to us. <br /><br />
                    We reserve the right to refuse or cancel your order at any time for certain reasons including but not limited to: product or
                    service availability, errors in the description or price of the product or service, error in your order or other reasons.
                    You expressly agree that HEdpAY cannot accept any liability for loss or damage arising out of such cancellation. <br /><br />
                    We reserve the right to refuse or cancel your order if fraud or an unauthorised or illegal transaction is suspected.
                  </h5>
                </li>
                <li class="py-3">
                  <h4>AVAILABILITY, ERRORS AND INACCURACIES</h4>
                  <h5 style="FW400">
                    We are constantly updating our offerings of products and services on the Service. The products or services available
                    on our Service may be mispriced, described inaccurately, or unavailable, and we may experience delays in updating
                    information on the Service and in our advertising on other web sites. You expressly agree that any such offer of a
                    product or service does not constitute a legal offer capable of attracting legal consequences. <br /><br />
                    We cannot and do not guarantee the accuracy or completeness of any information, including prices, product images,
                    specifications, availability, and services. We reserve the right to change or update information and to correct errors,
                    inaccuracies, or omissions at any time without prior notice.
                    Section "Availability, Errors and Inaccuracies" is without prejudice to existing statutory rights.
                  </h5>
                </li>
                <li class="py-3">
                  <h4>CONTESTS, SWEEPSTAKES AND PROMOTIONS</h4>
                  <h5 style="FW400">
                    We are constantly updating our offerings of products and services on the Service. The products or services available
                    on our Service may be mispriced, described inaccurately, or unavailable, and we may experience delays in updating
                    information on the Service and in our advertising on other web sites. You expressly agree that any such offer of a
                    product or service does not constitute a legal offer capable of attracting legal consequences. <br /><br />
                    We cannot and do not guarantee the accuracy or completeness of any information, including prices, product images, specifications, availability,
                    and services. We reserve the right to change or update information and to correct errors, inaccuracies, or omissions at any time without prior notice.
                    Section "Availability, Errors and Inaccuracies" is without prejudice to existing statutory rights.
                  </h5>
                </li>
                <li class="py-3">
                  <h4>SUBSCRIPTIONS</h4>
                  <h5 style="FW400">
                    Some parts of the Service are billed on a subscription maintenance basis ("Maintenance(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle").
                    Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a product or Subscribing to a program.
                    <br /><br />At the end of each Billing Cycle, your Subscription maintenance will automatically renew under the exact same conditions unless you cancel it or HEdpAY cancels
                    it. You may cancel your Subscription to specific product or program renewal either through your online account management page or by contacting HEdpAY customer support
                    team but it will not terminate the Maintenance fees unless you terminate the whole account. <br /><br />A valid payment method, including credit card, bank wire, digital payment
                    and online third party payment, is required to process the payment for your Subscription. You shall provide HEdpAY with accurate and complete billing information including full                    name, address, state, zip code, telephone number, and a
                    valid payment method information. By submitting such payment information, you automatically authorise HEdpAY to charge all Subscription fees incurred through your account to any
                    such payment instruments. <br /><br />Should automatic  billing fail to occur for any reason, HEdpAY will issue an  electronic invoice indicating that you must proceed
                    manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.
                  </h5>
                </li>
                <li class="py-3">
                  <h4>FEE CHANGES</h4>
                  <h5 style="FW400">
                    HEdpAY, in its sole discretion and at any time, may modify the product, service, maintenance fees for the Subscriptions. Any Subscription fee change will become
                    effective at the end of the then-current Billing Cycle.<br /><br />
                    HEdpAY will provide you with a reasonable prior notice of any change in any fees to give you an opportunity to terminate your Subscription before such change becomes
                    effective. Your continued use of the Service after the Subscription fee change comes into effect constitutes your agreement to pay the modified fee amount.
                  </h5>
                </li>
                <li class="py-3">
                  <h4>REFUNDS</h4>
                  <h5 style="FW400">
                    Except when required by law, paid fees or any other service payments are non-refundable.
                  </h5>
                </li>
                <li class="py-3">
                  <h4>ACCOUNTS</h4>
                  <h5 style="FW400">
                    When you create an account with us, you must provide us information that is accurate, complete, and current at all
                    times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on
                    our Service. <br /><br />You are responsible for safeguarding the password or private secure keys that you use to access the Service and for any activities or actions
                    under your password, whether your password is with our Service or a third-party service. <br /><br />
                    You agree not to disclose your password or keys to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorised use of your account.
                    <br /><br />You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trade mark that is subject to any rights
                    of another person or entity other than you without appropriate authorisation, or a name that is otherwise offensive, vulgar or obscene. You expressly agree that we
                    cannot be held liable for any loss or damage arising out of any misrepresentations you make in this regard.</h5>
                </li>
                <li class="py-3">
                  <h4>INTELLECTUAL PROPERTY</h4>
                  <h5 style="FW400">
                    The Service and its original content, features and functionality are and will remain the exclusive property of HEdpAY and its licensors. The Service is protected by
                    copyright, trademark, and other laws of both the United Kingdom, Canada, Lithuania, EU/EEA and foreign countries.
                    Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of HEdpAY.
                  </h5>
                </li>
                <li class="py-3">
                  <h4>LINKS TO OTHER WEB SITES</h4>
                  <h5 style="FW400">
                    Our Service may contain links to third-party web sites or services that are not owned or controlled by HEdpAY.
                    <br /><br />HEdpAY has no control over, and assumes no responsibility for, the content, privacy policies, or
                    practices of any third party web sites or services. You further acknowledge and agree that HEdpAY shall not be
                    responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in
                    connection with use of or reliance on any such content, goods or services available on or through any such web sites
                    or services. <br /><br />We strongly advise you to read the terms and conditions and privacy policies of any third-
                    party web sites or services that you visit. DYOR “Do Your Own Research”
                  </h5>
                </li>
                <li class="py-3">
                  <h4>TERMINATION</h4>
                  <h5 style="FW400">
                    We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the
                    Terms. <br /><br />Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
                    <br /><br />All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions,
                    warranty disclaimers, indemnity and limitations of liability.
                  </h5>
                </li>
                <li class="py-3">
                  <h4>INDEMNIFICATION</h4>
                  <h5 style="FW400">
                    You agree to defend, indemnify and hold harmless HEdpAY and its licensee and licensors, and their employees,
                    contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses,
                    liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out
                    of; a) your use and access of the Service, by you or any person using your accounts and password, or b) a breach of these Terms.
                  </h5>
                </li>
                <li class="py-3">
                  <h4>LIMITATION OF LIABILITY</h4>
                  <h5 style="FW400">
                    In no event shall HEdpAY, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive
                    damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or
                    use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorised access, use or alteration of
                    your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the
                    possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</h5>
                </li>
                <li class="py-3">
                  <h4>DISCLAIMER</h4>
                  <h5 style="FW400">
                    Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis.
                    The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied
                    warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                    <br /><br />HEdpAY its subsidiaries, affiliates, and its licensors do not warrant that; a) the Service will function
                    uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the
                    Service is free of viruses or other harmful components; or  d) the results of using the Service will meet your requirements.
                  </h5>
                </li>
                <li class="py-3">
                  <h4>EXCLUSIONS</h4>
                  <h5 style="FW400">
                    Without limiting the generality of the foregoing and notwithstanding any other provision of these terms, under no circumstances will HEdpAY ever be liable to you or any other
                    person for any indirect, incidental, consequential, special, punitive or exemplary loss or damage arising from, connected with, or relating to your use of the Service, these Terms,
                    the subject matter of these Terms, the termination of these Terms or otherwise, including but not limited to personal injury, loss of data, business, markets, savings, income,
                    profits, use, production, reputation or goodwill, anticipated or otherwise, or economic loss, under any theory of liability (whether in contract, tort, strict liability or
                    any other theory or law or equity), regardless of any negligence or other fault or wrongdoing (including without limitation gross negligence and fundamental breach) by
                    HEdpAY or any person for whom HEdpAY is responsible, and even if HEdpAY has been advised of the possibility of such loss or damage being incurred.
                  </h5>
                </li>
                <li class="py-3">
                  <h4>GOVERNING LAW</h4>
                  <h5 style="FW400">
                    These Terms shall be governed and construed in accordance with the laws of United Kingdom, Canada, Lithuania, EU and
                    EEA countries, without regard to its conflict of law provisions. <br /><br />
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of  those rights. If any provision of these Terms is held to be
                    invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                    These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
                  </h5>
                </li>
                <li class="py-3">
                  <h4>CHANGES</h4>
                  <h5 style="FW400">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material
                    we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change
                    will be determined at our sole discretion. By continuing to access or use our Service after those revisions become
                    effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you must stop using the service.
                  </h5>
                </li>
                <li class="py-3">
                  <h4>PRIVACY POLICY AND COOKIE POLICY</h4>
                  <h5 style="FW400">
                    Please refer to our Privacy Policy and Cookies Policy. You agree that they constitute part of these terms.
                    You must read our Privacy Policy and Cookies Policy before you use the Service.
                  </h5>
                </li>
                <li class="py-3">
                  <h4>CONTACT US</h4>
                  <h5 style="FW400">
                    If you have any questions about these Terms, please contact us
                    <a href="mailto:compliance@hedpay.com">compliance@hedpay.com</a>
                  </h5>
                </li>
              </ul>
            </div>
            <div class="form-group d-flex align-content-start">
              <input type="checkbox" id="Chk-Accept" class="" />
              <label for="Chk-Accept" class="FS-16 FCDark">I accept</label>
            </div>
          </div>
          <div class="d-flex flex-lg-row flex-column-reverse justify-content-between align-items-center py-5">
            <p v-if="stepType === 1" class="FS-16 FCBlue ml-lg-4 mt-lg-0 mt-5 BackButton" @click="previousStep(3)">
              {{ $t("auth.form.backbut") }}
            </p>
            <p v-else-if="stepType === 2" class="FS-16 FCBlue ml-lg-4 mt-lg-0 mt-5 BackButton" @click="previousStep(2)">
              {{ $t("auth.form.backbut") }}
            </p>
            <p v-else class="FS-16 FCBlue ml-lg-4 mt-lg-0 mt-5 BackButton" @click="previousStep(1)">
              {{ $t("auth.form.backbut") }}
            </p>
            <button v-if="stepType === 1" class="AcceptButton" v-on:click="nextStep(2)">
              {{ $t("term_condition.submitbut") }}
            </button>
            <button v-else class="AcceptButton" @click="nextStep(1)">
              {{ $t("term_condition.submitbut") }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <section v-else-if="pageStep === 6" class="container-pricing col-12 KYC">
      <div class="account-container d-flex flex-column justify-content-start">
        <div class="col-12">
          <p class="mt-4 FCBlue FS-24">{{ $t("kyc_condition.title") }}</p>
          <div class="form-group d-flex align-content-start">
            <input type="checkbox" id="Chk1" class="" />
            <label for="Chk1" class="FS-16 FCDark">
              I hereby confirm that I read and agree with the Terms and conditions of Service, Privacy Policy, and Cookies Policy.
            </label>
          </div>
          <div class="form-group d-flex">
            <input type="checkbox" id="Chk2" class="" />
            <label for="Chk2" class="FS-16 FCDark">I hereby confirm that all information above is true and accurate.
              I understand that giving false or misleading information will make immediate cancelation of services and may bring on legal proceedings.
            </label>
          </div>
          <div class="form-group d-flex">
            <input type="checkbox" id="Chk3" class="" />
            <label for="Chk3" class="FS-16 FCDark">
              I undertake to immediately inform Hedpay UAB about any changes in the information above in writing form.
            </label>
          </div>
          <div class="form-group d-flex">
            <input type="checkbox" id="Chk4" class="" />
            <label for="Chk4" class="FS-16 FCDark">
              I hereby confirm that the funds transferred have legal
              background. Services offerred by Hedpay UAB will not be used for
              any illegal purposes, and I will not take part in any operation,
              which is considered illegal money laundering and terrorism
              financing.
            </label>
          </div>
          <div class="form-group d-flex">
            <input type="checkbox" id="Chk5" class="" />
            <label for="Chk5" class="FS-16 FCDark">
              I am informed that my relationship with Hedpay UAB is handled in
              accordance with the Law on the Prevention of Money Laundering and
              Terrorist Financing of the Republic of Lithuania and the
              underlying laws and regulations, and I am completely aware of my
              obligations which I undertake by signing below.
            </label>
          </div>
          <div class="form-group d-flex">
            <input type="checkbox" id="Chk6" class="" />
            <label for="Chk6" class="FS-16 FCDark">
              I hereby agree that the legal relationship establishment between
              myself and Hedpay UAB allows Hedpay UAB to make use of or share my
              data with any third party according to the law, including any
              request for additional information.
            </label>
          </div>
          <div class="form-group mt-5 pr-0">
            <label for="Signature" class="FCBlue FS-14 ml-3">Signature *</label>
            <input id="Signature" type="text" class="form-control FS-16 InputF FCDark col-md-6 col-12" placeholder="Enter your full name" />
          </div>
          <div class="d-flex flex-lg-row flex-column-reverse justify-content-between align-items-center py-5">
            <p class="FS-16 FCBlue ml-lg-4 mt-lg-0 mt-5 BackButton" v-on:click="previousStep(1)">
              {{ $t("auth.form.backbut") }}
            </p>
            <button class="DarkButton FS-18" type="button" @click="nextStep(1)">
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- Welcome to Hedpay -->
    <section v-else-if="pageStep === 7" class="container-w">
      <div class="welcome-container d-flex flex-column align-items-center">
        <p class="mt-5 mb-0 FS-30 FW600">
          {{ $t("final_check.welcome_title") }}
        </p>
        <p class="mb-3 mt-0 FCBlue FS-30 FW600">
          {{ $t("final_check.thank_title") }}
        </p>
        <div class="d-flex flex-column align-items-center col-lg-7">
          <div class="row flex-column align-items-center col-12 px-0 NotVerified">
            <span class="FS-18 FCOrange"><i class="fas fa-info-circle"></i></span>
            <p class="FS-18 FCOrange text-center FW600">
              {{ $t("final_check.active_state") }}
            </p>
          </div>
          <div class="row flex-column align-items-center col-12 px-0 Activated" style="display: none">
            <span class="FS-18 FCBlue"><i class="fas fa-check"></i></span>
            <p class="FS-18 FCBlue text-center FW600">
              {{ $t("final_check.active_success") }}
            </p>
          </div>
          <p class="FS-14 FCDark py-3 text-center">
            {{ $t("final_check.email_info") }}
          </p>
          <div class="d-flex justify-content-center col-md-10 px-0">
            <input type="text" placeholder="Enter your validation code" class="inputButton col-10 FS-18 FCDark" />
            <button type="button" class="btn BlueButton col-2 FS-16 FCWhite" style="height: 48px">
              {{ $t("final_check.paste_but") }}
            </button>
          </div>
        </div>
        <div class="d-flex flex-lg-row flex-column-reverse justify-content-between align-items-center py-5">
          <button class="BlueButton FS-18 mx-3 my-3" style="max-width: 280px">
            <span>{{ $t("final_check.transfer_but") }}</span>
          </button>
          <button class="BlueButton FS-18 mx-3 my-3" style="background-color: #002554; max-width: 280px" @click="ExploreMyAccount()">
            <span>{{ $t("final_check.explore_but") }}</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
<style src="./style.scss" lang="scss" scoped></style>
<style lang="scss">
  $fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
  @import "~@fortawesome/fontawesome-free/scss/fontawesome";
  @import "~@fortawesome/fontawesome-free/scss/solid"; // fas
  @import "~@fortawesome/fontawesome-free/scss/regular"; // far
  @import "~@fortawesome/fontawesome-free/scss/brands"; // fab
</style>
<script src="./script.js"></script>
