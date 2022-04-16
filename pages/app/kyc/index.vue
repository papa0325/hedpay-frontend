<template>
  <div class="page-content">
        <div class="container-fluid">
          <section class="justify-content-center px-lg-5 px-md-3 px-2 py-4">
            <section class="col-12 pb-5" style="margin-top:-80px">
                <p class="mb-2 H-20 TextDark fontW-500">Welcome to your profile</p>
                <div class="d-flex flex-column flex-lg-row justify-content-between">
                    <div>
                        <p class="mb-0 H-30 LigthBlue fontW-500">Jamie Davies</p>
                        <p class="OrangeColor fontW-500 H-14 mt-0 pt-0"><span class="TextDark">Your UID:</span> 87654321</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <img src="Icons/Profile/Exclam-circle.svg">
                        <p class="H-16 TextDark  mb-0 pl-2">This is the limit of your account, to increase the limit you must complete the information!.</p>
                    </div>
                </div>
            </section>
            <!-- MY ACCOUNT -->
            <div class="my-4 row flex-column align-items-center">
              <!-- MY ACCOUNT DIV BUTTON STARTS-->
                <div class="row col-12 px-0">
                    <button type="button" id="My-Account" class="btn Profile-Button col" v-on:click="OpenProfile('My-Account')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
                    <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col">
                        <div class="d-flex align-items-center px-3">
                            <span class="TextDark"><i class="fas fa-user-circle"></i></span>
                        </div>
                        <p class="TextDark H-16 fontW-600 mb-0">My account</p>
                    </div>
                </div>
                <!-- MY ACCOUNT DIV BUTTON ENDS-->
                <!-- BOX PROFILE STARTS-->
                <div class="Box-Card Welcome-Container py-3 my-5 My-Account" id="My-Account-BOX" style="width: 60%" v-if="myAccount">
                    <div class=" px-md-5 pb-5">
                    <div class="row col-12 mt-4">
                        <p class="mb-0 TextDark col-12 px-0 H-24 fontW-600 text-center text-md-left">Login</p>
                        <!-- <div class="d-flex justify-content-center align-items-center">
                            <p class="mb-0 TextDark H-16 fontW-400 pr-2">Learn more</p>
                            <img class="envelope-icon" src="Icons/Profile/question-circle-wallet-orange.svg" />
                        </div> -->
                    </div>
                    <div class="d-flex flex-lg-row flex-column justify-content-between">
                        <div class="d-flex flex-column col-12 col-lg-6 py-2">
                            <div class="form-group pr-0 mb-0">
                                <label for="Country" class="TextBlue H-14 ml-3">Country of residence *</label>
                                <div class="selectdiv" style="width: 100%;">
                                    <label style="width: 100%;">
                                        <select id="Country" name="Country" class="mb-1 select-wrapper form-control H-14  Input-F-Quick TextDark" >
                                            <option value="Canada">Canada</option>
                                            <option value="United States of America">United States of America</option>
                                            <option value="Afganistan">Afghanistan</option>
                                            <option value="Albania">Albania</option>
                                            <option value="Algeria">Algeria</option>
                                            <option value="American Samoa">American Samoa</option>
                                            <option value="Andorra">Andorra</option>
                                            <option value="Angola">Angola</option>
                                            <option value="Anguilla">Anguilla</option>
                                            <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Armenia">Armenia</option>
                                            <option value="Aruba">Aruba</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Austria">Austria</option>
                                            <option value="Azerbaijan">Azerbaijan</option>
                                            <option value="Bahamas">Bahamas</option>
                                            <option value="Bahrain">Bahrain</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Barbados">Barbados</option>
                                            <option value="Belarus">Belarus</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="Belize">Belize</option>
                                            <option value="Benin">Benin</option>
                                            <option value="Bermuda">Bermuda</option>
                                            <option value="Bhutan">Bhutan</option>
                                            <option value="Bolivia">Bolivia</option>
                                            <option value="Bonaire">Bonaire</option>
                                            <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                            <option value="Botswana">Botswana</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                            <option value="Brunei">Brunei</option>
                                            <option value="Bulgaria">Bulgaria</option>
                                            <option value="Burkina Faso">Burkina Faso</option>
                                            <option value="Burundi">Burundi</option>
                                            <option value="Cambodia">Cambodia</option>
                                            <option value="Cameroon">Cameroon</option>
                                            <option value="Canary Islands">Canary Islands</option>
                                            <option value="Cape Verde">Cape Verde</option>
                                            <option value="Cayman Islands">Cayman Islands</option>
                                            <option value="Central African Republic">Central African Republic</option>
                                            <option value="Chad">Chad</option>
                                            <option value="Channel Islands">Channel Islands</option>
                                            <option value="Chile">Chile</option>
                                            <option value="China">China</option>
                                            <option value="Christmas Island">Christmas Island</option>
                                            <option value="Cocos Island">Cocos Island</option>
                                            <option value="Colombia">Colombia</option>
                                            <option value="Comoros">Comoros</option>
                                            <option value="Congo">Congo</option>
                                            <option value="Cook Islands">Cook Islands</option>
                                            <option value="Costa Rica">Costa Rica</option>
                                            <option value="Cote DIvoire">Cote DIvoire</option>
                                            <option value="Croatia">Croatia</option>
                                            <option value="Cuba">Cuba</option>
                                            <option value="Curaco">Curacao</option>
                                            <option value="Cyprus">Cyprus</option>
                                            <option value="Czech Republic">Czech Republic</option>
                                            <option value="Denmark">Denmark</option>
                                            <option value="Djibouti">Djibouti</option>
                                            <option value="Dominica">Dominica</option>
                                            <option value="Dominican Republic">Dominican Republic</option>
                                            <option value="East Timor">East Timor</option>
                                            <option value="Ecuador">Ecuador</option>
                                            <option value="Egypt">Egypt</option>
                                            <option value="El Salvador">El Salvador</option>
                                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                                            <option value="Eritrea">Eritrea</option>
                                            <option value="Estonia">Estonia</option>
                                            <option value="Ethiopia">Ethiopia</option>
                                            <option value="Falkland Islands">Falkland Islands</option>
                                            <option value="Faroe Islands">Faroe Islands</option>
                                            <option value="Fiji">Fiji</option>
                                            <option value="Finland">Finland</option>
                                            <option value="France">France</option>
                                            <option value="French Guiana">French Guiana</option>
                                            <option value="French Polynesia">French Polynesia</option>
                                            <option value="French Southern Ter">French Southern Ter</option>
                                            <option value="Gabon">Gabon</option>
                                            <option value="Gambia">Gambia</option>
                                            <option value="Georgia">Georgia</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Ghana">Ghana</option>
                                            <option value="Gibraltar">Gibraltar</option>
                                            <option value="Great Britain">Great Britain</option>
                                            <option value="Greece">Greece</option>
                                            <option value="Greenland">Greenland</option>
                                            <option value="Grenada">Grenada</option>
                                            <option value="Guadeloupe">Guadeloupe</option>
                                            <option value="Guam">Guam</option>
                                            <option value="Guatemala">Guatemala</option>
                                            <option value="Guinea">Guinea</option>
                                            <option value="Guyana">Guyana</option>
                                            <option value="Haiti">Haiti</option>
                                            <option value="Hawaii">Hawaii</option>
                                            <option value="Honduras">Honduras</option>
                                            <option value="Hong Kong">Hong Kong</option>
                                            <option value="Hungary">Hungary</option>
                                            <option value="Iceland">Iceland</option>
                                            <option value="Indonesia">Indonesia</option>
                                            <option value="India">India</option>
                                            <option value="Iran">Iran</option>
                                            <option value="Iraq">Iraq</option>
                                            <option value="Ireland">Ireland</option>
                                            <option value="Isle of Man">Isle of Man</option>
                                            <option value="Israel">Israel</option>
                                            <option value="Italy">Italy</option>
                                            <option value="Jamaica">Jamaica</option>
                                            <option value="Japan">Japan</option>
                                            <option value="Jordan">Jordan</option>
                                            <option value="Kazakhstan">Kazakhstan</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="Kiribati">Kiribati</option>
                                            <option value="Korea North">Korea North</option>
                                            <option value="Korea Sout">Korea South</option>
                                            <option value="Kuwait">Kuwait</option>
                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                            <option value="Laos">Laos</option>
                                            <option value="Latvia">Latvia</option>
                                            <option value="Lebanon">Lebanon</option>
                                            <option value="Lesotho">Lesotho</option>
                                            <option value="Liberia">Liberia</option>
                                            <option value="Libya">Libya</option>
                                            <option value="Liechtenstein">Liechtenstein</option>
                                            <option value="Lithuania">Lithuania</option>
                                            <option value="Luxembourg">Luxembourg</option>
                                            <option value="Macau">Macau</option>
                                            <option value="Macedonia">Macedonia</option>
                                            <option value="Madagascar">Madagascar</option>
                                            <option value="Malaysia">Malaysia</option>
                                            <option value="Malawi">Malawi</option>
                                            <option value="Maldives">Maldives</option>
                                            <option value="Mali">Mali</option>
                                            <option value="Malta">Malta</option>
                                            <option value="Marshall Islands">Marshall Islands</option>
                                            <option value="Martinique">Martinique</option>
                                            <option value="Mauritania">Mauritania</option>
                                            <option value="Mauritius">Mauritius</option>
                                            <option value="Mayotte">Mayotte</option>
                                            <option value="Mexico">Mexico</option>
                                            <option value="Midway Islands">Midway Islands</option>
                                            <option value="Moldova">Moldova</option>
                                            <option value="Monaco">Monaco</option>
                                            <option value="Mongolia">Mongolia</option>
                                            <option value="Montserrat">Montserrat</option>
                                            <option value="Morocco">Morocco</option>
                                            <option value="Mozambique">Mozambique</option>
                                            <option value="Myanmar">Myanmar</option>
                                            <option value="Nambia">Nambia</option>
                                            <option value="Nauru">Nauru</option>
                                            <option value="Nepal">Nepal</option>
                                            <option value="Netherland Antilles">Netherland Antilles</option>
                                            <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                            <option value="Nevis">Nevis</option>
                                            <option value="New Caledonia">New Caledonia</option>
                                            <option value="New Zealand">New Zealand</option>
                                            <option value="Nicaragua">Nicaragua</option>
                                            <option value="Niger">Niger</option>
                                            <option value="Nigeria">Nigeria</option>
                                            <option value="Niue">Niue</option>
                                            <option value="Norfolk Island">Norfolk Island</option>
                                            <option value="Norway">Norway</option>
                                            <option value="Oman">Oman</option>
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="Palau Island">Palau Island</option>
                                            <option value="Palestine">Palestine</option>
                                            <option value="Panama">Panama</option>
                                            <option value="Papua New Guinea">Papua New Guinea</option>
                                            <option value="Paraguay">Paraguay</option>
                                            <option value="Peru">Peru</option>
                                            <option value="Phillipines">Philippines</option>
                                            <option value="Pitcairn Island">Pitcairn Island</option>
                                            <option value="Poland">Poland</option>
                                            <option value="Portugal">Portugal</option>
                                            <option value="Puerto Rico">Puerto Rico</option>
                                            <option value="Qatar">Qatar</option>
                                            <option value="Republic of Montenegro">Republic of Montenegro</option>
                                            <option value="Republic of Serbia">Republic of Serbia</option>
                                            <option value="Reunion">Reunion</option>
                                            <option value="Romania">Romania</option>
                                            <option value="Russia">Russia</option>
                                            <option value="Rwanda">Rwanda</option>
                                            <option value="St Barthelemy">St Barthelemy</option>
                                            <option value="St Eustatius">St Eustatius</option>
                                            <option value="St Helena">St Helena</option>
                                            <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                            <option value="St Lucia">St Lucia</option>
                                            <option value="St Maarten">St Maarten</option>
                                            <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                            <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                            <option value="Saipan">Saipan</option>
                                            <option value="Samoa">Samoa</option>
                                            <option value="Samoa American">Samoa American</option>
                                            <option value="San Marino">San Marino</option>
                                            <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                            <option value="Senegal">Senegal</option>
                                            <option value="Seychelles">Seychelles</option>
                                            <option value="Sierra Leone">Sierra Leone</option>
                                            <option value="Singapore">Singapore</option>
                                            <option value="Slovakia">Slovakia</option>
                                            <option value="Slovenia">Slovenia</option>
                                            <option value="Solomon Islands">Solomon Islands</option>
                                            <option value="Somalia">Somalia</option>
                                            <option value="South Africa">South Africa</option>
                                            <option value="Spain">Spain</option>
                                            <option value="Sri Lanka">Sri Lanka</option>
                                            <option value="Sudan">Sudan</option>
                                            <option value="Suriname">Suriname</option>
                                            <option value="Swaziland">Swaziland</option>
                                            <option value="Sweden">Sweden</option>
                                            <option value="Switzerland">Switzerland</option>
                                            <option value="Syria">Syria</option>
                                            <option value="Tahiti">Tahiti</option>
                                            <option value="Taiwan">Taiwan</option>
                                            <option value="Tajikistan">Tajikistan</option>
                                            <option value="Tanzania">Tanzania</option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="Togo">Togo</option>
                                            <option value="Tokelau">Tokelau</option>
                                            <option value="Tonga">Tonga</option>
                                            <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                            <option value="Tunisia">Tunisia</option>
                                            <option value="Turkey">Turkey</option>
                                            <option value="Turkmenistan">Turkmenistan</option>
                                            <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                            <option value="Tuvalu">Tuvalu</option>
                                            <option value="Uganda">Uganda</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="Ukraine">Ukraine</option>
                                            <option value="United Arab Erimates">United Arab Emirates</option>
                                            <option value="Uraguay">Uruguay</option>
                                            <option value="Uzbekistan">Uzbekistan</option>
                                            <option value="Vanuatu">Vanuatu</option>
                                            <option value="Vatican City State">Vatican City State</option>
                                            <option value="Venezuela">Venezuela</option>
                                            <option value="Vietnam">Vietnam</option>
                                            <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                            <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                            <option value="Wake Island">Wake Island</option>
                                            <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                                            <option value="Yemen">Yemen</option>
                                            <option value="Zaire">Zaire</option>
                                            <option value="Zambia">Zambia</option>
                                            <option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group pr-0 ">
                                <label for="Nickname" class="TextBlue H-14 ml-3">Nickname*</label>
                                <input id="Nickname" type="text" class="form-control H-14  Input-F-Quick TextDark"  placeholder="Your nickname" />
                            </div>
                            <div class="form-group pr-0 ">
                                <label for="email" class="TextBlue H-14 ml-3">Email*</label>
                                <input id="email" type="email" class="form-control H-14  Input-F-Quick TextDark"  placeholder="Your email" />
                            </div>
                            <div class="align-self-end mt-auto ">
                                <button type="button" class="Blue-Button col-8 H-14 TextWhite Password-Change-Button" v-on:click="appearPassword();">Change password</button>
                            </div>
                            <div class="password" v-if="passdiv">
                                <div class="form-group mt-4 pr-0 passwordChange">
                                    <label for="password" class="TextBlue H-14 ml-3">Password*</label>
                                    <input id="password" type="password" class="form-control H-14  Input-F-Quick"  placeholder="********" />
                                </div>
                                <div class="form-group mt-4 pr-0 passwordChange">
                                    <label for="Repeat-password" class="TextBlue H-14 ml-3">Repeat password *</label>
                                    <input id="Repeat-password" type="password" class="form-control H-14  Input-F-Quick"  placeholder="********" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 d-flex flex-column py-2">
                        <div class="form-group mb-0" style="width: 50%;">
                            <label for="Title" class="TextBlue H-14 ml-3">Title *</label>
                            <div class="selectdiv" style="width: 100%;">
                            <label style="width: 100%;">
                                <select id="Title" class="select-wrapper form-control H-14  Input-F-Quick TextDark" >
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs.</option>
                                <option value="Ms">Ms</option>
                                </select>
                            </label>
                            </div>
                        </div>
                        <div class="form-group ">
                            <label for="First" class="TextBlue H-14 ml-3">First name *</label>
                            <input id="First" type="text" class="form-control H-14  Input-F-Quick TextDark"  placeholder="First name" />
                        </div>
                        <div class="form-group ">
                            <label for="Middle" class="TextBlue H-14 ml-3">Middle name(s) </label>
                            <input id="Middle" type="text" class="form-control H-14  Input-F-Quick"  placeholder="Middle name" />
                        </div>
                        <div class="form-group ">
                            <label for="Last" class="TextBlue H-14 ml-3">Last name *</label>
                            <input id="Last" type="text" class="form-control H-14  Input-F-Quick"  placeholder="Last name" />
                        </div>
                        <div class="align-self-end mt-auto " >
                            <button type="button" class="Blue-Button  H-14 TextWhite col px-0" v-on:click="CloseProfile('My-Account');">Save</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <!-- BOX PROFILE ENDS-->
            </div>

            <!-- KYC -->
            <div class="my-4 row flex-column align-items-center">
                <!-- KYC DIV BUTTON STARTS-->
                  <div class="row col-12 px-0">
                      <button type="button" id="KYC" class="btn Profile-Button col" v-on:click="OpenProfile('KYC')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
                      <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col">
                          <div class="d-flex align-items-center px-3">
                              <span class="TextDark"><i class="fas fa-file-upload"></i></span>
                          </div>
                          <p class="TextDark H-16 fontW-600 mb-0">KYC</p>
                      </div>
                  </div>
                <!-- KYC DIV BUTTON ENDS-->

                <!-- BOX PROFILE 2 STARTS-->
                <div class="Box-Card Welcome-Container pt-2 my-5 row flex-column  justify-content-start align-content-between KYC Details-KYC" id="KYC-BOX" v-if="kyc">
                    <p class="mt-4 TextDark fontW-600 H-24">Your details</p>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="row flex-column flex-sm-row">
                                <div class="form-group  col-sm-4">
                                    <label for="AddressNo" class="TextBlue H-14 ml-3">No. *</label>
                                    <input id="AddressNo" type="text" class="form-control H-16 Input-F-Quick TextDark"  placeholder="#" />
                                </div>
                                <div class="form-group col">
                                    <label for="StreetAddress" class="TextBlue H-14 ml-3">Street *</label>
                                    <input id="StreetAddress" type="text" class="form-control H-16 Input-F-Quick TextDark"  placeholder="Your street" />
                                </div>
                            </div>
                            <div class="row flex-column flex-sm-row">
                                <div class="form-group  col-sm-4">
                                    <label for="AddressApt" class="TextBlue H-14 ml-3">Apt. </label>
                                    <input id="AddressApt" type="text" class="form-control H-16 Input-F-Quick TextDark"  placeholder="# Apt" />
                                </div>
                                <div class="form-group col">
                                    <label for="AddressCity" class="TextBlue H-14 ml-3">City *</label>
                                    <input id="AddressCity" type="text" class="form-control H-16 Input-F-Quick TextDark"  placeholder="Your city" />
                                </div>
                            </div>
                            <div class="row flex-column flex-sm-row">
                                <div class="form-group col-sm-4 ">
                                    <label for="AddressPostal" class="TextBlue H-14 ml-3">Postal Code *</label>
                                    <input id="AddressPostal" type="text" class="form-control H-16 Input-F-Quick TextDark"  placeholder="Your postal code" />
                                </div>
                                <div class="form-group  col">
                                    <label for="AddressProvince" class="TextBlue H-14 ml-3">Province *</label>
                                    <input id="AddressProvince" type="text" class="form-control H-16 Input-F-Quick TextDark"  placeholder="Your province" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group mb-0 ">
                                <label for="Phone" class="TextBlue H-14 ml-3"> Phone number</label>
                                    <div class="input-group-prepend d-flex flex-column flex-sm-row col-12 px-0">
                                        <div class="selectdiv col-12 col-sm-5 px-0">
                                            <label style="width: 100%;">
                                                <select name="countryCode" class="select-wrapper form-control H-16 Input-F-Quick TextDark" style="box-shadow: 3px 3px 12px #00000019,none, 3px 3px 12px #00000019, 3px 3px 12px #00000019 !important;border-radius: 6px 0 0 6px !important;border-right: 1px solid #E2E2E2 !important;">
                                                    <option data-countryCode="CA" value="1" Selected>Canada (+1)</option>
                                                    <option data-countryCode="US" value="2">USA (+1)</option>
                                                    <optgroup label="Other countries">
                                                        <option data-countryCode="DZ" value="213">Algeria (+213)</option>
                                                        <option data-countryCode="AD" value="376">Andorra (+376)</option>
                                                        <option data-countryCode="AO" value="244">Angola (+244)</option>
                                                        <option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
                                                        <option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
                                                        <option data-countryCode="AR" value="54">Argentina (+54)</option>
                                                        <option data-countryCode="AM" value="374">Armenia (+374)</option>
                                                        <option data-countryCode="AW" value="297">Aruba (+297)</option>
                                                        <option data-countryCode="AU" value="61">Australia (+61)</option>
                                                        <option data-countryCode="AT" value="43">Austria (+43)</option>
                                                        <option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
                                                        <option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
                                                        <option data-countryCode="BH" value="973">Bahrain (+973)</option>
                                                        <option data-countryCode="BD" value="880">Bangladesh (+880)</option>
                                                        <option data-countryCode="BB" value="1246">Barbados (+1246)</option>
                                                        <option data-countryCode="BY" value="375">Belarus (+375)</option>
                                                        <option data-countryCode="BE" value="32">Belgium (+32)</option>
                                                        <option data-countryCode="BZ" value="501">Belize (+501)</option>
                                                        <option data-countryCode="BJ" value="229">Benin (+229)</option>
                                                        <option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
                                                        <option data-countryCode="BT" value="975">Bhutan (+975)</option>
                                                        <option data-countryCode="BO" value="591">Bolivia (+591)</option>
                                                        <option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
                                                        <option data-countryCode="BW" value="267">Botswana (+267)</option>
                                                        <option data-countryCode="BR" value="55">Brazil (+55)</option>
                                                        <option data-countryCode="BN" value="673">Brunei (+673)</option>
                                                        <option data-countryCode="BG" value="359">Bulgaria (+359)</option>
                                                        <option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
                                                        <option data-countryCode="BI" value="257">Burundi (+257)</option>
                                                        <option data-countryCode="KH" value="855">Cambodia (+855)</option>
                                                        <option data-countryCode="CM" value="237">Cameroon (+237)</option>
                                                        <!-- <option data-countryCode="CA" value="1">Canada (+1)</option> -->
                                                        <option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
                                                        <option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
                                                        <option data-countryCode="CF" value="236">Central African Republic (+236)</option>
                                                        <option data-countryCode="CL" value="56">Chile (+56)</option>
                                                        <option data-countryCode="CN" value="86">China (+86)</option>
                                                        <option data-countryCode="CO" value="57">Colombia (+57)</option>
                                                        <option data-countryCode="KM" value="269">Comoros (+269)</option>
                                                        <option data-countryCode="CG" value="242">Congo (+242)</option>
                                                        <option data-countryCode="CK" value="682">Cook Islands (+682)</option>
                                                        <option data-countryCode="CR" value="506">Costa Rica (+506)</option>
                                                        <option data-countryCode="HR" value="385">Croatia (+385)</option>
                                                        <option data-countryCode="CU" value="53">Cuba (+53)</option>
                                                        <option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
                                                        <option data-countryCode="CY" value="357">Cyprus South (+357)</option>
                                                        <option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
                                                        <option data-countryCode="DK" value="45">Denmark (+45)</option>
                                                        <option data-countryCode="DJ" value="253">Djibouti (+253)</option>
                                                        <option data-countryCode="DM" value="1809">Dominica (+1809)</option>
                                                        <option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
                                                        <option data-countryCode="EC" value="593">Ecuador (+593)</option>
                                                        <option data-countryCode="EG" value="20">Egypt (+20)</option>
                                                        <option data-countryCode="SV" value="503">El Salvador (+503)</option>
                                                        <option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
                                                        <option data-countryCode="ER" value="291">Eritrea (+291)</option>
                                                        <option data-countryCode="EE" value="372">Estonia (+372)</option>
                                                        <option data-countryCode="ET" value="251">Ethiopia (+251)</option>
                                                        <option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
                                                        <option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
                                                        <option data-countryCode="FJ" value="679">Fiji (+679)</option>
                                                        <option data-countryCode="FI" value="358">Finland (+358)</option>
                                                        <option data-countryCode="FR" value="33">France (+33)</option>
                                                        <option data-countryCode="GF" value="594">French Guiana (+594)</option>
                                                        <option data-countryCode="PF" value="689">French Polynesia (+689)</option>
                                                        <option data-countryCode="GA" value="241">Gabon (+241)</option>
                                                        <option data-countryCode="GM" value="220">Gambia (+220)</option>
                                                        <option data-countryCode="GE" value="7880">Georgia (+7880)</option>
                                                        <option data-countryCode="DE" value="49">Germany (+49)</option>
                                                        <option data-countryCode="GH" value="233">Ghana (+233)</option>
                                                        <option data-countryCode="GI" value="350">Gibraltar (+350)</option>
                                                        <option data-countryCode="GR" value="30">Greece (+30)</option>
                                                        <option data-countryCode="GL" value="299">Greenland (+299)</option>
                                                        <option data-countryCode="GD" value="1473">Grenada (+1473)</option>
                                                        <option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
                                                        <option data-countryCode="GU" value="671">Guam (+671)</option>
                                                        <option data-countryCode="GT" value="502">Guatemala (+502)</option>
                                                        <option data-countryCode="GN" value="224">Guinea (+224)</option>
                                                        <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
                                                        <option data-countryCode="GY" value="592">Guyana (+592)</option>
                                                        <option data-countryCode="HT" value="509">Haiti (+509)</option>
                                                        <option data-countryCode="HN" value="504">Honduras (+504)</option>
                                                        <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
                                                        <option data-countryCode="HU" value="36">Hungary (+36)</option>
                                                        <option data-countryCode="IS" value="354">Iceland (+354)</option>
                                                        <option data-countryCode="IN" value="91">India (+91)</option>
                                                        <option data-countryCode="ID" value="62">Indonesia (+62)</option>
                                                        <option data-countryCode="IR" value="98">Iran (+98)</option>
                                                        <option data-countryCode="IQ" value="964">Iraq (+964)</option>
                                                        <option data-countryCode="IE" value="353">Ireland (+353)</option>
                                                        <option data-countryCode="IL" value="972">Israel (+972)</option>
                                                        <option data-countryCode="IT" value="39">Italy (+39)</option>
                                                        <option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
                                                        <option data-countryCode="JP" value="81">Japan (+81)</option>
                                                        <option data-countryCode="JO" value="962">Jordan (+962)</option>
                                                        <option data-countryCode="KZ" value="74">Kazakhstan (+7)</option>
                                                        <option data-countryCode="KE" value="254">Kenya (+254)</option>
                                                        <option data-countryCode="KI" value="686">Kiribati (+686)</option>
                                                        <option data-countryCode="KP" value="850">Korea North (+850)</option>
                                                        <option data-countryCode="KR" value="82">Korea South (+82)</option>
                                                        <option data-countryCode="KW" value="965">Kuwait (+965)</option>
                                                        <option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
                                                        <option data-countryCode="LA" value="856">Laos (+856)</option>
                                                        <option data-countryCode="LV" value="371">Latvia (+371)</option>
                                                        <option data-countryCode="LB" value="961">Lebanon (+961)</option>
                                                        <option data-countryCode="LS" value="266">Lesotho (+266)</option>
                                                        <option data-countryCode="LR" value="231">Liberia (+231)</option>
                                                        <option data-countryCode="LY" value="218">Libya (+218)</option>
                                                        <option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
                                                        <option data-countryCode="LT" value="370">Lithuania (+370)</option>
                                                        <option data-countryCode="LU" value="352">Luxembourg (+352)</option>
                                                        <option data-countryCode="MO" value="853">Macao (+853)</option>
                                                        <option data-countryCode="MK" value="389">Macedonia (+389)</option>
                                                        <option data-countryCode="MG" value="261">Madagascar (+261)</option>
                                                        <option data-countryCode="MW" value="265">Malawi (+265)</option>
                                                        <option data-countryCode="MY" value="60">Malaysia (+60)</option>
                                                        <option data-countryCode="MV" value="960">Maldives (+960)</option>
                                                        <option data-countryCode="ML" value="223">Mali (+223)</option>
                                                        <option data-countryCode="MT" value="356">Malta (+356)</option>
                                                        <option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
                                                        <option data-countryCode="MQ" value="596">Martinique (+596)</option>
                                                        <option data-countryCode="MR" value="222">Mauritania (+222)</option>
                                                        <option data-countryCode="YT" value="269">Mayotte (+269)</option>
                                                        <option data-countryCode="MX" value="52">Mexico (+52)</option>
                                                        <option data-countryCode="FM" value="691">Micronesia (+691)</option>
                                                        <option data-countryCode="MD" value="373">Moldova (+373)</option>
                                                        <option data-countryCode="MC" value="377">Monaco (+377)</option>
                                                        <option data-countryCode="MN" value="976">Mongolia (+976)</option>
                                                        <option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
                                                        <option data-countryCode="MA" value="212">Morocco (+212)</option>
                                                        <option data-countryCode="MZ" value="258">Mozambique (+258)</option>
                                                        <option data-countryCode="MN" value="95">Myanmar (+95)</option>
                                                        <option data-countryCode="NA" value="264">Namibia (+264)</option>
                                                        <option data-countryCode="NR" value="674">Nauru (+674)</option>
                                                        <option data-countryCode="NP" value="977">Nepal (+977)</option>
                                                        <option data-countryCode="NL" value="31">Netherlands (+31)</option>
                                                        <option data-countryCode="NC" value="687">New Caledonia (+687)</option>
                                                        <option data-countryCode="NZ" value="64">New Zealand (+64)</option>
                                                        <option data-countryCode="NI" value="505">Nicaragua (+505)</option>
                                                        <option data-countryCode="NE" value="227">Niger (+227)</option>
                                                        <option data-countryCode="NG" value="234">Nigeria (+234)</option>
                                                        <option data-countryCode="NU" value="683">Niue (+683)</option>
                                                        <option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
                                                        <option data-countryCode="NP" value="670">Northern Marianas (+670)</option>
                                                        <option data-countryCode="NO" value="47">Norway (+47)</option>
                                                        <option data-countryCode="OM" value="968">Oman (+968)</option>
                                                        <option data-countryCode="PW" value="680">Palau (+680)</option>
                                                        <option data-countryCode="PA" value="507">Panama (+507)</option>
                                                        <option data-countryCode="PG" value="675">Papua New Guinea (+675)</option>
                                                        <option data-countryCode="PY" value="595">Paraguay (+595)</option>
                                                        <option data-countryCode="PE" value="51">Peru (+51)</option>
                                                        <option data-countryCode="PH" value="63">Philippines (+63)</option>
                                                        <option data-countryCode="PL" value="48">Poland (+48)</option>
                                                        <option data-countryCode="PT" value="351">Portugal (+351)</option>
                                                        <option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
                                                        <option data-countryCode="QA" value="974">Qatar (+974)</option>
                                                        <option data-countryCode="RE" value="262">Reunion (+262)</option>
                                                        <option data-countryCode="RO" value="40">Romania (+40)</option>
                                                        <option data-countryCode="RU" value="73">Russia (+7)</option>
                                                        <option data-countryCode="RW" value="250">Rwanda (+250)</option>
                                                        <option data-countryCode="SM" value="378">San Marino (+378)</option>
                                                        <option data-countryCode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
                                                        <option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
                                                        <option data-countryCode="SN" value="221">Senegal (+221)</option>
                                                        <option data-countryCode="CS" value="381">Serbia (+381)</option>
                                                        <option data-countryCode="SC" value="248">Seychelles (+248)</option>
                                                        <option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
                                                        <option data-countryCode="SG" value="65">Singapore (+65)</option>
                                                        <option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
                                                        <option data-countryCode="SI" value="386">Slovenia (+386)</option>
                                                        <option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
                                                        <option data-countryCode="SO" value="252">Somalia (+252)</option>
                                                        <option data-countryCode="ZA" value="27">South Africa (+27)</option>
                                                        <option data-countryCode="ES" value="34">Spain (+34)</option>
                                                        <option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
                                                        <option data-countryCode="SH" value="290">St. Helena (+290)</option>
                                                        <option data-countryCode="KN" value="1869">St. Kitts (+1869)</option>
                                                        <option data-countryCode="SC" value="1758">St. Lucia (+1758)</option>
                                                        <option data-countryCode="SD" value="249">Sudan (+249)</option>
                                                        <option data-countryCode="SR" value="597">Suriname (+597)</option>
                                                        <option data-countryCode="SZ" value="268">Swaziland (+268)</option>
                                                        <option data-countryCode="SE" value="46">Sweden (+46)</option>
                                                        <option data-countryCode="CH" value="41">Switzerland (+41)</option>
                                                        <option data-countryCode="SI" value="963">Syria (+963)</option>
                                                        <option data-countryCode="TW" value="886">Taiwan (+886)</option>
                                                        <option data-countryCode="TJ" value="72">Tajikstan (+7)</option>
                                                        <option data-countryCode="TH" value="66">Thailand (+66)</option>
                                                        <option data-countryCode="TG" value="228">Togo (+228)</option>
                                                        <option data-countryCode="TO" value="676">Tonga (+676)</option>
                                                        <option data-countryCode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
                                                        <option data-countryCode="TN" value="216">Tunisia (+216)</option>
                                                        <option data-countryCode="TR" value="90">Turkey (+90)</option>
                                                        <option data-countryCode="TM" value="71">Turkmenistan (+7)</option>
                                                        <option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
                                                        <option data-countryCode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
                                                        <option data-countryCode="TV" value="688">Tuvalu (+688)</option>
                                                        <option data-countryCode="UG" value="256">Uganda (+256)</option>
                                                        <option data-countryCode="GB" value="44">UK (+44)</option>
                                                        <option data-countryCode="UA" value="380">Ukraine (+380)</option>
                                                        <option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
                                                        <option data-countryCode="UY" value="598">Uruguay (+598)</option>
                                                        <!-- <option data-countryCode="US" value="2">USA (+1)</option> -->
                                                        <option data-countryCode="UZ" value="70">Uzbekistan (+7)</option>
                                                        <option data-countryCode="VU" value="678">Vanuatu (+678)</option>
                                                        <option data-countryCode="VA" value="379">Vatican City (+379)</option>
                                                        <option data-countryCode="VE" value="58">Venezuela (+58)</option>
                                                        <option data-countryCode="VN" value="84">Vietnam (+84)</option>
                                                        <option data-countryCode="VG" value="1284">Virgin Islands - British (+1284)</option>
                                                        <option data-countryCode="VI" value="1340">Virgin Islands - US (+1340)</option>
                                                        <option data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</option>
                                                        <option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
                                                        <option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
                                                        <option data-countryCode="ZM" value="260">Zambia (+260)</option>
                                                        <option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
                                                    </optgroup>
                                                </select>
                                            </label>
                                        </div>
                                        <input id="Phone" type="number" maxlength="10" class="col form-control H-16 Input-F-Quick TextDark" style="border-radius:0  6px 6px 0  !important;box-shadow: 3px 3px 12px #00000019, 3px 3px 12px #00000019, 3px 3px 12px #00000019, none;" placeholder="555 555 55 55" />
                                    </div>
                            </div>
                            <div class="form-group px-0 mb-0">
                                <label for="" class="TextBlue H-14 ml-3">Date of birth *</label>
                                <!-- <div class="input-group-prepend justify-content-between col-12 px-0">
                                    <div class="selectdiv" style="width: 40%;">
                                        <label style="width: 100%;">
                                        <select name="countryCode" class=" select-wrapper form-control H-16 Input-F-Quick TextDark" style="width: 100%; padding: 9px 10px;">
                                            <option value="1" Selected>January</option>
                                            <option  value="2">February</option>
                                            <option  value="3">March</option>
                                            <option  value="4">April</option>
                                            <option  value="5">May</option>
                                            <option  value="6">June</option>
                                            <option  value="7">July</option>
                                            <option  value="8">August</option>
                                            <option  value="9">September</option>
                                            <option  value="10">October</option>
                                            <option  value="11">November</option>
                                            <option  value="12">December</option>
                                        </select>
                                        </label>
                                    </div>
                                    <input id="Day" type="number" maxlength="2" class="form-control H-16 Input-F-Quick TextDark" style="width: 25%; padding: 9px 10px;" placeholder="day" />
                                    <input id="Year" type="number" maxlength="4" class="form-control H-16 Input-F-Quick TextDark" style="width: 25%;padding: 9px 10px" placeholder="year" />
                                </div> -->
                                <div class="input-group-prepend flex-column flex-sm-row justify-content-between col-12 px-0 ">
                                    <div class="selectdiv col-sm-5 px-0" >
                                        <label style="width: 100%;">
                                        <select name="" class=" select-wrapper form-control H-16 Input-F-Quick TextDark" style="width: 100%; padding: 9px 10px;">
                                            <option value="1" Selected>January</option>
                                            <option  value="2">February</option>
                                            <option  value="3">March</option>
                                            <option  value="4">April</option>
                                            <option  value="5">May</option>
                                            <option  value="6">June</option>
                                            <option  value="7">July</option>
                                            <option  value="8">August</option>
                                            <option  value="9">September</option>
                                            <option  value="10">October</option>
                                            <option  value="11">November</option>
                                            <option  value="12">December</option>
                                        </select>
                                        </label>
                                    </div>
                                    <div class="d-flex col-sm-7 px-0">
                                        <input id="Day-P" type="number" maxlength="2" class="form-control H-16 Input-F-Quick TextDark col-6" style="padding: 9px 10px;" placeholder="day" />
                                        <input id="Year-P" type="number" maxlength="4" class="form-control H-16 Input-F-Quick TextDark col-6" style="padding: 9px 10px" placeholder="year" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb-0 mt-1 col-sm-5 px-0" >
                                <label for="Gender" class="TextBlue H-14 ml-3">Gender *</label>
                                <div class="selectdiv" style="width: 100%;">
                                    <label style="width: 100%;">
                                        <select id="Gender" class="select-wrapper form-control H-14  Input-F-Quick TextDark" >
                                            <option value="Female">Female</option>
                                            <option value="Male">Male</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex  justify-content-end align-items-center mt-2">
                        <button class="Blue-Button" type="button" v-on:click="CloseProfile('KYC')">Save</button>
                    </div>
                </div>
                <!-- BOX PROFILE 2 ENDS-->
            </div>

            <!-- MY IDENTITY -->
            <div class="my-4 row flex-column align-items-center">
                <!-- MY IDENTITY DIV BUTTON STARTS-->
                <div class="row col-12 px-0">
                    <button type="button" id="MyIdentity" class="btn Profile-Button col" v-on:click="OpenProfile('MyIdentity')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
                    <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col">
                        <div class="d-flex align-items-center px-3">
                            <span class="TextDark"><i class="fas fa-fingerprint"></i></span>
                        </div>
                        <p class="TextDark H-16 fontW-600 mb-0">My identity</p>
                    </div>
                </div>
                <!-- MY IDENTITY DIV BUTTON ENDS-->

                <!-- BOX PROFILE 1 STARTS-->
               <div class="Box-Card Size-Prof-Box my-5 Details-MyIdentity" v-if="myIdentity">
                    <div class="d-flex flex-lg-row flex-column justify-content-between px-5 pb-5">
                        <div class="col-12 col-lg-6 pr-4">
                            <div class="d-flex justify-content-between mt-4">
                                <p class="mb-0 TextBlue H-20 fontW-500">Passport</p>
                                <div class="d-flex justify-content-center align-items-center">
                                    <!--<img class="envelope-icon" src="~assets/images/Profile/question-circle-wallet-orange.svg" /> -->
                                </div>
                            </div>
                            <div class="form-group mt-4 pr-0 ">
                                <label for="Passport" class="TextBlue H-16 ml-3">Passport / ID number *</label>
                                <input id="Passport" type="text" class="form-control H-16 Input-F-Quick TextDark" style="height: 54px;" placeholder="Enter your passport number" />
                            </div>

                            <div class="form-group mt-4 pr-0 ">
                                <label for="Expiration" class="TextBlue H-16 ml-3">Expiration date *</label>
                                <div class="input-group-prepend justify-content-between col-12 px-0">
                                    <div class="selectdiv" style="width: 40%;">
                                        <label style="width: 100%;">
                                        <select name="LadaCode" class=" select-wrapper form-control H-16 Input-F-Quick TextDark" style="width: 100%; height: 54px;padding: 9px 10px;">
                                            <option value="1" Selected>January</option>
                                            <option  value="2">February</option>
                                            <option  value="3">March</option>
                                            <option  value="4">April</option>
                                            <option  value="5">May</option>
                                            <option  value="6">June</option>
                                            <option  value="7">July</option>
                                            <option  value="8">August</option>
                                            <option  value="9">September</option>
                                            <option  value="10">October</option>
                                            <option  value="11">November</option>
                                            <option  value="12">December</option>
                                        </select>
                                        </label>
                                    </div>
                                    <input id="Day-P" type="number" maxlength="2" class="form-control H-16 Input-F-Quick TextDark" style="width: 25%; height: 54px;padding: 9px 10px;" placeholder="day" />
                                    <input id="Year-P" type="number" maxlength="4" class="form-control H-16 Input-F-Quick TextDark" style="width: 25%;height: 54px;padding: 9px 10px" placeholder="year" />
                                </div>
                            </div>
                            <div class="form-group mt-4 pr-0 ">
                                <label for="Issue" class="TextBlue H-16 ml-3">Place of issue *</label>
                                <div class="mt-0  selectdiv col-12 px-0">
                                    <label style="width: 100%;">
                                        <select id="Issue" name="Country" class="select-wrapper form-control H-16 Input-F-Quick TextDark" style="width: 100%; height: 54px;padding: 9px 10px;">
                                            <option value="Canada">Canada</option>
                                            <option value="United States of America">United States of America</option>
                                            <option value="Afganistan">Afghanistan</option>
                                            <option value="Albania">Albania</option>
                                            <option value="Algeria">Algeria</option>
                                            <option value="American Samoa">American Samoa</option>
                                            <option value="Andorra">Andorra</option>
                                            <option value="Angola">Angola</option>
                                            <option value="Anguilla">Anguilla</option>
                                            <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Armenia">Armenia</option>
                                            <option value="Aruba">Aruba</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Austria">Austria</option>
                                            <option value="Azerbaijan">Azerbaijan</option>
                                            <option value="Bahamas">Bahamas</option>
                                            <option value="Bahrain">Bahrain</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Barbados">Barbados</option>
                                            <option value="Belarus">Belarus</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="Belize">Belize</option>
                                            <option value="Benin">Benin</option>
                                            <option value="Bermuda">Bermuda</option>
                                            <option value="Bhutan">Bhutan</option>
                                            <option value="Bolivia">Bolivia</option>
                                            <option value="Bonaire">Bonaire</option>
                                            <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                            <option value="Botswana">Botswana</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                            <option value="Brunei">Brunei</option>
                                            <option value="Bulgaria">Bulgaria</option>
                                            <option value="Burkina Faso">Burkina Faso</option>
                                            <option value="Burundi">Burundi</option>
                                            <option value="Cambodia">Cambodia</option>
                                            <option value="Cameroon">Cameroon</option>
                                            <option value="Canary Islands">Canary Islands</option>
                                            <option value="Cape Verde">Cape Verde</option>
                                            <option value="Cayman Islands">Cayman Islands</option>
                                            <option value="Central African Republic">Central African Republic</option>
                                            <option value="Chad">Chad</option>
                                            <option value="Channel Islands">Channel Islands</option>
                                            <option value="Chile">Chile</option>
                                            <option value="China">China</option>
                                            <option value="Christmas Island">Christmas Island</option>
                                            <option value="Cocos Island">Cocos Island</option>
                                            <option value="Colombia">Colombia</option>
                                            <option value="Comoros">Comoros</option>
                                            <option value="Congo">Congo</option>
                                            <option value="Cook Islands">Cook Islands</option>
                                            <option value="Costa Rica">Costa Rica</option>
                                            <option value="Cote DIvoire">Cote DIvoire</option>
                                            <option value="Croatia">Croatia</option>
                                            <option value="Cuba">Cuba</option>
                                            <option value="Curaco">Curacao</option>
                                            <option value="Cyprus">Cyprus</option>
                                            <option value="Czech Republic">Czech Republic</option>
                                            <option value="Denmark">Denmark</option>
                                            <option value="Djibouti">Djibouti</option>
                                            <option value="Dominica">Dominica</option>
                                            <option value="Dominican Republic">Dominican Republic</option>
                                            <option value="East Timor">East Timor</option>
                                            <option value="Ecuador">Ecuador</option>
                                            <option value="Egypt">Egypt</option>
                                            <option value="El Salvador">El Salvador</option>
                                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                                            <option value="Eritrea">Eritrea</option>
                                            <option value="Estonia">Estonia</option>
                                            <option value="Ethiopia">Ethiopia</option>
                                            <option value="Falkland Islands">Falkland Islands</option>
                                            <option value="Faroe Islands">Faroe Islands</option>
                                            <option value="Fiji">Fiji</option>
                                            <option value="Finland">Finland</option>
                                            <option value="France">France</option>
                                            <option value="French Guiana">French Guiana</option>
                                            <option value="French Polynesia">French Polynesia</option>
                                            <option value="French Southern Ter">French Southern Ter</option>
                                            <option value="Gabon">Gabon</option>
                                            <option value="Gambia">Gambia</option>
                                            <option value="Georgia">Georgia</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Ghana">Ghana</option>
                                            <option value="Gibraltar">Gibraltar</option>
                                            <option value="Great Britain">Great Britain</option>
                                            <option value="Greece">Greece</option>
                                            <option value="Greenland">Greenland</option>
                                            <option value="Grenada">Grenada</option>
                                            <option value="Guadeloupe">Guadeloupe</option>
                                            <option value="Guam">Guam</option>
                                            <option value="Guatemala">Guatemala</option>
                                            <option value="Guinea">Guinea</option>
                                            <option value="Guyana">Guyana</option>
                                            <option value="Haiti">Haiti</option>
                                            <option value="Hawaii">Hawaii</option>
                                            <option value="Honduras">Honduras</option>
                                            <option value="Hong Kong">Hong Kong</option>
                                            <option value="Hungary">Hungary</option>
                                            <option value="Iceland">Iceland</option>
                                            <option value="Indonesia">Indonesia</option>
                                            <option value="India">India</option>
                                            <option value="Iran">Iran</option>
                                            <option value="Iraq">Iraq</option>
                                            <option value="Ireland">Ireland</option>
                                            <option value="Isle of Man">Isle of Man</option>
                                            <option value="Israel">Israel</option>
                                            <option value="Italy">Italy</option>
                                            <option value="Jamaica">Jamaica</option>
                                            <option value="Japan">Japan</option>
                                            <option value="Jordan">Jordan</option>
                                            <option value="Kazakhstan">Kazakhstan</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="Kiribati">Kiribati</option>
                                            <option value="Korea North">Korea North</option>
                                            <option value="Korea Sout">Korea South</option>
                                            <option value="Kuwait">Kuwait</option>
                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                            <option value="Laos">Laos</option>
                                            <option value="Latvia">Latvia</option>
                                            <option value="Lebanon">Lebanon</option>
                                            <option value="Lesotho">Lesotho</option>
                                            <option value="Liberia">Liberia</option>
                                            <option value="Libya">Libya</option>
                                            <option value="Liechtenstein">Liechtenstein</option>
                                            <option value="Lithuania">Lithuania</option>
                                            <option value="Luxembourg">Luxembourg</option>
                                            <option value="Macau">Macau</option>
                                            <option value="Macedonia">Macedonia</option>
                                            <option value="Madagascar">Madagascar</option>
                                            <option value="Malaysia">Malaysia</option>
                                            <option value="Malawi">Malawi</option>
                                            <option value="Maldives">Maldives</option>
                                            <option value="Mali">Mali</option>
                                            <option value="Malta">Malta</option>
                                            <option value="Marshall Islands">Marshall Islands</option>
                                            <option value="Martinique">Martinique</option>
                                            <option value="Mauritania">Mauritania</option>
                                            <option value="Mauritius">Mauritius</option>
                                            <option value="Mayotte">Mayotte</option>
                                            <option value="Mexico">Mexico</option>
                                            <option value="Midway Islands">Midway Islands</option>
                                            <option value="Moldova">Moldova</option>
                                            <option value="Monaco">Monaco</option>
                                            <option value="Mongolia">Mongolia</option>
                                            <option value="Montserrat">Montserrat</option>
                                            <option value="Morocco">Morocco</option>
                                            <option value="Mozambique">Mozambique</option>
                                            <option value="Myanmar">Myanmar</option>
                                            <option value="Nambia">Nambia</option>
                                            <option value="Nauru">Nauru</option>
                                            <option value="Nepal">Nepal</option>
                                            <option value="Netherland Antilles">Netherland Antilles</option>
                                            <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                            <option value="Nevis">Nevis</option>
                                            <option value="New Caledonia">New Caledonia</option>
                                            <option value="New Zealand">New Zealand</option>
                                            <option value="Nicaragua">Nicaragua</option>
                                            <option value="Niger">Niger</option>
                                            <option value="Nigeria">Nigeria</option>
                                            <option value="Niue">Niue</option>
                                            <option value="Norfolk Island">Norfolk Island</option>
                                            <option value="Norway">Norway</option>
                                            <option value="Oman">Oman</option>
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="Palau Island">Palau Island</option>
                                            <option value="Palestine">Palestine</option>
                                            <option value="Panama">Panama</option>
                                            <option value="Papua New Guinea">Papua New Guinea</option>
                                            <option value="Paraguay">Paraguay</option>
                                            <option value="Peru">Peru</option>
                                            <option value="Phillipines">Philippines</option>
                                            <option value="Pitcairn Island">Pitcairn Island</option>
                                            <option value="Poland">Poland</option>
                                            <option value="Portugal">Portugal</option>
                                            <option value="Puerto Rico">Puerto Rico</option>
                                            <option value="Qatar">Qatar</option>
                                            <option value="Republic of Montenegro">Republic of Montenegro</option>
                                            <option value="Republic of Serbia">Republic of Serbia</option>
                                            <option value="Reunion">Reunion</option>
                                            <option value="Romania">Romania</option>
                                            <option value="Russia">Russia</option>
                                            <option value="Rwanda">Rwanda</option>
                                            <option value="St Barthelemy">St Barthelemy</option>
                                            <option value="St Eustatius">St Eustatius</option>
                                            <option value="St Helena">St Helena</option>
                                            <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                            <option value="St Lucia">St Lucia</option>
                                            <option value="St Maarten">St Maarten</option>
                                            <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                            <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                            <option value="Saipan">Saipan</option>
                                            <option value="Samoa">Samoa</option>
                                            <option value="Samoa American">Samoa American</option>
                                            <option value="San Marino">San Marino</option>
                                            <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                            <option value="Senegal">Senegal</option>
                                            <option value="Seychelles">Seychelles</option>
                                            <option value="Sierra Leone">Sierra Leone</option>
                                            <option value="Singapore">Singapore</option>
                                            <option value="Slovakia">Slovakia</option>
                                            <option value="Slovenia">Slovenia</option>
                                            <option value="Solomon Islands">Solomon Islands</option>
                                            <option value="Somalia">Somalia</option>
                                            <option value="South Africa">South Africa</option>
                                            <option value="Spain">Spain</option>
                                            <option value="Sri Lanka">Sri Lanka</option>
                                            <option value="Sudan">Sudan</option>
                                            <option value="Suriname">Suriname</option>
                                            <option value="Swaziland">Swaziland</option>
                                            <option value="Sweden">Sweden</option>
                                            <option value="Switzerland">Switzerland</option>
                                            <option value="Syria">Syria</option>
                                            <option value="Tahiti">Tahiti</option>
                                            <option value="Taiwan">Taiwan</option>
                                            <option value="Tajikistan">Tajikistan</option>
                                            <option value="Tanzania">Tanzania</option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="Togo">Togo</option>
                                            <option value="Tokelau">Tokelau</option>
                                            <option value="Tonga">Tonga</option>
                                            <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                            <option value="Tunisia">Tunisia</option>
                                            <option value="Turkey">Turkey</option>
                                            <option value="Turkmenistan">Turkmenistan</option>
                                            <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                            <option value="Tuvalu">Tuvalu</option>
                                            <option value="Uganda">Uganda</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="Ukraine">Ukraine</option>
                                            <option value="United Arab Erimates">United Arab Emirates</option>
                                            <option value="Uraguay">Uruguay</option>
                                            <option value="Uzbekistan">Uzbekistan</option>
                                            <option value="Vanuatu">Vanuatu</option>
                                            <option value="Vatican City State">Vatican City State</option>
                                            <option value="Venezuela">Venezuela</option>
                                            <option value="Vietnam">Vietnam</option>
                                            <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                            <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                            <option value="Wake Island">Wake Island</option>
                                            <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                                            <option value="Yemen">Yemen</option>
                                            <option value="Zaire">Zaire</option>
                                            <option value="Zambia">Zambia</option>
                                            <option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-lg-6 d-flex flex-column pl-4">
                                <p class="mt-4 mb-0 TextBlue H-20 fontW-500 ">Employment </p>
                                <div class="form-group mt-4 pr-0 ">
                                    <label for="Expiration" class="TextBlue H-16 ml-3">Employment *</label>
                                        <div class="mt-0 pr-0 selectdiv col-12 px-0">
                                            <label style="width: 100%;">
                                            <select name="Employment" class="select-wrapper form-control H-16 Input-F-Quick TextDark" style="width: 100%; height: 54px;padding: 9px 10px;">
                                                <option value="1" Selected>Employed</option>
                                                <option  value="2">Unemployed</option>
                                            </select>
                                            </label>
                                        </div>
                                    </div>

                                <div class="form-group mt-4 pr-0 ">
                                    <label for="Expiration" class="TextBlue H-16 ml-3">Anual income *</label>
                                    <div class="mt-0 pr-0 selectdiv col-12 px-0" >
                                        <label style="width: 100%;">
                                        <select name="Income" class="select-wrapper form-control H-16 Input-F-Quick TextDark" style="width: 100%; height: 54px;padding: 9px 10px;">
                                            <option value="1" Selected>20,000 - 50,000</option>
                                            <option  value="2">50,000 - 70,000</option>
                                            <option  value="3">70,000 - 100,000</option>
                                        </select>
                                        </label>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center mt-5">
                                    <button type="button" v-on:click="GoTo()" class="Bg-OrangeColor Ref  TextWhite H-18 col-5  align-self-end" style="border-radius: 8px;" >Cancel</button>
                                    <button type="button" v-on:click="CloseProfile('MyIdentify')" class="Ref-Button Ref TextWhite H-18 col-5  align-self-end">Save</button>

                                </div>
                        </div>
                    </div>
                </div>
                <!-- BOX PROFILE 1 ENDS-->
            </div>

            <!-- BANK ACCOUNTS -->
            <div class="my-4 row flex-column align-items-center">
                <!-- BANK ACCOUNTS DIV BUTTON STARTS-->
                <div class="row col-12 px-0">
                    <button type="button" id="Bank" class="btn Profile-Button col" v-on:click="OpenProfile('Bank')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
                    <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col">
                        <div class="d-flex align-items-center px-3">
                            <span class="TextDark"><i class="fas fa-university"></i></span>
                        </div>
                            <p class="TextDark H-16 fontW-600 mb-0">My <span class="d-none d-sm-inline-block"> saved</span> bank accounts</p>
                    </div>
                </div>
                <!-- BANK ACCOUNTS DIV BUTTON ENDS-->
                <!-- BOX PROFILE STARTS-->
                <div class="Welcome-Container pt-2 Box-Card  my-5 Bank col-12" id="Bank-BOX" v-if="bankBox">
                    <div class="d-flex justify-content-center justify-content-md-start mt-sm-4 ml-sm-5 ">
                        <p class="mt-4 TextDark fontW-600 H-24 ">Add a new account</p>
                    </div>
                    <div class="d-flex flex-lg-row flex-column justify-content-between px-sm-5 pb-5">
                        <div class="col-12 col-lg-6">
                            <div class="form-group mt-3 pr-0 ">
                                <div class="d-flex justify-content-between mt-4">
                                    <p class="mb-1 TextBlue H-14">Bank account *</p>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <img class="envelope-icon" src="Icons/Profile/question-circle-wallet-orange.svg" />
                                    </div>
                                </div>
                                <div class="selectdiv" style="width: 100%;">
                                    <label style="width: 100%;">
                                        <select id="Country" name="Country" class="mb-0 select-wrapper form-control H-14  Input-F-Quick TextDark" >
                                            <option value="Canada">Canada</option>
                                            <option value="United States of America">United States of America</option>
                                            <option value="Afganistan">Afghanistan</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group mt-3 pr-0 ">
                                <p class="mb-1 TextBlue H-14">Country *</p>
                                <div class="selectdiv" style="width: 100%;">
                                    <label style="width: 100%;">
                                        <select id="Country-B" name="Country-B" class="mb-0 select-wrapper form-control H-14  Input-F-Quick TextDark" >
                                        <option value="Canada">Canada</option>
                                        <option value="United States of America">United States of America</option>
                                        <option value="Afganistan">Afghanistan</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bonaire">Bonaire</option>
                                        <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                        <option value="Brunei">Brunei</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canary Islands">Canary Islands</option>
                                        <option value="Cape Verde">Cape Verde</option>
                                        <option value="Cayman Islands">Cayman Islands</option>
                                        <option value="Central African Republic">Central African Republic</option>
                                        <option value="Chad">Chad</option>
                                        <option value="Channel Islands">Channel Islands</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Christmas Island">Christmas Island</option>
                                        <option value="Cocos Island">Cocos Island</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Cook Islands">Cook Islands</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Cote DIvoire">Cote DIvoire</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Curaco">Curacao</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                        <option value="East Timor">East Timor</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Falkland Islands">Falkland Islands</option>
                                        <option value="Faroe Islands">Faroe Islands</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="French Guiana">French Guiana</option>
                                        <option value="French Polynesia">French Polynesia</option>
                                        <option value="French Southern Ter">French Southern Ter</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Great Britain">Great Britain</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guadeloupe">Guadeloupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Hawaii">Hawaii</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hong Kong">Hong Kong</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="India">India</option>
                                        <option value="Iran">Iran</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Isle of Man">Isle of Man</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Korea North">Korea North</option>
                                        <option value="Korea Sout">Korea South</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Laos">Laos</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libya">Libya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Macau">Macau</option>
                                        <option value="Macedonia">Macedonia</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Martinique">Martinique</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mayotte">Mayotte</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Midway Islands">Midway Islands</option>
                                        <option value="Moldova">Moldova</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Myanmar">Myanmar</option>
                                        <option value="Nambia">Nambia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherland Antilles">Netherland Antilles</option>
                                        <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                        <option value="Nevis">Nevis</option>
                                        <option value="New Caledonia">New Caledonia</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Niue">Niue</option>
                                        <option value="Norfolk Island">Norfolk Island</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau Island">Palau Island</option>
                                        <option value="Palestine">Palestine</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Phillipines">Philippines</option>
                                        <option value="Pitcairn Island">Pitcairn Island</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Republic of Montenegro">Republic of Montenegro</option>
                                        <option value="Republic of Serbia">Republic of Serbia</option>
                                        <option value="Reunion">Reunion</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="St Barthelemy">St Barthelemy</option>
                                        <option value="St Eustatius">St Eustatius</option>
                                        <option value="St Helena">St Helena</option>
                                        <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                        <option value="St Lucia">St Lucia</option>
                                        <option value="St Maarten">St Maarten</option>
                                        <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                        <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                        <option value="Saipan">Saipan</option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="Samoa American">Samoa American</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Swaziland">Swaziland</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syria">Syria</option>
                                        <option value="Tahiti">Tahiti</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Togo">Togo</option>
                                        <option value="Tokelau">Tokelau</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Erimates">United Arab Emirates</option>
                                        <option value="Uraguay">Uruguay</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Vatican City State">Vatican City State</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Vietnam">Vietnam</option>
                                        <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                        <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                        <option value="Wake Island">Wake Island</option>
                                        <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Zaire">Zaire</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group mt-4 pr-0 ">
                                <p class="mb-1 TextBlue H-14">Bank *</p>
                                <input id="Bank-P" type="text" class="form-control H-14  Input-F-Quick TextDark"  placeholder="ScotiaBank" />
                            </div>
                            <div class="form-group mt-4 pr-0 ">
                                <div class="d-flex justify-content-between mt-4">
                                    <p class="mb-1 TextBlue H-14">SWIFT/BIC Code * </p>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <img class="envelope-icon" src="Icons/Profile/question-circle-wallet-orange.svg" />
                                    </div>
                                </div>
                                <input id="Code" type="text" class="form-control H-14  Input-F-Quick TextDark"  placeholder="NOSCCATTXXX" />
                            </div>
                        </div>

                        <div class="col-12 col-lg-6 d-flex flex-column">

                                <div class="form-group  ">
                                    <div class="d-flex justify-content-between mt-4">
                                        <p class="mb-1 TextBlue H-14">Routing *</p>
                                        <div class="d-flex justify-content-center align-items-center">
                                            <img class="envelope-icon" src="Icons/Profile/question-circle-wallet-orange.svg" />
                                        </div>
                                    </div>
                                    <input id="Routing" type="text" class="form-control H-14  Input-F-Quick TextDark"  placeholder="45678" />
                                </div>

                                <div class="form-group mt-0 ">
                                    <div class="d-flex justify-content-between mt-0">
                                        <p class="mb-0 TextBlue H-14">Bank Code *</p>
                                        <div class="d-flex justify-content-center align-items-center">
                                            <img class="envelope-icon" src="Icons/Profile/question-circle-wallet-orange.svg" />
                                        </div>
                                    </div>
                                    <input id="BankCode" type="text" class="form-control H-14  Input-F-Quick"  placeholder="123" />
                                </div>

                                <div class="form-group mt-0 ">
                                    <div class="d-flex justify-content-between mt-0">
                                        <p class="mb-1 TextBlue H-14">Account Number: *</p>
                                        <div class="d-flex justify-content-center align-items-center">
                                            <img class="envelope-icon" src="Icons/Profile/question-circle-wallet-orange.svg" />
                                        </div>
                                    </div>
                                    <input id="Account-N" type="text" class="form-control H-14  Input-F-Quick"  placeholder="1234567" />
                                </div>
                                <div class="align-self-end mt-auto " >
                                    <button type="button" class="Blue-Button  H-14 TextWhite col px-0" >Add account</button>
                                </div>

                        </div>
                    </div>

                    <div class="d-flex justify-content-center justify-content-md-start mt-sm-4 ml-sm-5">
                        <p class="TextDark fontW-600 H-24">Saved bank accounts</p>
                    </div>
                    <div class="col-12 d-flex flex-column px-sm-5 pb-sm-5">
                        <table class="table Table-Hedpay" style="width:100%;">
                            <thead style="border-top: none;margin-top: 0;width: 100%;">
                                <tr class="mb-0">
                                    <td class="mb-0">Bank</td>
                                    <td class="mb-0">Account Number</td>
                                    <td class="mb-0">Country</td>
                                    <td class="mb-0">Save date</td>
                                    <td class="mb-0"></td>
                                    <td class="mb-0"></td>
                                </tr>
                            </thead>
                            <tbody class="Box-Card">
                                <tr>
                                    <td>ScotiaBank</td>
                                    <td>1234567</td>
                                    <td>Canada</td>
                                    <td>05/05/2021</td>
                                    <td class="text-center"><button type="button" class="btn Bg-LBlue Table-option-button p-0"><span class="TextWhite Bg-LBlue "><i class="fas fa-pen" style="font-size: 12px !important;"></i></span></button></td>
                                    <td class="text-center"><button type="button" class="btn Table-option-button p-0" style="background: #FFF;"><span class="RedColor "><i class="fas fa-minus-square" style="font-size: 21px !important;"></i></span></button></td>
                                </tr>
                                <tr>
                                    <td>ScotiaBank</td>
                                    <td>1234567</td>
                                    <td>Canada</td>
                                    <td>05/05/2021</td>
                                    <td class="text-center"><button type="button" class="btn Bg-LBlue Table-option-button p-0"><span class="TextWhite Bg-LBlue "><i class="fas fa-pen" style="font-size: 12px !important;"></i></span></button></td>
                                    <td class="text-center"><button type="button" class="btn Table-option-button p-0" style="background: #FFF;"><span class="RedColor "><i class="fas fa-minus-square" style="font-size: 21px !important;"></i></span></button></td>
                                </tr>
                                <tr>
                                    <td>ScotiaBank</td>
                                    <td>1234567</td>
                                    <td>Canada</td>
                                    <td>05/05/2021</td>
                                    <td class="text-center"><button type="button" class="btn Bg-LBlue Table-option-button p-0"><span class="TextWhite Bg-LBlue "><i class="fas fa-pen" style="font-size: 12px !important;"></i></span></button></td>
                                    <td class="text-center"><button type="button" class="btn Table-option-button p-0" style="background: #FFF;"><span class="RedColor "><i class="fas fa-minus-square" style="font-size: 21px !important;"></i></span></button></td>
                                </tr>
                                <tr>
                                    <td>ScotiaBank</td>
                                    <td>1234567</td>
                                    <td>Canada</td>
                                    <td>05/05/2021</td>
                                    <td class="text-center"><button type="button" class="btn Bg-LBlue Table-option-button p-0"><span class="TextWhite Bg-LBlue "><i class="fas fa-pen" style="font-size: 12px !important;"></i></span></button></td>
                                    <td class="text-center"><button type="button" class="btn Table-option-button p-0" style="background: #FFF;"><span class="RedColor "><i class="fas fa-minus-square" style="font-size: 21px !important;"></i></span></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- BOX PROFILE ENDS-->
            </div>

          <!-- SECTIONS DROPDOWN DIVS ENDS-->

          </section>

        </div>
    </div>
</template>
<style src="./style.scss" lang="scss" scoped>
$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid"; // fas
@import "~@fortawesome/fontawesome-free/scss/regular"; // far
@import "~@fortawesome/fontawesome-free/scss/brands"; // fab
</style>
<script src="./script.js"></script>
