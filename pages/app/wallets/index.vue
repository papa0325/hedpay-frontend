<template>
	<section class="d-flex flex-column pl-lg-5 pr-lg-3 px-md-3 px-2">
		<div class="col-12 row flex-column flex-xl-row">
			<div class="col-xl-4 col-12">
				<!-- Add funds by Card -->
				<div>
					<div class="col-12 px-0">
						<p class="H-18 fontW-500 LigthBlue text-left my-2">Add funds by Card</p>
					</div>
					<div class="col-12 Box-Card px-4 py-4 Funds-Step1" >
						<div class="H-16 LigthBlue fontW-500 my-0 mb-3">Please choose *</div>
						<div class="d-flex">
							<select class="H-16 shadow-sm p-2 mb-3 bg-white rounded	border w-100">
								<option value="USD"><p class=" H-14 TextDark my-0">USD - Dollar</p></option>
								<option value="EUR"><p class=" H-14 TextDark my-0">EUR - Euro</p></option>
								<option value="GBP"><p class=" H-14 TextDark my-0">GBP - British Pound</p></option>
								<option value="HDP"><p class=" H-14 TextDark my-0">HDP - Hdp.ф</p></option>
								<option value="BTC"><p class=" H-14 TextDark my-0">BTC - Bitcoin</p></option>
								<option value="ETH"><p class=" H-14 TextDark my-0">ETH - Ethereum</p></option>
								<option value="USDT"><p class=" H-14 TextDark my-0">USDT - Tether</p></option>
							</select>
						</div>
						<div class="H-16 LigthBlue fontW-500 my-0 mb-3">Wallet address *</div>
						<input type="text" placeholder="Your wallet address" class="H-14 shadow-sm p-2 mb-3 bg-white rounded border" />
						<div class="d-flex justify-content-between">
							<div>
								<div class="H-16 LigthBlue fontW-500 my-0 mb-3">Currency type *</div>
								<select class="H-16 shadow-sm p-2 mb-3 bg-white rounded	border w-100">
									<option value="GBP"><p class=" H-14 TextDark my-0">USD - Dollar</p></option>
									<option value="GBP"><p class=" H-14 TextDark my-0">CAD - Canadian Dollar</p></option>
									<option value="GBP"><p class=" H-14 TextDark my-0">EUR - Euro</p></option>
									<option value="GBP"><p class=" H-14 TextDark my-0">GBP - British Pound</p>
									</option>
								</select>
							</div>
							<div>
								<div class="H-16 LigthBlue fontW-500 my-0 mb-3">Amount *</div>
								<input type="text" placeholder="$" class="H-14 shadow-sm p-2 mb-3 bg-white rounded border" />
							</div>
						</div>
						<div class="px-3">
							<div class="d-flex justify-content-between mb-3">
								<div class="H-16 TextBlack">Price</div>
								<div class="H-16 TextBlack">1 HDP = 0.5870 USD</div>
							</div>
							<div class="d-flex justify-content-between mb-3">
								<div class="H-16 TextBlack fontW-500">Total Price</div>
								<div class="H-16 TextBlackfontW-500">0 USD</div>
							</div>
							<div class="d-flex justify-content-between mb-3">
								<div class="H-16 LigthBlue fontW-500">Receive</div>
								<div class="H-16 LigthBlue fontW-500">0 HDP</div>
							</div>
						</div>
						<div class="d-flex justify-content-center mt-5">
							<button class="Bg-LBlue TextWhite rounded px-5 py-2 text-white w-50" @click="step1Tostep2()">Next</button>
						</div>
					</div>
					<div class="col-12 Box-Card px-4 py-4 Funds-Step2" style="display: none;">
						<div class="control-group mt-3 col-12 px-0">
							<label class="H-14 LigthBlue" for="CardName">Card Name *</label>
							<input type="text" class="Invite-Input H-16 TextDark form-control" id="CardName"  placeholder="Enter name as it appears on card"/>
						</div>
						<div class="d-flex justify-content-between align-items-center position-relative">
							<div class="control-group mt-3 col-sm-9 col-12 px-0">
								<label class="H-14 LigthBlue" for="CardNumber">Card Number *</label>
								<input type="number" autocomplete="off" pattern="\d*" maxlength="19" minlength="16" onkeyup="VerifyCard(this.value)"  class="Invite-Input H-16 TextDark form-control" id="CardNumber"  placeholder="0000 0000 0000 0000"/>
							</div>
							<div class="d-flex col-3 justify-content-center align-items-center mt-5 CardsIcons">
								<img src="~assets/Icons/cc-mastercard-gray.svg" class="MC-Gray mr-2">
								<img src="~assets/Icons/cc-mastercard-orange.svg" class="MC-Orange mr-2" style="display: none;">
								<img src="~assets/Icons/cc-visa-orange.svg" class="V-Orange" style="display: none;">
								<img src="~assets/Icons/cc-visa-gray.svg" class="V-Gray">
							</div>
						</div>
						<div class="col-12 px-0  d-flex flex-column flex-sm-row justify-content-between">
							<div class="control-group mt-3 col-12 col-sm-6 pr-sm-2 px-0">
								<label class="H-14 LigthBlue" for="Expiration">Expiration date *</label>
								<input type="month" value="2023-06" class="Invite-Input H-16 TextDark form-control" id="Expiration"  pattern="[0-9]{4}-[0-9]{2}" placeholder="Year/Month"/>
							</div>
							<div class="control-group mt-3 col-12 col-sm-6 pl-sm-2 px-0">
								<label class="H-14 LigthBlue" for="code">Security code *</label>
								<input type="number" maxlength="3" minlength="3" class="Invite-Input H-16 TextDark form-control" id="code"  placeholder="3 digits"/>
							</div>
						</div>
						<div class="mt-md-5 d-flex flex-column align-items-center ">
							<button type="button" @click="step2Tostep3()" class="Ref-Button py-2 col-md-6 TextWhite H-14  align-self-center">Submit</button>
							<button type="button" @click="step2Tostep1()" class="btn py-2 col-md-6 LigthBlue H-14 " style="border-radius: 8px;">Go back</button>
						</div>
					</div>
					<div class="col-12 Box-Card px-3 py-4 Funds-Step3" style="display: none;">
						<div class="d-flex justify-content-center align-items-center mt-3 mb-5 col-12  Funds-LabelBlue">
							<p class="H-14 fontW-600 TextWhite mb-0 pr-2" >Transfer confirmation</p>
							<img src="~assets/Icons/check-w.svg" class="Icon-Ref-New">
						</div>
						<div class="d-flex align-items-start">
							<div class="d-flex flex-column col-6 pl-0">
								<div class="d-flex flex-column col linebottomgray ">
									<p class="H-14 LigthBlue my-2">Confirmation number</p>
									<p class="H-14 TextDark  mb-1">2165261578469832</p>
								</div>
								<div class="d-flex flex-column col linebottomgray">
									<p class="H-14 LigthBlue my-2">Total price</p>
									<p class="H-14 TextDark fontW-500 mb-1"><span class="Amount-Wallet"> 0</span> <span class="Curr-Value">USD</span></p>
								</div>
								<div class="d-flex flex-column col linebottomgray">
									<p class="H-14 LigthBlue my-2">Price</p>
									<p class="H-14 TextDark  mb-1">1 <span class="Fund-Value">HDP</span> = <span class="Rate-Wallet">0.5870</span> <span class="Curr-Value">USD</span></p>
								</div>
								<div class="d-flex flex-column col linebottomgray">
									<p class="H-14 LigthBlue  my-2">Visa credit card number</p>
									<p class="H-14 TextDark mb-1">**** **** **** 4567</p>
								</div>
							</div>
							<div class="d-flex flex-column col-6 pr-0">
								<div class="d-flex flex-column col linebottomgray">
									<p class="H-14 LigthBlue my-2">Date</p>
									<p class="H-14 TextDark mb-1">May 7, 2021</p>
								</div>
								<div class="d-flex flex-column col linebottomgray">
									<p class="H-14 LigthBlue my-2">Receive</p>
									<p class="H-14 TextDark fontW-500 mb-1"><span class="Convertion-Wallet"> 0 </span> <span class="Fund-Value">HDP</span></p>
								</div>
								<div class="d-flex flex-column col linebottomgray">
									<p class="H-14 LigthBlue my-2">Wallet address account</p>
									<p class="H-14 TextDark mb-1" style="word-wrap: break-word;">HDP0xb6CE559DC67268b8c4317577346566788347823479</p>
								</div>
							</div>
						</div>
						<div class="mt-md-5">
							<button type="button" @click="step3Tostep1()" class="btn py-2 col LigthBlue H-14 " style="border-radius: 8px;">Go back</button>
						</div>
					</div>
				</div>
				<!-- Add funds by wire transfer -->
				<div>
					<div class="H-20 LigthBlue fontW-500 my-0 mb-3">Add funds by wire transfer</div>
					<div class="add-funds-by-card border shadow p-3 mb-5 bg-white rounded">
						<div class="mb-3">
							<img src="~assets/Icons/Profile/question-circle-wallet-orange.svg" />
							<div class="H-16 OrangeColor fontW-500">Other methods to add funds</div>
						</div>
						<div class="mb-3">
							<div class="H-16 LigthBlue fontW-500">Bank wire transfer</div>
							<div class="d-flex">
								<img class="pr-1" src="~assets/Icons/Profile/question-circle-wallet-blue.svg"	/>
								<div class="H-16 fontW-500">SEPA</div>
							</div>
							<div class="d-flex">
								<img class="pr-1" src="~assets/Icons/Profile/question-circle-wallet-blue.svg"	/>
								<div class="H-16 fontW-500">International</div>
							</div>
						</div>
						<div class="mb-3">
							<div class="H-16 LigthBlue fontW-500">Interac only canadian bank</div>
						</div>
						<div class="mb-3">
							<div class="H-16 TextBlack">
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
							</div>
						</div>
						<div class="mb-3">
							<div class="H-16 TextBlack text-center">Learn more details</div>
						</div>
						<div class="d-flex justify-content-center mt-3">
							<button class="Bg-LBlue btn-sm px-5 py-2 text-white" v-on:click="GoToFAQ()">FAQ</button>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-7 ">
				<!-- Add funds by Transfer -->
				<div class="col-12 px-0">
					<p class="H-18 fontW-500 LigthBlue text-left my-2">Transfer</p>
				</div>
				<!-- TRANSFER-INTERNAL-EXTERNAL STARTS-->
				<div class="Box-Card px-4 py-4 Transfer-Internal-External">
					<div class="d-flex flex-sm-row flex-column justify-content-center align-items-center pb-4">
						<button type="button" @click="ExterenalToHedpay()" class="btn btn-secundary py-1 H-14  Active-Wallet mx-sm-2 hedpay_button">Transfer within Hedpay</button>
						<button type="button" @click="HedpayToExternal()" class="btn btn-secundary py-1 H-14 mx-sm-2 external_button">Transfer to external</button>
					</div>
					<!-- TRANSFER-WITHIN-HEDPAY STARTS -->
					<div class="row flex-column Transfer-within-hedpay">
						<div class="col-12 px-0 row align-items-start">
							<div class="col-lg-6">
								<div class="control-group col-12  ">
									<div class="H-16 LigthBlue fontW-500 my-0 mb-3">Please choose *</div>
									<div class="d-flex">
										<select class="H-16 shadow-sm p-2 mb-3 bg-white rounded	border w-100">
											<option value="USD"><p class=" H-14 TextDark my-0">USD - Dollar</p></option>
											<option value="EUR"><p class=" H-14 TextDark my-0">EUR - Euro</p></option>
											<option value="GBP"><p class=" H-14 TextDark my-0">GBP - British Pound</p></option>
											<option value="HDP"><p class=" H-14 TextDark my-0">HDP - Hdp.ф</p></option>
											<option value="BTC"><p class=" H-14 TextDark my-0">BTC - Bitcoin</p></option>
											<option value="ETH"><p class=" H-14 TextDark my-0">ETH - Ethereum</p></option>
											<option value="USDT"><p class=" H-14 TextDark my-0">USDT - Tether</p></option>
										</select>
									</div>
								</div>
									<div class="control-group col-12 ">
										<label class="H-16 LigthBlue text-left fontW-500" for="Amount-Transfer">Amount *</label>
										<div class="d-flex col-12 px-0">
											<input type="number" style="border-right:none;border-radius: 6px 0 0 6px;" class="Invite-Input H-14 TextDark form-control col-sm-9 col-8 " id="Amount-Transfer"  placeholder="20,000,000.00"/>
											<span class="d-flex justify-content-center align-items-center col-sm-3 col-4 Invite-Input" style="border-left:none;border-radius:0 6px 6px 0;">
												<p class="H-14 BD-Color mb-0 Asset-Value-A"><img src="~assets/images/HDP.svg" /> Hdp.ф</p>
											</span>
										</div>
									</div>
									<div class="control-group mt-3 col-12 ">
										<label class="H-16 LigthBlue text-left fontW-500" >Send to contact </label>
										<div class="d-flex col-12 px-0  SelectContacts Trans" >
											<select class="col-12 Invite-Input  pr-0" style="border-left:none !important; background: #FFFFFF !important; " >
												<option value="0" >Josephine C.</option>
												<option value="1">Harry H.</option>
												<option value="2">Maria D.</option>
												<option value="3">Chantal O.</option>
												<option value="4">Camilo P.</option>
											</select>
												<!-- <button class="btn Contact-Button position-absolute">
														<img src="Icons/Profile/Blue-contacts.svg" />
												</button> -->
										</div>
									</div>
									<div class="control-group mt-3 col-12">
										<label class="H-16 LigthBlue text-left pt-3 fontW-500" for="UID">Or UID</label>
										<div class="d-flex col-12 px-0">
											<input type="text" style="border-right:none;border-radius: 6px 0 0 6px;" class="Invite-Input H-14 TextDark form-control col-9 " id="Amount-Transfer" placeholder="HDP0xb6CE559DC67268b8c431757734656678…"/>
											<button class="d-flex justify-content-center align-items-center col-3 Ref-Button my-0" style="border-left:none;border-radius:0 6px 6px 0;">
												<p class="H-14 TextWhite mb-0">Paste</p>
											</button>
										</div>
									</div>
							</div>
							<div class="col-lg-6 ">
								<label class="H-16 LigthBlue text-left fontW-500">Available in my wallet</label>
								<div class="d-flex justify-content-between col-12">
									<div class="d-flex align-items-center justify-content-center mb-0">
										<p class="H-14 BD-Color fontW-600 mb-0 Asset-Value fontW-500"><img src="~assets/images/HDP.svg" /> HDP - Hdp.ф</p>
									</div>
									<label class="H-14 BD-Color fontW-600 mb-0 fontW-500">20,000,000.00 <span class="Asset-Symbol">ф</span></label>
								</div>
								<!-- <div class="d-flex  justify-content-end mt-0 col-12">
										<p class="H-14 LigthBlue my-0">Hdp.ф</p>
										<label class="H-14 LigthBlue my-0">20,000,000.00 <span class="Asset-Value">USD</span></label>
								</div> -->
								<div class="control-group mt-3 col-12 pt-3">
									<label class="H-16 LigthBlue text-left fontW-500" for="Email">Email *</label>
									<input type="text" class="Invite-Input H-14 TextDark form-control " id="Email"  placeholder="Enter your wallet address"/>
								</div>
								<div class="control-group mt-3 col-12">
									<label class="H-16 LigthBlue text-left fontW-500" for="Message">Message</label>
									<textarea type="text" class="Invite-Input H-14 TextDark form-control " id="Message"  placeholder="Write your message here…"></textarea>
								</div>
							</div>
						</div>
						<div class="d-flex justify-content-center align-items-center mt-md-5 col-12">
							<button type="button" @click="HedpayToSubmit()" class="Ref-Button py-2 TextWhite H-16 col-md-6">Submit</button>
						</div>
					</div>
					<!-- TRANSFER-WITHIN-HEDPAY ENDS -->
					<!-- TRANSFER-TO-EXTERNAL STARTS -->
					<div class="row flex-column Transfer-to-external" style="display: none;">
						<div class="col-12 px-0 row">
							<div class="col-lg-6">
								<div class="control-group col-12  ">
									<div class="H-16 OrangeColor fontW-500 my-0 mb-3">Please choose *</div>
									<div class="d-flex">
										<select class="H-16 shadow-sm p-2 mb-3 bg-white rounded	border w-100" @change="selectCurrency">
											<option value="USD"><p class=" H-14 TextDark my-0">USD - Dollar</p></option>
											<option value="EUR"><p class=" H-14 TextDark my-0">EUR - Euro</p></option>
											<option value="GBP"><p class=" H-14 TextDark my-0">GBP - British Pound</p></option>
											<option value="HDP"><p class=" H-14 TextDark my-0">HDP - Hdp.ф</p></option>
											<option value="BTC"><p class=" H-14 TextDark my-0">BTC - Bitcoin</p></option>
											<option value="ETH"><p class=" H-14 TextDark my-0">ETH - Ethereum</p></option>
											<option value="USDT"><p class=" H-14 TextDark my-0">USDT - Tether</p></option>
										</select>
									</div>
								</div>
								<div v-if="selectHDP" class="control-group col-12">
									<div class="H-16 OrangeColor fontW-500 my-0 mb-3">Chain *</div>
									<div class="d-flex">
										<select class="H-16 shadow-sm p-2 mb-3 bg-white rounded	border w-100">
											<option value="ERC20"><p class=" H-14 TextDark my-0">ERC20</p></option>
											<option value="BEP20"><p class=" H-14 TextDark my-0">BEP20</p></option>
										</select>
									</div>
								</div>
								<div class="control-group col-12 ">
									<label class="H-16 OrangeColor text-left fontW-500" for="Amount-Transfer">Amount *</label>
									<div class="d-flex col-12 px-0">
										<input type="number" style="border-right:none;border-radius: 6px 0 0 6px;" class="Invite-Input H-14 TextDark form-control col-sm-9 col-8 " id="Amount-Transfer"  placeholder="20,000,000.00"/>
										<span class="d-flex justify-content-center align-items-center col-sm-3 col-4 Invite-Input" style="border-left:none;border-radius:0 6px 6px 0;">
												<p class="H-14 BD-Color mb-0 Settl-Value-A"><img src="~assets/images/HDP.svg" /> Hdp.ф</p>
										</span>
									</div>
								</div>
								<div class="control-group  col-12 position-relative">
									<label class="H-16 OrangeColor text-left pt-3 fontW-500" >Send to contact </label>
									<div class="d-flex col-12 px-0  SelectContacts mb-4 ">
										<select class="col-12 Invite-Input Contacts-Ext pr-0" style="border-left:none !important; background: #FFFFFF !important; " >
											<option value="0" >Josephine C.</option>
											<option value="1">Harry H.</option>
											<option value="2">Maria D.</option>
											<option value="3">Chantal O.</option>
											<option value="4">Camilo P.</option>
										</select>
									</div>
								</div>
								<div class="control-group col-12 text-right">
									<a href="/app/contactus" target="_blank" class="H-14 OrangeColor pt-3 text-left">Add new contact</a>
								</div>
							</div>
							<div class="col-lg-6 ">
									<label class="H-16 OrangeColor text-left fontW-500">Available in my wallet</label>
									<div class="d-flex justify-content-between col-12">
										<div class="d-flex align-items-center justify-content-center mb-0">
											<p class="H-14 BD-Color fontW-500 mb-0 Settl-Value"><img src="~assets/images/HDP.svg" /> HDP - Hdp.ф</p>
										</div>
										<label class="H-14 BD-Color fontW-500 mb-0">20,000,000.00 <span class="Settl-Symbol">ф</span></label>
									</div>
									<!-- <div class="d-flex justify-content-between col-12 py-2">
											<div class="d-flex align-items-center justify-content-center mb-0">
													<img src="Icons/HDP.svg" style="width:20px; height:14px;" class="mr-1">
													<p class="H-14 BD-Color fontW-600 mb-0">HDP</p>
											</div>
											<label class="H-14 BD-Color fontW-600 mb-0">20,000,000.00 ф</label>
									</div> -->
									<!-- <div class="d-flex  justify-content-between mt-0 col-12">
											<p class="H-14 LigthBlue my-0">Hdp.ф</p>
											<label class="H-14 LigthBlue my-0">20,000,000.00 USD</label>
									</div> -->
									<div class="control-group mt-3 col-12 pt-3">
										<label class="H-16 OrangeColor text-left fontW-500" for="Email-External">Email *</label>
										<input type="text" class="Invite-Input H-14 TextDark form-control " id="Email-External"  placeholder="Enter your wallet address"/>
									</div>
									<div class="control-group mt-3 col-12 ">
										<label class="H-16 OrangeColor text-left fontW-500" for="Message">Message</label>
										<textarea type="text" class="Invite-Input H-14 TextDark form-control " id="Message"  placeholder="Write your message here…"></textarea>
									</div>
							</div>
						</div>
						<div class="d-flex justify-content-center align-items-center mt-md-5 col-12">
							<button type="button" @click="ExternalToSubmit()" class="external-submit rounded py-2 TextWhite H-16 col-md-6">Submit</button>
						</div>
					</div>
					<!-- TRANSFER-TO-EXTERNAL ENDS -->
				</div>
				<!-- TRANSFER-INTERNAL-EXTERNAL ENDS-->
				<!-- TRANSFER CONFIRMATION STARTS -->
				<div class="col-12 Box-Card px-3 py-4 Transfers-within-hedpay-Step2" style="display: none;">
					<div class="d-flex justify-content-center align-items-center col-12 mt-3 mb-5">
						<div class="d-flex justify-content-center align-items-center  col-sm-6  Funds-LabelBlue">
							<p class="H-14 fontW-500 TextWhite mb-0 pr-2" >Transfer confirmation</p>
							<img src="~assets/Icons/check-w.svg" class="Icon-Ref-New">
						</div>
					</div>
					<div class="d-flex align-items-start">
						<div class="d-flex flex-column col-6 pl-0">
							<div class="d-flex flex-column col linebottomgray ">
								<p class="H-14 LigthBlue my-2 fontW-500">Confirmation number</p>
								<p class="H-14 TextDark  mb-1 fontW-500">2165261578469832</p>
							</div>
							<div class="d-flex flex-column col linebottomgray">
								<p class="H-14 LigthBlue my-2 fontW-500">Date of transfer</p>
								<p class="H-14 TextDark mb-1 fontW-500">May 7, 2021</p>
							</div>
							<div class="d-flex flex-column col linebottomgray">
								<p class="H-14 LigthBlue my-2 fontW-500">Quantity</p>
								<p class="H-14 TextDark fontW-500 mb-1">200.0000 Hdp.ф</p>
							</div>
							<div class="d-flex flex-column col linebottomgray">
								<p class="H-14 LigthBlue  my-2 fontW-500">Balance</p>
								<p class="H-14 TextDark fontW-500 mb-1">710.0000 Hdp.ф</p>
							</div>
						</div>
						<div class="d-flex flex-column col-6 pr-0">
							<div class="d-flex flex-column col linebottomgray">
								<p class="H-14 LigthBlue my-2 fontW-500">Sent to wallet address</p>
								<p class="H-14 TextDark mb-1 fontW-500" style="word-wrap: break-word;">HDP0xb6CE559DC67268b8c4317577346566788347823479436384834349</p>
							</div>
							<div class="d-flex flex-column col linebottomgray">
								<p class="H-14 LigthBlue my-2 fontW-500">Recipient’s email</p>
								<p class="H-14 TextDark mb-1 fontW-500">harry@malopan.com</p>
							</div>
							<div class="d-flex flex-column col linebottomgray">
								<p class="H-14 LigthBlue my-2 fontW-500">Message</p>
								<p class="H-14 TextDark mb-1 fontW-500" style="word-wrap: break-word;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.</p>
							</div>
						</div>
					</div>

					<div class="mt-md-5">
							<button type="button" @click="GoToHedpay()" class="btn py-2 col LigthBlue H-14 " style="border-radius: 8px;">Go back</button>
					</div>

				</div>
				<!-- TRANSFER CONFIRMATION ENDS -->
				<!-- EXTERNAL CONFIRMATION STARTS -->
				<div class="col-12 Box-Card px-3 py-4 External-Step2" style="display: none;">
					<div class="d-flex justify-content-center align-items-center col-12 mt-3 mb-5">
						<div class="d-flex justify-content-center align-items-center col-sm-6 Funds-LabelOrange">
							<p class="H-14 fontW-500 TextWhite mb-0 pr-2" >Transfer confirmation</p>
							<img src="~assets/Icons/check-w.svg" class="Icon-Ref-New">
						</div>
					</div>
					<div class="row align-items-start">
						<div class="d-flex flex-column col-sm-6 col-md-4 pl-md-0">
							<div class="d-flex flex-column col linebottomgray ">
								<p class="H-14 OrangeColor my-2 fontW-500">Confirmation number</p>
								<p class="H-14 TextDark  mb-1 fontW-500">2165261578469832</p>
							</div>
							<div class="d-flex flex-column col linebottomgray">
								<p class="H-14 OrangeColor my-2 fontW-500">Date of transfer</p>
								<p class="H-14 TextDark mb-1 fontW-500">May 7, 2021</p>
							</div>
							<div class="d-flex flex-column col linebottomgray">
								<p class="H-14 OrangeColor my-2 fontW-500">Quantity</p>
								<p class="H-14 TextDark fontW-500 mb-1">200.0000 Hdp.ф</p>
							</div>
							<div class="d-flex flex-column col linebottomgray">
								<p class="H-14 OrangeColor  my-2 fontW-500">Balance</p>
								<p class="H-14 TextDark fontW-500 mb-1">710.0000 Hdp.ф</p>
							</div>
							<div class="d-flex flex-column col linebottomgray">
								<p class="H-14 OrangeColor my-2 fontW-500">Transfer to</p>
								<p class="H-14 TextDark mb-1 fontW-500">Harry Hekimian</p>
							</div>
						</div>
						<div class="d-flex flex-column col-sm-6 col-md-4 pl-md-0">
							<div class="d-flex flex-column col linebottomgray ">
								<p class="H-14 OrangeColor my-2 fontW-500">Country</p>
								<p class="H-14 TextDark  mb-1 fontW-500">Canada</p>
							</div>
							<div class="d-flex flex-column col linebottomgray">
								<p class="H-14 OrangeColor my-2 fontW-500">Bank</p>
								<p class="H-14 TextDark mb-1 fontW-500">ScotiaBank</p>
							</div>
							<div class="d-flex flex-column col linebottomgray">
								<p class="H-14 OrangeColor my-2 fontW-500">SWIFT/BIC Code</p>
								<p class="H-14 TextDark mb-1 fontW-500">NOSCCATTXXX</p>
							</div>
							<div class="d-flex flex-column col linebottomgray">
								<p class="H-14 OrangeColor my-2 fontW-500">Routing</p>
								<p class="H-14 TextDark mb-1 fontW-500">45678</p>
							</div>
							<div class="d-flex flex-column col linebottomgray">
								<p class="H-14 OrangeColor my-2 fontW-500">Bank Code</p>
								<p class="H-14 TextDark mb-1 fontW-500">1235548471448</p>
							</div>
						</div>
						<div class="d-flex flex-column col-md-4 pr-md-0">
							<div class="d-flex flex-column col linebottomgray">
								<p class="H-14 OrangeColor my-2 fontW-500">Account Number</p>
								<p class="H-14 TextDark mb-1 fontW-500" >1234567</p>
							</div>
							<div class="d-flex flex-column col linebottomgray">
								<p class="H-14 OrangeColor my-2 fontW-500">Transfer fees</p>
								<p class="H-14 TextDark mb-1 fontW-500" >$0.2864 USD</p>
							</div>
							<div class="d-flex flex-column col linebottomgray">
								<p class="H-14 OrangeColor my-2 fontW-500">Recipient’s email</p>
								<p class="H-14 TextDark mb-1 fontW-500">harry@malopan.com</p>
							</div>
							<div class="d-flex flex-column col linebottomgray">
								<p class="H-14 OrangeColor my-2 fontW-500">Message</p>
								<p class="H-14 TextDark mb-1 fontW-500" style="word-wrap: break-word;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.</p>
							</div>
						</div>
					</div>
					<div class="mt-md-5">
						<button type="button" @click="GoToExternal()" class="btn py-2 col OrangeColor H-14 " style="border-radius: 8px;">Go back</button>
					</div>

				</div>
				<!-- EXTERNAL CONFIRMATION ENDS -->
				<!-- TABLE STARTS -->
				<div class="col-12 px-0 pt-5">
					<p class="H-18 fontW-500 LigthBlue text-left my-2">Operations history</p>
				</div>
				<div class="d-flex  mt-xl-0 mt-5 flex-column align-content-xl-start  justify-content-start mx-md-0 ">
					<!-- <div class="col-xl-6 col-md-4 col-6 px-0 d-flex mt-3">
							<input class="wallet-inp" placeholder="Use keywords" />
							<button type="button" class="Wallet-SearchButton"><img src="Icons/Profile/search-blue.svg" class="Wallet-SearchButton" /> </button>
					</div> -->
					<div class="col-12 d-flex flex-column">
						<table class="table Table-Hedpay" data-page-length='10' id="Wallet-Stake-Table"  style="width:100%;">
							<thead >
								<tr style="border-top: none;margin-top: 0;width: 100%;">
									<td style="border-top: none;" ><p class="H-16 TextDark mb-0 fontW-500">Date</p></td>
									<td style="border-top: none;" ><p class="H-16 TextDark mb-0 fontW-500">Deposit</p></td>
									<td style="border-top: none;" ><p class="H-16 TextDark mb-0 fontW-500">Coin/token</p></td>
									<td style="border-top: none;" ><p class="H-16 TextDark mb-0 fontW-500">From</p></td>
									<td style="border-top: none;" ><p class="H-16 TextDark mb-0 fontW-500">To</p></td>
									<td style="border-top: none;" ><p class="H-16 TextDark mb-0 fontW-500">Status</p></td>
								</tr>
							</thead>
							<tbody >
									<tr>
										<td class="H-14 TextDark mb-0 fontW-500" >05/05/2021</td>
										<td class="H-14 TextDark mb-0 fontW-500" >900</td>
										<td class="H-14 TextDark mb-0 fontW-500" >HDP.Ф</td>
										<td class="H-14 TextDark mb-0 fontW-500" ></td>
										<td class="H-14 TextDark mb-0 fontW-500" ></td>
										<td class="H-14 LigthBlue fontW-500" >Success</td>
									</tr>
									<tr>
										<td class="H-14 TextDark mb-0 fontW-500" >05/05/2021</td>
										<td class="H-14 TextDark mb-0 fontW-500" >900</td>
										<td class="H-14 TextDark mb-0 fontW-500" >HDP.Ф</td>
										<td class="H-14 TextDark mb-0 fontW-500" ></td>
										<td class="H-14 TextDark mb-0 fontW-500" ></td>
										<td class="H-14 LigthBlue fontW-500" >Success</td>
									</tr>
									<tr>
										<td class="H-14 TextDark mb-0 fontW-500" >05/05/2021</td>
										<td class="H-14 TextDark mb-0 fontW-500" >900</td>
										<td class="H-14 TextDark mb-0 fontW-500" >HDP.Ф</td>
										<td class="H-14 TextDark mb-0 fontW-500" ></td>
										<td class="H-14 TextDark mb-0 fontW-500" ></td>
										<td class="H-14 LigthBlue fontW-500" >Success</td>
									</tr>
									<tr>
										<td class="H-14 TextDark mb-0 fontW-500" >05/05/2021</td>
										<td class="H-14 TextDark mb-0 fontW-500" >900</td>
										<td class="H-14 TextDark mb-0 fontW-500" >HDP.Ф</td>
										<td class="H-14 TextDark mb-0 fontW-500" ></td>
										<td class="H-14 TextDark mb-0 fontW-500" ></td>
										<td class="H-14 LigthBlue fontW-500" >Success</td>
									</tr>
							</tbody>
						</table>
					</div>
				</div>
				<!-- TABLE ENDS -->
			</div>
		</div>
	</section>
</template>
<style src="./style.scss" lang="scss" scoped></style>
<script src="./script.js"></script>
