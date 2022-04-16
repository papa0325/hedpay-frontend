<template>
	<div class="exchange">
		<div>
			<section class="d-flex flex-column pl-lg-5 pr-lg-3 px-md-3 px-2">
				<div class="col-12 row flex-column flex-xl-row">
					<div class="col-xl-3 col-12">
						<div>
							<div class="exchangeItemWrapper">
								<div class="exchangeItem">HDP</div>
								<div class="exchangeItem">BTC</div>
								<div class="exchangeItem">ETH</div>
								<div class="exchangeItem">USD</div>
								<div class="exchangeItem">EUR</div>
								<div class="exchangeItem">GBP</div>
								<div class="exchangeItem">USDT</div>
							</div>
							<table class="table exchangeTable" style="width: 100%">
								<thead>
									<tr style="border-top: none; margin-top: 0">
										<td>Market</td>
										<td>Last Price</td>
										<td style="text-align: center">Change (24h)</td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="TextDark">USD / USDT</td>
										<td class="TextDark">1.0000</td>
										<td class="RedColor" style="text-align: center">-0.15%</td>
									</tr>
									<tr>
										<td class="TextDark">EUR / USDT</td>
										<td class="TextDark">0.82457</td>
										<td class="RedColor" style="text-align: center">-0.15%</td>
									</tr>
									<tr>
										<td class="TextDark">GBP / USDT</td>
										<td class="TextDark">0.708336</td>
										<td class="RedColor" style="text-align: center">-0.1%</td>
									</tr>
									<tr>
										<td class="TextDark">HDP / USDT</td>
										<td class="TextDark">0.3681</td>
										<td class="LigthBlue" style="text-align: center">+8.30%</td>
									</tr>
									<tr>
										<td class="TextDark">BTC / USDT</td>
										<td class="TextDark">39758.59</td>
										<td class="RedColor" style="text-align: center">-3.81%</td>
									</tr>
									<tr>
										<td class="TextDark">ETH / USDT</td>
										<td class="TextDark">2,568.51</td>
										<td class="LigthBlue" style="text-align: center">+9.78%</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="convertWrapper">
							<div class="H-20 LigthBlue fontW-500 my-0">Convert</div>
							<div class="my-2">
								<p class="H-14 LigthBlue my-0 pl-2">Convert from*</p>
								<div class="convertItem p-1 px-2">
									<img class="pl-2 pr-2" src="~assets/Icons/GBP.svg" />
									<p class="H-14 TextDark p-0 m-0">GBP - British Pound</p>
								</div>
							</div>
							<div class="my-2">
								<p class="H-14 LigthBlue my-0 pl-2">Convert to*</p>
								<div class="convertItem p-1 px-2">
									<img class="pl-2 pr-2" src="~assets/Icons/USD.svg" />
									<p class="H-14 TextDark p-0 m-0">USD - Dollar</p>
								</div>
							</div>
							<div class="my-2">
								<p class="H-14 LigthBlue my-0 pl-2">Amount*</p>
								<div class="convertItem p-1 px-3 justify-content-between">
									<p class="H-14 my-0">6000</p>
									<p class="H-14 my-0">GBP</p>
								</div>
							</div>
							<div class="d-flex justify-content-between border-bottom my-lg-4">
								<p class="H-14 fontW-600 my-0">Exchange Rate</p>
								<p class="H-14 fontW-600 my-0">0.706601 GBP</p>
							</div>
							<div class="d-flex justify-content-between border-bottom my-lg-4">
								<p class="H-16 TextBlue my-0">Amount</p>
								<p class="H-16 TextBlue my-0">8,490.83 USD</p>
							</div>
							<div class="d-flex justify-content-around">
								<button class="btn-warning btn-sm px-4 text-white">
									Cancel
								</button>
								<button class="btn-info btn-sm px-4 text-white">Convert</button>
							</div>
						</div>
					</div>
					<div class="col-xl-6 col-12">
						<div class="border bg-light rounded">
							<div>
								<candlestick-chart />
							</div>
						</div>
						<div>
							<p class="H-18 TextBlue">Buying and selling</p>
							<div class="border">
								<div class="d-flex justify-content-center p-3">
									<button class="btn btn-dark btn-sm border mx-4 px-4 btn-market" @click="MarketTrade()">Market Trade</button>
									<button class="btn btn-secondary btn-sm border mx-4 px-4 btn-price" @click="PriceLimit()">Price Limit</button>
								</div>
								<div class="col-12 row flex-column flex-xl-row p-3 market-trade">
									<div class="col-xl-6 col-12">
										<p class="H-16 LigthBlue">Buy</p>
										<p class="H-14 LigthBlue pl-3 m-0">Asset *</p>
										<div class="buySellItem p-1 px-2">
											<img class="pl-2 pr-2" src="~assets/Icons/HDP.svg" />
											<p class="H-14 TextDark p-0 m-0">HDP - Hdp.ф</p>
										</div>
										<p class="H-14 LigthBlue pl-3 m-0">Amount *</p>
										<div class="buySellItem p-1 px-2">
											<p class="H-14 TextDark p-0 m-0">800</p>
										</div>
										<p class="H-14 LigthBlue pl-3 m-0">Settlement With *</p>
										<div class="buySellItem p-1 px-2">
											<img class="pl-2 pr-2" src="~assets/Icons/USD.svg" />
											<p class="H-14 TextDark p-0 m-0">USD - Dollar</p>
										</div>
										<p class="H-14 LigthBlue pl-3 m-0 border-bottom mb-4">Trade Price</p>
										<div class="d-flex justify-content-center">
											<button class="btn-info btn-sm px-5 text-white" @click="buySubmit1()">Submit</button>
										</div>
									</div>
									<div class="col-xl-6 col-12">
										<p class="H-16 text-warning">Sell</p>
										<p class="H-14 text-warning pl-3 m-0">Asset *</p>
										<div class="buySellItem p-1 px-2">
											<img class="pl-2 pr-2" src="~assets/Icons/HDP.svg" />
											<p class="H-14 TextDark p-0 m-0">HDP - Hdp.ф</p>
										</div>
										<p class="H-14 text-warning pl-3 m-0">Amount *</p>
										<div class="buySellItem p-1 px-2">
											<p class="H-14 TextDark p-0 m-0">800</p>
										</div>
										<p class="H-14 text-warning pl-3 m-0">Settlement With *</p>
										<div class="buySellItem p-1 px-2">
											<img class="pl-2 pr-2" src="~assets/Icons/USD.svg" />
											<p class="H-14 TextDark p-0 m-0">USD - Dollar</p>
										</div>
										<p class="H-14 text-warning pl-3 m-0 border-bottom mb-4">Trade Price</p>
										<div class="d-flex justify-content-center">
											<button class="btn-warning btn-sm px-5 text-white" @click="sellSubmit1()">Submit</button>
										</div>
									</div>
								</div>
								<div class="col-12 row flex-column flex-xl-row p-3 price-limit" style="display: none">
									<div class="col-xl-6 col-12">
										<p class="H-16 LigthBlue">Buy</p>
										<p class="H-14 LigthBlue pl-3 m-0">Asset *</p>
										<div class="buySellItem p-1 px-2">
											<img class="pl-2 pr-2" src="~assets/Icons/HDP.svg" />
											<p class="H-14 TextDark p-0 m-0">HDP - Hdp.ф</p>
										</div>
										<p class="H-14 LigthBlue pl-3 m-0">Amount *</p>
										<div class="buySellItem p-1 px-2">
											<p class="H-14 TextDark p-0 m-0">800</p>
										</div>
										<p class="H-14 LigthBlue pl-3 m-0">Settlement With *</p>
										<div>
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
										<p class="H-14 LigthBlue pl-3 m-0">Price Limit Of *</p>
										<div class="buySellItem p-1 px-2">
											<p class="H-14 TextDark p-0 m-0">800</p>
										</div>
										<p class="H-14 LigthBlue pl-3 m-0">Settlement With *</p>
										<div>
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
										<div class="d-flex justify-content-center">
											<button class="btn-info btn-sm px-5 text-white" @click="buySubmit2()">Submit</button>
										</div>
									</div>
									<div class="col-xl-6 col-12">
										<p class="H-16 text-warning">Sell</p>
										<p class="H-14 text-warning pl-3 m-0">Asset *</p>
										<div class="buySellItem p-1 px-2">
											<img class="pl-2 pr-2" src="~assets/Icons/HDP.svg" />
											<p class="H-14 TextDark p-0 m-0">HDP - Hdp.ф</p>
										</div>
										<p class="H-14 text-warning pl-3 m-0">Amount *</p>
										<div class="buySellItem p-1 px-2">
											<p class="H-14 TextDark p-0 m-0">800</p>
										</div>
										<p class="H-14 text-warning pl-3 m-0">Settlement With *</p>
										<div>
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
										<p class="H-14 text-warning pl-3 m-0">Price Limit Of *</p>
										<div class="buySellItem p-1 px-2">
											<p class="H-14 TextDark p-0 m-0">800</p>
										</div>
										<p class="H-14 text-warning pl-3 m-0">Settlement With *</p>
										<div>
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
										<div class="d-flex justify-content-center">
											<button class="btn-warning btn-sm px-5 text-white" @click="sellSubmit2()">Submit</button>
										</div>
									</div>
								</div>
								<div class="col-12 purchase-confirmation" style="display: none;">
									<div class="d-flex justify-content-center align-items-center mt-3 mb-5 col-12  Funds-LabelBlue">
										<p class="H-14 fontW-500 TextWhite mb-0 pr-2" >Purchase confirmation</p>
										<img src="~assets/Icons/check-w.svg" class="Icon-Ref-New">
									</div>
									<div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 LigthBlue my-2">Confirmation number</p>
											<p class="H-18 LigthBlue  mb-1">2165261578469832</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 LigthBlue my-2">Order date</p>
											<p class="H-18 TextDark  mb-1">May 7, 2021</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 LigthBlue my-2">Quantity</p>
											<p class="H-18 TextDark  mb-1">800.0000 Hdp.ф</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 LigthBlue my-2">Trade Price</p>
											<p class="H-18 TextDark  mb-1">0.80</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 LigthBlue my-2">Amount</p>
											<p class="H-18 TextDark  mb-1">640.00 USD</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 LigthBlue my-2">Settlement With</p>
											<p class="H-18 TextDark  mb-1">USD - Dollar</p>
										</div>
									</div>
									<div class="mt-md-5">
										<button type="button" @click="GoTo1()" class="btn py-2 col LigthBlue H-14 " style="border-radius: 8px;">Go back</button>
									</div>
								</div>
								<div class="col-12 sale-confirmation" style="display: none;">
									<div class="d-flex justify-content-center align-items-center mt-3 mb-5 col-12  Funds-LabelOrange">
										<p class="H-14 fontW-500 TextWhite mb-0 pr-2" >Sale confirmation</p>
										<img src="~assets/Icons/check-w.svg" class="Icon-Ref-New">
									</div>
									<div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 text-warning my-2">Confirmation number</p>
											<p class="H-18 text-warning  mb-1">2165261578469832</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 text-warning my-2">Order date</p>
											<p class="H-18 TextDark  mb-1">May 7, 2021</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 text-warning my-2">Quantity</p>
											<p class="H-18 TextDark  mb-1">800.0000 Hdp.ф</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 text-warning my-2">Trade Price</p>
											<p class="H-18 TextDark  mb-1">0.80</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 text-warning my-2">Amount</p>
											<p class="H-18 TextDark  mb-1">640.00 USD</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 text-warning my-2">Settlement With</p>
											<p class="H-18 TextDark  mb-1">USD - Dollar</p>
										</div>
									</div>
									<div class="mt-md-5">
										<button type="button" @click="GoTo2()" class="btn py-2 col text-warning H-14 " style="border-radius: 8px;">Go back</button>
									</div>
								</div>
								<div class="col-12 pricelimit-buy-confirmation" style="display: none;">
									<div class="d-flex justify-content-center align-items-center mt-3 mb-5 col-12  Funds-LabelBlue">
										<p class="H-14 fontW-500 TextWhite mb-0 pr-2" >Confirmation of purchase request</p>
										<img src="~assets/Icons/check-w.svg" class="Icon-Ref-New">
									</div>
									<div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 LigthBlue my-2">Confirmation number</p>
											<p class="H-18 LigthBlue  mb-1">2165261578469832</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 LigthBlue my-2">Order date</p>
											<p class="H-18 TextDark  mb-1">May 7, 2021</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 LigthBlue my-2">Quantity</p>
											<p class="H-18 TextDark  mb-1">800.0000 Hdp.ф</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 LigthBlue my-2">Price Limit</p>
											<p class="H-18 TextDark  mb-1">0.80</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 LigthBlue my-2">Validity</p>
											<p class="H-18 TextDark  mb-1">May 17, 2021</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 LigthBlue my-2">Settlement With</p>
											<p class="H-18 TextDark  mb-1">USD - Dollar</p>
										</div>
									</div>
									<div class="mt-md-5">
										<button type="button" @click="GoTo3()" class="btn py-2 col LigthBlue H-14 " style="border-radius: 8px;">Go back</button>
									</div>
								</div>
								<div class="col-12 pricelimit-sell-confirmation" style="display: none;">
									<div class="d-flex justify-content-center align-items-center mt-3 mb-5 col-12  Funds-LabelOrange">
										<p class="H-14 fontW-500 TextWhite mb-0 pr-2" >Sale confirmation</p>
										<img src="~assets/Icons/check-w.svg" class="Icon-Ref-New">
									</div>
									<div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 text-warning my-2">Confirmation number</p>
											<p class="H-18 text-warning  mb-1">2165261578469832</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 text-warning my-2">Order date</p>
											<p class="H-18 TextDark  mb-1">May 7, 2021</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 text-warning my-2">Quantity</p>
											<p class="H-18 TextDark  mb-1">800.0000 Hdp.ф</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 text-warning my-2">Price Limit</p>
											<p class="H-18 TextDark  mb-1">0.90</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 text-warning my-2">Validity</p>
											<p class="H-18 TextDark  mb-1">May 17, 2021</p>
										</div>
										<div class="d-flex linebottomgray justify-content-between w-100">
											<p class="H-18 text-warning my-2">Settlement With</p>
											<p class="H-18 TextDark  mb-1">USD - Dollar</p>
										</div>
									</div>
									<div class="mt-md-5">
										<button type="button" @click="GoTo4()" class="btn py-2 col text-warning H-14 " style="border-radius: 8px;">Go back</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-12">
						<div>
							<p class="H-16 LigthBlue">Orders</p>
							<table class="ordersTable">
								<thead>
									<tr>
										<td>Price(USDT)</td>
										<td>Vol. (BTC)</td>
										<td class="text-center">Total</td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="text-warning">40066.58</td>
										<td>0.001187</td>
										<td class="text-center">0.2294</td>
									</tr>
									<tr>
										<td class="text-warning">40066.58</td>
										<td>0.001187</td>
										<td class="text-center">0.2294</td>
									</tr>
									<tr>
										<td class="text-warning">40066.58</td>
										<td>0.001187</td>
										<td class="text-center">0.2294</td>
									</tr>
									<tr>
										<td class="text-warning">40066.58</td>
										<td>0.001187</td>
										<td class="text-center">0.2294</td>
									</tr>
									<tr>
										<td class="text-warning">40066.58</td>
										<td>0.001187</td>
										<td class="text-center">0.2294</td>
									</tr>
									<tr>
										<td class="text-warning">40066.58</td>
										<td>0.001187</td>
										<td class="text-center">0.2294</td>
									</tr>
									<tr>
										<td class="H-14 TextBlue">39721.21</td>
										<td>0.008128</td>
										<td class="text-center">0.4267</td>
									</tr>
									<tr>
										<td class="H-14 TextBlue">39721.21</td>
										<td>0.008128</td>
										<td class="text-center">0.4267</td>
									</tr>
									<tr>
										<td class="H-14 TextBlue">39721.21</td>
										<td>0.008128</td>
										<td class="text-center">0.4267</td>
									</tr>
									<tr>
										<td class="H-14 TextBlue">39721.21</td>
										<td>0.008128</td>
										<td class="text-center">0.4267</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div>
							<p class="H-16 LigthBlue mt-4">Latest Deal</p>
							<table class="latestdealTable">
								<thead>
									<tr>
										<td>Time</td>
										<td class="text-center">Price(USDT)</td>
										<td>Vol. (BTC)</td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>12:59:03</td>
										<td class="text-warning text-center">40066.58</td>
										<td>0.2294</td>
									</tr>
									<tr>
										<td>12:59:03</td>
										<td class="text-warning text-center">40066.58</td>
										<td>0.2294</td>
									</tr>
									<tr>
										<td>12:59:03</td>
										<td class="H-16 LigthBlue text-center">40066.58</td>
										<td>0.2294</td>
									</tr>
									<tr>
										<td>12:59:03</td>
										<td class="text-warning text-center">40066.58</td>
										<td>0.2294</td>
									</tr>
									<tr>
										<td>12:59:03</td>
										<td class="H-16 LigthBlue text-center">40066.58</td>
										<td>0.2294</td>
									</tr>
									<tr>
										<td>12:59:03</td>
										<td class="H-16 LigthBlue text-center">40066.58</td>
										<td>0.2294</td>
									</tr>
									<tr>
										<td>12:59:03</td>
										<td class="H-16 LigthBlue text-center">40066.58</td>
										<td>0.2294</td>
									</tr>
									<tr>
										<td>12:59:03</td>
										<td class="H-16 LigthBlue text-center">40066.58</td>
										<td>0.2294</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div class="col-12 row flex-column flex-xl-row mt-5">
					<p class="H-18 LigthBlue m-3">Ongoin Orders</p>
					<table class="ongoingOrdersTable">
						<thead>
							<tr>
								<td class="H-14 text-left pl-4">Order Date</td>
								<td>Asset</td>
								<td>Quantity</td>
								<td>Trade Type</td>
								<td>Rate</td>
								<td>Settlement With</td>
								<td>Status</td>
								<td>Transaction Date</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="H-14 text-left">
									<span class="H-14 LigthBlue pr-2">Buy</span>
									<span>05/05/2021</span>
								</td>
								<td>HDP</td>
								<td>800 Hdp.ф</td>
								<td>Market</td>
								<td></td>
								<td>USD - Dollar</td>
								<td class="H-14 text-success">Open</td>
								<td>05/05/2021</td>
								<td class="H-14 LigthBlue pr-2 text-right">See</td>
							</tr>
							<tr>
								<td class="H-14 text-left">
									<span class="H-14 text-warning pr-2">Buy</span>
									<span>05/05/2021</span>
								</td>
								<td>HDP</td>
								<td>800 Hdp.ф</td>
								<td>Market</td>
								<td></td>
								<td>USD - Dollar</td>
								<td class="H-14 text-success">Open</td>
								<td>05/05/2021</td>
								<td class="H-14 text-warning pr-2 text-right">See</td>
							</tr>
							<tr>
								<td class="H-14 text-left">
									<span class="H-14 LigthBlue pr-2">Buy</span>
									<span>05/05/2021</span>
								</td>
								<td>HDP</td>
								<td>800 Hdp.ф</td>
								<td>Market</td>
								<td></td>
								<td>USD - Dollar</td>
								<td class="H-14 text-success">Open</td>
								<td>05/05/2021</td>
								<td class="H-14 LigthBlue pr-2 text-right">See</td>
							</tr>
							<tr>
								<td class="H-14 text-left">
									<span class="H-14 text-warning pr-2">Buy</span>
									<span>05/05/2021</span>
								</td>
								<td>HDP</td>
								<td>800 Hdp.ф</td>
								<td>Market</td>
								<td></td>
								<td>USD - Dollar</td>
								<td class="H-14 text-success">Open</td>
								<td>05/05/2021</td>
								<td class="H-14 text-warning pr-2 text-right">See</td>
							</tr>
							<tr>
								<td class="H-14 text-left">
									<span class="H-14 LigthBlue pr-2">Buy</span>
									<span>05/05/2021</span>
								</td>
								<td>HDP</td>
								<td>800 Hdp.ф</td>
								<td>Market</td>
								<td></td>
								<td>USD - Dollar</td>
								<td class="H-14 text-success">Open</td>
								<td>05/05/2021</td>
								<td class="H-14 LigthBlue pr-2 text-right">See</td>
							</tr>
							<tr>
								<td class="H-14 text-left">
									<span class="H-14 text-warning pr-2">Buy</span>
									<span>05/05/2021</span>
								</td>
								<td>HDP</td>
								<td>800 Hdp.ф</td>
								<td>Market</td>
								<td></td>
								<td>USD - Dollar</td>
								<td class="H-14 text-success">Open</td>
								<td>05/05/2021</td>
								<td class="H-14 text-warning pr-2 text-right">See</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="col-12 row flex-column flex-xl-row mt-5">
					<p class="H-18 LigthBlue m-3">Completed Orders</p>
					<table class="ongoingOrdersTable">
						<thead>
							<tr>
								<td class="H-14 text-left pl-4">Order Date</td>
								<td>Asset</td>
								<td>Quantity</td>
								<td>Trade Type</td>
								<td>Rate</td>
								<td>Settlement With</td>
								<td>Status</td>
								<td>Transaction Date</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="H-14 text-left">
									<span class="H-14 LigthBlue pr-2">Buy</span>
									<span>05/05/2021</span>
								</td>
								<td>HDP</td>
								<td>800 Hdp.ф</td>
								<td>Market</td>
								<td></td>
								<td>USD - Dollar</td>
								<td class="H-14">Closed</td>
								<td>05/05/2021</td>
								<td class="H-14 LigthBlue pr-2 text-right">See</td>
							</tr>
							<tr>
								<td class="H-14 text-left">
									<span class="H-14 text-warning pr-2">Buy</span>
									<span>05/05/2021</span>
								</td>
								<td>HDP</td>
								<td>800 Hdp.ф</td>
								<td>Market</td>
								<td></td>
								<td>USD - Dollar</td>
								<td class="H-14">Closed</td>
								<td>05/05/2021</td>
								<td class="H-14 text-warning pr-2 text-right">See</td>
							</tr>
							<tr>
								<td class="H-14 text-left">
									<span class="H-14 LigthBlue pr-2">Buy</span>
									<span>05/05/2021</span>
								</td>
								<td>HDP</td>
								<td>800 Hdp.ф</td>
								<td>Market</td>
								<td></td>
								<td>USD - Dollar</td>
								<td class="H-14">Closed</td>
								<td>05/05/2021</td>
								<td class="H-14 LigthBlue pr-2 text-right">See</td>
							</tr>
							<tr>
								<td class="H-14 text-left">
									<span class="H-14 text-warning pr-2">Buy</span>
									<span>05/05/2021</span>
								</td>
								<td>HDP</td>
								<td>800 Hdp.ф</td>
								<td>Market</td>
								<td></td>
								<td>USD - Dollar</td>
								<td class="H-14">Closed</td>
								<td>05/05/2021</td>
								<td class="H-14 text-warning pr-2 text-right">See</td>
							</tr>
							<tr>
								<td class="H-14 text-left">
									<span class="H-14 LigthBlue pr-2">Buy</span>
									<span>05/05/2021</span>
								</td>
								<td>HDP</td>
								<td>800 Hdp.ф</td>
								<td>Market</td>
								<td></td>
								<td>USD - Dollar</td>
								<td class="H-14">Closed</td>
								<td>05/05/2021</td>
								<td class="H-14 LigthBlue pr-2 text-right">See</td>
							</tr>
							<tr>
								<td class="H-14 text-left">
									<span class="H-14 text-warning pr-2">Buy</span>
									<span>05/05/2021</span>
								</td>
								<td>HDP</td>
								<td>800 Hdp.ф</td>
								<td>Market</td>
								<td></td>
								<td>USD - Dollar</td>
								<td class="H-14">Closed</td>
								<td>05/05/2021</td>
								<td class="H-14 text-warning pr-2 text-right">See</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</div>
	</div>
</template>
<style src="./style.scss" lang="scss"></style>
<script src="./script.js"></script>
