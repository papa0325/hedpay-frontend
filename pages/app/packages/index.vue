<template>
	<div class="packages">
		<div>
			<div class="H-20 LigthBlue fontW-500 my-0 mb-3">Staking</div>
			<div class="d-flex justify-content-between mb-5">
				<button class="Bg-LBlue TextWhite rounded px-5 py-2 text-white">Add Stake</button>
				<div class="d-flex shadow w-50">
					<input type="text" class="H-16 p-2 bg-white rounded-left border border-right-0 w-100"	/>
					<img class="pl-2 pr-2" src="~assets/Icons/Groupe288.svg" />
				</div>
			</div>
			<table class="w-100 mt-3">
				<thead>
					<tr>
						<th></th>
						<th>Lock Date</th>
						<th>Release Date</th>
						<th>End Date</th>
						<th>Status</th>
						<th>Stacked Amount</th>
						<th>Interest</th>
						<th>Earnings</th>
						<th></th>
					</tr>
				</thead>
				<tbody class="shadow-none border-0 bg-transparent">
					<tr class="border-bottom">
						<td><img class="pl-2 pr-2" src="~assets/Icons/HDP.svg" /></td>
						<td class="p-3">05/05/2021</td>
						<td>04/06/2021</td>
						<td>05/08/2021</td>
						<td class="fontW-500">Completed</td>
						<td>1.000 HDP.Ф</td>
						<td>1%</td>
						<td>10 HDP.Ф</td>
						<td><button	class="Bg-LBlue TextWhite rounded px-4 py-1 text-white w-100">Unstake</button></td>
					</tr>
					<tr class="border-bottom">
						<td><img class="pl-2 pr-2" src="~assets/Icons/HDP.svg" /></td>
						<td class="p-3">05/05/2021</td>
						<td>04/06/2021</td>
						<td>05/08/2021</td>
						<td class="LigthBlue fontW-500">Active</td>
						<td>1.000 HDP.Ф</td>
						<td>1%</td>
						<td>10 HDP.Ф</td>
						<td><button	class="Bg-LBlue TextWhite rounded px-4 py-1 text-white w-100">Unstake</button></td>
					</tr>
					<tr class="border-bottom">
						<td><img class="pl-2 pr-2" src="~assets/Icons/HDP.svg" /></td>
						<td class="p-3">05/05/2021</td>
						<td>04/06/2021</td>
						<td>05/08/2021</td>
						<td class="fontW-500 OrangeColor">Locked</td>
						<td>1.000 HDP.Ф</td>
						<td>1%</td>
						<td>10 HDP.Ф</td>
						<td><button class="Bg-LBlue TextWhite rounded px-4 py-1 text-white w-100">Unstake</button></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="H-20 LigthBlue fontW-500 my-0 mb-3 mt-5">Choose a package</div>
		<div class="col-12 row flex-column flex-xl-row">
			<div class="col-xl-3 col-12 choosePackages"
				v-for="item in packages"
				v-bind:key="item">
				<div class="add-funds-by-card	border shadow	mb-5 bg-white	rounded	position-relative d-flex flex-direction-column justify-content-between">
					<div class="p-4 d-flex justify-content-between align-items-center flex-direction-column" style="min-height: 250px">
						<div style="min-height: 60px; margin-top: 20px">
							<p class="text-center my-1 font-weight-bold">{{item.start_hdp}} to</p>
							<p class="text-center my-1 font-weight-bold">{{item.end_hdp}}</p>
						</div>
						<div>
							<p class="H-16 my-1 TextGray text-center">Package price</p>
						</div>
						<div>
							<div class="text-center font-weight-bold">{{item.package_price}}% Hdp.ф</div>
						</div>
					</div>
					<div class="d-flex py-4">
						<img class="w-100" src="~assets/Icons/Groupe280.svg" />
					</div>
					<div class="d-flex justify-content-between align-items-center flex-direction-column" style="min-height: 100px">
						<p class="H-16 TextGray text-center">Annual revenue</p>
						<p class="H-20 font-weight-bold text-center">{{item.annual_revenue}}%</p>
						<div class="position-absolute d-flex justify-content-center w-100" style="bottom: -20px">
							<button class="Bg-LBlue rounded text-white" v-on:click="proceed1(item.id)">Proceed</button>
						</div>
					</div>
				</div>
			</div>
			<div class="row justify-content-center Pack-Step2 px-3 selectedProceed" style="display: none">
				<div class="col-xl-7 col-lg-10 Box-Card ">
					<div class="d-flex flex-column flex-md-row">
						<div class="col-md-6  px-md-5 p-3 mt-3 text-left">
							<div class="col-12 px-0">
								<p class="H-20 fontW-500 LigthBlue text-left mb-3">Selected package</p>
							</div>
							<p class="TextDark  H-18 Pack Pack-Selected" style="font-weight: 600;">
							</p>
							<div class="d-flex justify-content-start">
								<div>
									<p class="H-14 TextGrayLight ">Package price</p>
									<p class="H-16 TextDark Per-Selected " style="font-weight: 600;"></p>
								</div>
								<div class="pl-3 text-center">
									<p class="H-14 TextGrayLight ">Annual revenue</p>
									<p class="TextDark H-16 fontW-600 mb-1 Rate-Selected "> </p>
								</div>
							</div>
						</div>
						<div class="col-md-6  px-md-5 p-3 mt-md-3">
								<div class="col-12 px-0">
									<p class="H-20 fontW-500 LigthBlue text-left mb-3">Proceed</p>
								</div>
								<div class="control-group mt-3 col-12 ">
									<label class="H-14 LigthBlue text-left" >Term *</label>
									<div class="d-flex col-12 px-0  Funds " >
										<select class="col-12 Invite-Input  pr-0" id="Term-Stake" style="border-left:none !important; background: #FFFFFF !important; " >
											<option value="0" >Select terms.</option>
											<option value="3" >3 months.</option>
											<option value="6">6 months</option>
											<option value="12">1 year</option>
										</select>
										<!-- <button class="btn Contact-Button position-absolute">
												<img src="Icons/Profile/Blue-contacts.svg" />
										</button> -->
									</div>
								</div>
								<div class="control-group col-12 pt-2">
									<label class="H-14 LigthBlue text-left" for="Amount-Transfer">Amount *</label>
									<input type="number"  class="Invite-Input H-14 TextDark form-control " id="Amount-Transfer"  placeholder="20,000,000.00"/>
								</div>
						</div>
					</div>
					<div class="d-flex flex-column flex-md-row justify-content-between px-md-5 px-3 pb-5">
						<button type="button" class="Ref-Button TextWhite H-14 mt-3  py-3 Transfer-LabelOrange text-center col-md-4" v-on:click="GoBack()">Change</button>
						<button type="button" class="Ref-Button TextWhite H-14 mt-3  py-3  text-center  col-md-6" data-toggle="modal" data-target=".stake-modal" v-on:click="proceed2()">Proceed</button>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade stake-modal" tabindex="-1" role="dialog"  aria-hidden="true" v-if="modalStatus">
			<div class="modal-dialog modal-md">
				<div class="modal-content ">
						<div class="modal-header">
								<h5 class="modal-title" >Stake Added</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						<div class="modal-body col-12 d-flex flex-column ">
								<span class="TextBlue H-35 text-center"><i class="fas fa-thumbs-up"></i></span>
								<div class="d-flex justify-content-between align-items-center linebottomgray py-2">
										<p class="H-14 TextDark mb-0">Lock Date</p>
										<p class="H-14 TextBlue mb-0 LockDate" ></p>
								</div>
								<div class="d-flex justify-content-between align-items-center linebottomgray py-2">
										<p class="H-14 TextDark mb-0">Release Date</p>
										<p class="H-14 TextBlue mb-0 ReleaseDate" ></p>
								</div>
								<div class="d-flex justify-content-between align-items-center linebottomgray py-2">
										<p class="H-14 TextDark mb-0">End Date</p>
										<p class="H-14 TextBlue mb-0 EndDate" ></p>
								</div>
								<div class="d-flex justify-content-between align-items-center linebottomgray py-2">
										<p class="H-14 TextDark mb-0">Interest rate</p>
										<p class="H-14 TextBlue mb-0 Rate-Selected RS-Stake" ></p>
								</div>
								<div class="d-flex justify-content-between align-items-center linebottomgray py-2">
										<p class="H-14 TextDark mb-0">Amount</p>
										<p class="H-14 TextBlue mb-0 Amount-Transfer" ></p>
								</div>
						</div>
						<div class="modal-footer d-flex justify-content-center">
						<button type="button" class="btn TextWhite Wallet-BlueLigth col-12" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
		<Modal
			:width="480"
			v-if="tokensToBuy.showModal"
			@close="tokensToBuy.showModal = false"
		>
			<ValidationObserver v-slot="{ handleSubmit }">
				<div v-if="tokensToBuy.status === 'new'" class="tokens-buy">
					<h4 class="modal-heading">Specify the amount of tokens to buy</h4>
					<span class="limit-notification"
						>Now you can buy up to
						<span class="limit-value"> {{ tokensToBuy.amountLeft }} </span
						>HDP</span
					>
					<ValidationProvider
						style="width: 100%"
						name="value"
						:rules="`min_value:${tokensToBuy.min}|max_value:${tokensToBuy.amountLeft}`"
						slim
						v-slot="{ errors }"
					>
						<numeric-input
							class="numeric-input_cs"
							name="value"
							:min="tokensToBuy.min"
							:max="tokensToBuy.amountLeft"
							:step="1"
							v-model="tokensToBuy.amount"
						></numeric-input>
						<span class="validation-message">{{ errors[0] }}</span>
					</ValidationProvider>
					<button	class="btn tokens-modal-btn" @click="handleSubmit(buyConfirmation)">Buy</button>
				</div>
			</ValidationObserver>
			<div v-if="tokensToBuy.status === 'confirm'" class="tokens-confirm">
				<div class="confirm-row">
					<div class="confirm-title">HDP amount:</div>
					<div class="confirm-value">{{ tokensToBuy.amount }}</div>
				</div>
				<div class="confirm-row">
					<div class="confirm-title">ETH value:</div>
					<div class="confirm-value">
						{{ calcThePrice(tokensToBuy.amount) }}
					</div>
				</div>
				<div class="buttons-row">
					<button class="btn tokens-modal-btn btn-return" @click="setStatus('new')">Back</button>
					<button class="btn tokens-modal-btn btn-confirm" @click="purchase()">Confirm</button>
				</div>
			</div>
			<div
				v-if="
					tokensToBuy.status === 'success' || tokensToBuy.status === 'error'
				"
				class="tokens-finish"
			>
				<div v-if="tokensToBuy.status === 'error'" class="finish-message">
					An error has occurred
				</div>
				<div v-if="tokensToBuy.status === 'success'" class="finish-message">
					{{ tokensToBuy.amount }} hdp deposited to your wallet
				</div>
				<div class="buttons-row">
					<button class="btn tokens-modal-btn btn-return" @click="updatePackageData(tokensToBuy.id)">
						{{ tokensToBuy.status === "success" ? "Buy more" : "Try again" }}
					</button>
					<button	class="btn tokens-modal-btn btn-terminate" @click="tokensToBuy.showModal = false">Close</button>
				</div>
			</div>
		</Modal>
	</div>
</template>
<style src="./style.scss" lang="scss">
</style>
<script src="./script.js"></script>
