<template>
  <div class="faq">
    <div class="container-fluid pb-5">
      <section class="justify-content-center px-lg-5 px-md-3 px-2">
        <p class="H-18 fontW-500 TextBlue text-left">FAQ</p>
        <div class="Categories col-12 align-content-start flex-wrap my-2">
          <button type="button" id="Category1" class=" Bg-LBlue rounded px-3 py-2 w-3" v-on:click="Category('Category1')">About&nbsp;Hedpay</button>
          <button type="button" id="Category2" class=" rounded px-3 py-2 w-3" v-on:click="Category('Category2')">Hedpay&nbsp;Account</button>
          <button type="button" id="Category3" class=" rounded px-3 py-2 w-3" v-on:click="Category('Category3')">Hedpay&nbsp;Fund&nbsp;Package</button>
          <button type="button" id="Category4" class=" rounded px-3 py-2 w-3" v-on:click="Category('Category4')">Hedpay&nbsp;Mc&nbsp;Wallet</button>
          <button type="button" id="Category5" class=" rounded px-3 py-2 w-3" v-on:click="Category('Category5')">Hedpay&nbsp;Fund&nbsp;Transfer</button>
          <button type="button" id="Category6" class=" rounded px-3 py-2 w-3" v-on:click="Category('Category6')">Access&nbsp;Hedpay&nbsp;APP</button>
          <button type="button" id="Category7" class=" rounded px-3 py-2 w-3" v-on:click="Category('Category7')">Registration</button>
        </div>
      </section>
    </div>
    <!-- About Hedpay -->
    <div class="m-auto row" v-if="category1">
      <div class="col-6 py-2">
        <div class="d-flex">
          <button type="button" id="" class="btn FAQ-Button col" v-on:click="OpenAboutHedpay('AboutHedpay1')"><span class="TextWhite"><i class="fas fa-plus"></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0">What is hedpay?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin d-flex" v-if="about1">
          Hedpay is a platform that aims to create a community network effect around purchasing power. Hedpay aims to improve these concepts through the use of its ERC20 token-based e-currency wallet.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button type="button" id="" class="btn FAQ-Button col" v-on:click="OpenAboutHedpay('AboutHedpay2')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
              <p class="TextDark H-16 fontW-600 mb-0">Which Blockchain Technology uses Hedpay?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="about2">
          Hedpay currently is an ERC-23 token standard, which was launched on the Ethereum blockchain network.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button type="button" id="" class="btn FAQ-Button col" v-on:click="OpenAboutHedpay('AboutHedpay3')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
              <p class="TextDark H-16 fontW-600 mb-0">Will Hedpay have its own blockchain?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="about3">
          The Hedpay team is working to develop its own Blockchain technology to be available as of 2022.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button type="button" id="" class="btn FAQ-Button col" v-on:click="OpenAboutHedpay('AboutHedpay4')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
              <p class="TextDark H-16 fontW-600 mb-0">Is the Hedpay token a utility or security token?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="about4">
          Hedpay has three kinds of tokens: Utility, Security, and Stable
          Hedpay's main Token is the Security Token as it is pegged to the equity of the company
          The current token in circulation is the Utility Token for mass trade and use purposes
          Token address: 0xc4d5545392f5fc57eba3af8981815669bb7e2a48
          Hedpay will soon launch a Stable Token backed by pure gold with limited value
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button type="button" id="" class="btn FAQ-Button col" v-on:click="OpenAboutHedpay('AboutHedpay5')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
              <p class="TextDark H-16 fontW-600 mb-0">What are the official channels of Hedpay?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="about5">
          You can find us on the following platforms. Please don’t hesitate to ask us your questions.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button type="button" id="" class="btn FAQ-Button col" v-on:click="OpenAboutHedpay('AboutHedpay6')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
              <p class="TextDark H-16 fontW-600 mb-0">Where is Hedpay based?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="about6">
          Hedpay Ltd. was incorporated in London (United Kingdom) as the parent corporation. Hedpay Technologies, which is the technology development arm, is based in Montreal, Canada.
          Later on, Hedpay UAB was incorporated in Lithuania under the following activity sectors: Cryptocurrency Exchange and Crypto Currency Depository Wallet Operator, effective vehicle serves crypto-fiat payments, with KYC/AML measures implemented and supervised by Lithuanian Financial Crime Investigation Unit (FIU).
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button type="button" id="" class="btn FAQ-Button col" v-on:click="OpenAboutHedpay('AboutHedpay7')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
              <p class="TextDark H-16 fontW-600 mb-0">How old is Hedpay?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="about7">
          Hedpay Ltd. was formed in 2017.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button type="button" id="" class="btn FAQ-Button col" v-on:click="OpenAboutHedpay('AboutHedpay8')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
              <p class="TextDark H-16 fontW-600 mb-0">Who are the people behind Hedpay?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="about8">
          Hedpay was founded by Vicken Kaprelian. As a founder, CEO, and executive entrepreneur, he has considerable experience in the commodities sector with gold and diamonds from 1989 in the Middle East and North America (Canada), where he founded IBIG Investments Inc. and thereafter founded KIG Mining Plc in the United Kingdom, a public company listed on Frankfurt Stock Exchange. Mr. Kaprelian then started Hedpay Ltd. in the United Kingdom and brought back together his previous collaborators in Canada.
          Today, the team of fifteen highly professional members consists of analysts, data scientists, marketers, IT security engineers, and developers with various expertise.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button type="button" id="" class="btn FAQ-Button col" v-on:click="OpenAboutHedpay('AboutHedpay9')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0">Why should I choose Hedpay over another asset wallet and exchange?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="about9">
          The Hedpay wallet in its simple form is no different than other asset wallets and DEX Exchanges. However, the difference becomes apparent when you combine Hedpay banking and our account offerings. With Hedpay, you can execute transactions between cryptocurrencies and FIAT within one platform, thus avoiding the fees and delays between wallets, exchanges, and FIAT banks.
          In addition, you can generate passive income by using the HEdpAY token (HDP) while transacting within Hedpay and when you use our various services and products, or by taking advantage of our periodical special offers.
        </p>
      </div>
    </div>
    <!-- Hedpay Account -->
    <div class="m-auto row" v-if="category2">
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayAccount('HedpayAccount1')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >What type of account will I get after registration?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="account1">When you successfully pass the KYC verifications, you will get a HEdpAY Unique Account ID. (UID)
          <br>
          <br>
          If you skipped the KYC process during registration, your account will be opened but will not be fully activated until you complete the KYC verification process.
          </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayAccount('HedpayAccount2')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >What can I use my Hedpay account for?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="account2">You can:<br><br>
            Hold or exchange the following cryptocurrencies: HDP, BTH, ETH, USDT.<br>
            Send/Receive available currencies.
            Pay with available currencies at accepted locations (<strong>locations accepting BTC, ETH, USDT or HDP</strong>)
            Also stake your HDP holding and earn interest. (<strong>see Hedpay Fund Packages below</strong>)
            Make in and out transfers and transfers in between Hedpay users. (<strong>see the Fund Transfer Section of the FAQ</strong>)
            <strong>Others options will be available soon.</strong>
            Limited pairs of currency exchange.
            HEdpAY MC Payment Card - you can pre-order your own card now. (link).
          </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayAccount('HedpayAccount3')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >Where can I find my account number?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="account3">The HEdpAY Unique Account ID (UID) is available for natural persons who completed the
          KYC/AML verification process. It is displayed in your profile page.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayAccount('HedpayAccount4')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >Can a natural person have a several Hedpay accounts?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="account4">No! One person can only have one HEdpAY Unique Account. However, within one account, you may have multiple subaccounts for different types of digital or FIAT currencies.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayAccount('HedpayAccount5')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >What type of fees does Hedpay charge?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="account5">Opening a Hedpay account is free of charge.<br><br>
          A fixed monthly low maintenance fee will be charged if the account is maintained below the required amount.
          The frequency of use of the account will also affect the maintenance fee. High volume of activity may eliminate the maintenance fees.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayAccount('HedpayAccount6')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >What type of fees does Hedpay charge?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="account6">
          After registering on the Hedpay platform, you have to activate your account.
          An activation code will be sent to the unique email address provided during registration.
          Follow the steps in the email to activate your account.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayAccount('HedpayAccount7')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >Why is my account inactive?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="account7">
          After six months of inactivity, the system will send out notification emails.
          After the third notification, the account will be suspended (inactive) to avoid maintenance fees.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayAccount('HedpayAccount8')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >Why is my account inactive?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="account8">
          The UID is your account number within the Hedpay platform.
          The QR code is your unique HEdpAY MC Wallet address that is used for your cryptocurrency transactions..
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayAccount('HedpayAccount9')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >Why is my account inactive?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="account9">
          You can close your account only when the account or subaccounts have a zero (0) balance.
          Login to your account, verify your balance(s) and notify our customer support department by email (support@HEdpAY.com) of your request.
        </p>
      </div>
    </div>
    <!-- Hedpay Fund Package -->
    <div class="m-auto row" v-if="category3">
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayFundPackage('HedpayFundPackage1')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >What is a Hedpay Fund Package?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundpacakge1">
          A Hedpay Fund Package is a subaccount where you can deposit your Hedpay tokens and earn interest.
          Your interest rate will be established based on your volume of deposit and the length of period chosen.<br />
          Keep in mind that the interest rate in a Hedpay Fund Package is fixed during the time of staking.
          This means if Hedpay changes the interest rate, it will not affect your package.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayFundPackage('HedpayFundPackage2')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How do I buy a Hedpay fund Package?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundpacakge2">
          You may purchase a Hedpay Fund Package via our website or using the Hedpay App - anytime, anywhere!
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayFundPackage('HedpayFundPackage3')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How different is a Hedpay Fund Package from a Hedpay Mc Wallet?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundpacakge3">
          The Hedpay Mc Wallet is for safe keeping your various funds.
          You can transfer your funds in and out of Hedpay, you can transfer to other Hedpay users, or you can use to trade or exchange currencies
          <br>
          Hedpay Fund Packages are for earning interest on your savings, which are applicable only to Hedpay tokens.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayFundPackage('HedpayFundPackage4')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >What is the minimum amount to stake in a Hedpay Fund Package?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundpacakge4">
          The minimum start package value is 10,000 Hdp, and the maximum value is 500,000 Hdp.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayFundPackage('HedpayFundPackage5')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >Do I need to wait until maturity to get my interest?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundpacakge5">
          The interest rate is set according the amount staked, on an annual basis and paid monthly.
          The interest is added to your Hedpay MC wallet, <strong>free to be used immediately</strong>.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayFundPackage('HedpayFundPackage6')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >Is there a bonus interest if I stake for more than one year?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundpacakge6">
          Yes! There is 10% bonus added to the original staked amount at the end of the first year.
          The interest on the second year will be calculated on the bonus as well.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayFundPackage('HedpayFundPackage7')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >Is there a penalty for cancelling my Hedpay Fund Package before maturity?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundpacakge7">
          As previously mentioned, the interest is calculated on an annual basis and paid monthly.
          Upon cancellation, you will lose the interest of the current month.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayFundPackage('HedpayFundPackage8')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >What is “early withdrawal” or “pre-termination”?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundpacakge8">
          Early withdrawal or pre-termination is considered the same as a cancellation (see above).
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayFundPackage('HedpayFundPackage9')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How can I upgrade my Hedpay Fund Package?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundpacakge9">
          You cannot upgrade the staked package. However, you can always add a new one.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayFundPackage('HedpayFundPackage10')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How can I close my Hedpay Fund Package?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundpacakge10">
          You don’t need to close a Hedpay Fund Package. It will close automatically at maturity.
          You can choose to close the Hedpay Fund Package by cancelling it at any time. However, you will lose the accumulated interest
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayFundPackage('HedpayFundPackage11')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How many Hedpay Fund Packages can I own at the same time?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundpacakge11">
          There is no limit on the number of packages you can hold. Although the number of available packages is limited to a preset amount.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayFundPackage('HedpayFundPackage12')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How is the tax for a Hedpay Fund Package calculated?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundpacakge12">
          Tax declaration is based on your domiciled tax jurisdiction and it is your responsibility to declare as required.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenHedpayFundPackage('HedpayFundPackage13')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >When will my interest be credited to my account?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundpacakge13">
          Before the 5th of each month. Your previous month’s interest will be credited to your Hedpay MC Wallet.
        </p>
      </div>
    </div>
    <!-- Hedpay Mc Wallet-->
    <div class="m-auto row" v-if="category4">
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenMcWallet('HedpayMcWallet1')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >What is a Hedpay Mc Wallet?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="mcwallet1">
          The wallet allows you to deposit, store, stake, transfer,
          and exchange crypto and FIAT currencies such a US$, CAD$, EURO, and GBP, and it is secured with private keys.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenMcWallet('HedpayMcWallet2')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How do I open a Headpay Mc Wallet?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="mcwallet2">
          As soon as your Hedpay account is approved, your wallet will be activated.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenMcWallet('HedpayMcWallet3')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >What is the minimum amount which can be deposited in a Hedpay Mc Wallet?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="mcwallet3">
          The minimum value is set to $30 USD or the equivalent in any currency.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenMcWallet('HedpayMcWallet4')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >What is the maximum amount which can be deposited in a Hedpay Mc Wallet?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="mcwallet4">
          There is no maximum limit to deposit in Hedpay MC Wallet for cryptocurrencies. <br />
          There is a limit for FIAT currencies on new accounts based on the banking laws of your jurisdiction <strong>(applicable if any)</strong>.<br>
          Also, the limit depends on your gradual use of the account, which can be up to $10,000,000 USD or the equivalent per currency.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenMcWallet('HedpayMcWallet5')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >When can I access the money/cryptocurrencies in my Hedpay Mc Wallet?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="mcwallet5">
          Anytime, anywhere with the Hedpay App or via our website.
          Please refer to the Transfers section to learn about transfer delays.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenMcWallet('HedpayMcWallet6')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >Is my money safe with Hedpay?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="mcwallet6">
          The Hedpay MC Wallet is an innovative, proprietary, decentralized finance application based on Ethereum Blockchain.
          According to the decentralized “Cryptocurrency” Blockchain technology, all Hedpay MC Wallets have unique private KEYs and addresses, which are safe and securely held in an encrypted database.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenMcWallet('HedpayMcWallet7')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How can I exchange my tokens for FIAT money?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="mcwallet7">
          To exchange the cryptocurrencies in your wallet to FIAT money, go to the “Trade” section from the menu.
          You can then move the required amount to the trade account provided to you and exchange to the desired cryptocurrency or FIAT as the availability of BUY or SELL orders.
          <strong>(see Exchange section for more details)</strong>
        </p>
      </div>
    </div>
    <!-- Hedpay Fund Transfer-->
    <div class="m-auto row" v-if="category5">
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenFundTransfer('FundTransfer1')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How do I transfer funds to my account?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundtransfer1">
          Once you login to your account, go to the “Wallet” section from the menu and follow the link to “Deposit”.
          Simply follow instructions to add funds to your Hedpay account.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenFundTransfer('FundTransfer2')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >Are there any fees for adding funds to my account?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundtransfer2">
          There are no fees for adding funds.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenFundTransfer('FundTransfer3')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >Are there any fees for transferring funds?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundtransfer3">
          There are no fees and no limits for transferring funds between Hedpay users. <br />
          When transferring in and out of Hedpay, there will be fees charged based on the services used, the currency exchange, and corresponding banking fees.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenFundTransfer('FundTransfer4')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How can I make a transfer to another Hedpay platform user?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundtransfer4">
          First, set the recipient and save in your contacts to make transfers. You can set up recipients by using their QR code or UID number.
          Then go to the “Wallet” section from the menu for internal transfers. Select a recipient from your contacts to initiate a transfer.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenFundTransfer('FundTransfer5')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How can I make a transfer (a payment) to an external account?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundtransfer5">
          To make a transfer or a payment, you need to first have the banking information of the recipient.
          Then, simply follow the instructions for “Withdraw” or “Send”.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenFundTransfer('FundTransfer6')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >What is a withdrawal? How does it work?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundtransfer6">
          A withdrawal is the same thing as a transfer initiated to your own bank account.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenFundTransfer('FundTransfer7')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How do I transfer in monies to Hedpay account?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundtransfer7">
          You can transfer to your Hedpay account via a bank transfer, by performing a standard (IBAN) transfer.
          To avoid delays and misplacement of funds, you must include your UID number ONLY in your Reference section of the bank transfer.
          <br />
          Please refer to the banking information section for incoming transfer instructions.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenFundTransfer('FundTransfer8')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >What is the banking information for incoming transfers?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundtransfer8">
          To exchange the cryptocurrencies in your wallet to FIAT money, go to the “Trade” section from the menu.
          You can then move the required amount to the trade account provided to you and exchange to the desired cryptocurrency or FIAT as the availability of BUY or SELL orders.
          <strong>(see Exchange section for more details)</strong>
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenFundTransfer('FundTransfer9')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >I transferred funds into the account but do not see them yet!</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundtransfer9">
          Once the funds are received at Hedpay accounts, it takes less than 24 hours during normal business hours to credit your account, however, it may take 48 to 72 hours over the weekends or holidays.
          <br/>
          NOTE: There may be delays from your bank if the information is not entered correctly. If your funds do not appear in your account within 5 business days, please contact the support team as well as your bank. Funds may have been returned to the sender.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenFundTransfer('FundTransfer10')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How long does it take digital assets to appear in my Wallet?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundtransfer10">
          If you funded your account in digital assets (BTC, ETH, USDT or HDP) when generating the transaction, due to blockchain technology that requires a minimum of 6 confirmations in general, this may take anywhere between 10 minutes or 1 hour depending on the traffic of the blockchain.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenFundTransfer('FundTransfer11')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >What is the limit for a Hedpay-Hedpay transfer?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundtransfer11">
         You can see the latest transaction limits here: (link)
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenFundTransfer('FundTransfer12')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How much is the fee for a Hedpay-to-Hedpay transfer?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundtransfer12">
          It’s 100% free! Spread the good news and enjoy more freedom.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenFundTransfer('FundTransfer13')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How do I transfer funds to another bank account?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundtransfer13">
          Super easy! Go to your Home screen, select Send, and follow the instructions.
          <br />
          Select the destination account and provide the required bank details as well as the amount you want to send.
          Then, perform the required authorization and you’re done!
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenFundTransfer('FundTransfer14')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How do I transfer funds overseas?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundtransfer14">
          You can transfer to any bank, local or international, as long as you provide all the required information and necessary details for the destination account.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenFundTransfer('FundTransfer15')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >I typed the wrong account number as the recipient of my fund transfer. Can I cancel or undo the transfer?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="fundtransfer15">
          A fund transfer instruction, once submitted after you key in your OTP, cannot be cancelled or reversed. <br />
          Please make sure you enter the correct account number before keying in your transaction OTP.
        </p>
      </div>
    </div>
    <!-- Hedpay Access APP -->
    <div class="m-auto row" v-if="category6">
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenAccessApp('AccessApp1')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >Where can I download the Hedpay App?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="accessapp1">
          You may download the Hedpay App from either the <strong>Apple App Store</strong> or the <strong>Google Play Store</strong>.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenAccessApp('AccessApp2')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >What are the minimum OS requirements to be able to download the Hedpay App?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="accessapp2">
          For iPhone users, the minimum supported software system is iOS 10.0.0
          <br />
          For Android users, the minimum supported OS is Android OS 7.0.0
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenAccessApp('AccessApp3')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >What are the minimum hardware specifications needed to operate the application on my mobile phone?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="accessapp3">
          Your mobile phone needs to have a front-facing camera.
          It is also recommended that your phone has at least 3GB of RAM.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenAccessApp('AccessApp4')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >Why is the Hedpay App requesting permission to access my location, contacts list, camera, and photos?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="accessapp4">
          The app needs to access your location, contacts list, camera, and photos to function properly.
          <br><br>
          Your location and camera are used for security purposes and to pass the KYC/AML verification process, which allows full functionality of the app on your phone.
          <br><br>
          Your contacts list is used for selecting fund transfer recipients.
          <br><br>
          Your camera and photos are also used by you for account customization.
        </p>
      </div>
    </div>
    <!-- Hedpay Registration -->
     <div class="m-auto row" v-if="category7">
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenRegisteration('Registeration1')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >Who can register as a Hedpay user?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="registeration1">
          CANADA
          <br>1.	At least 18 years old
          <br>2.	Has a residence In Canada
          <br>3.	Has a valid email address
          <br>4.	Has an active Canadian mobile number
          <br>5.	Does not classify under the United States FATCA
          <br><br>
          EUROPE
          <br>1.	At least 18 years old
          <br>2.	Has a residence in the UK, EU/EEA
          <br>3.	Has a valid email address
          <br>4.	Has an active mobile number (linked to the jurisdiction in question)
          <br><br>
          UNITED STATES (a disclaimer for SEC)
          <br>1.	At least 18 years old
          <br>2.	Has a residence, proven address
          <br>3.	Has a valid email address
          <br>4.	Has an active mobile number (linked to the jurisdiction in question)
          <br><br>
          ASIA
          <br>1.	At least 18 years old
          <br>2.	Has a residence, proven address
          <br>3.	Has a valid email address
          <br>4.	Has an active mobile number (linked to the jurisdiction in question).
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenRegisteration('Registeration2')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How do I register?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="registeration2">
          You could register directly on this website through the sign-up page or you could download and install the Hedpay App / Connect to the Hedpay platform and then register by going through our app’s onboarding process.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenRegisteration('Registeration3')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >Do I need to present any ID before I am able to open an account with Hedpay?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="registeration3">
          No, you don’t need an ID to open an account. If you do not have any of the accepted IDs at the time of registration, you may still register by skipping the ID upload step.
          However, the account created will be limited to a maximum balance of 10,000 Hdp. and a 12-month validity period.
          The said balance limit and validity period will only be lifted once you are able to upload one of the accepted IDs to the application.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenRegisteration('Registeration4')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >What are the accepted IDs?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="registeration4">
          1.	Passport<br>
          2.	Driver's License<br>
          3.	Unified Multi-Purpose<br>
          4.	Social Security System<br>
          5.	Etc.<br>.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenRegisteration('Registeration5')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How do I properly perform a Face Identity Scan?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="registeration5">
          Your face will be the key to validating your identity and account ownership through our facial recognition security feature. For this very reason, please make sure to:
          <br>
          &bull; &nbsp;Find a well-lit location, so that your mobile phone’s camera can accurately scan your face.<br>
          &bull; &nbsp;Remove anything that may prevent the app from scanning your full face (such as a mask or any eyewear).<br>
          &bull; &nbsp;Directly face the camera and position your head within the purple frame that you will see on screen.<br>
          &bull; &nbsp;Follow instructions to complete the required steps.<br>
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenRegisteration('Registeration6')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How can I logout from the Hedpay App?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="registeration6">
          You will be logged out automatically when your application has been inactive for five (5) minutes.<br>
          If you want to logout completely from the app, you may also press logout.<br>
          You may reset the app and password, where you will be required to set up a new password and perform face verification / Face Identity Scan on your next login.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenRegisteration('Registeration7')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >Can I login from another device?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="registeration7">
          Yes, you can. However, you may only access your Hedpay account from a verified device at any given time. Only one (1) verified app or mobile device is allowed.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenRegisteration('Registeration8')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >How can I change my registered phone number?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="registeration8">
          You can call Hedpay Customer Care at +514-525-7895 to have your registered phone number changed.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenRegisteration('Registeration9')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >I uploaded a valid ID during the registration process, but my name is not being scanned properly. What should I do?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="registeration9">
          You should call Hedpay Customer Care at +514-525-7895 so we may assist you with your registration.<br>
          Generally, if you follow the steps of the ID upload correctly, the validation process will work properly.
          The system will not accept or pass faulty or blurry documents.
        </p>
      </div>
      <div class="col-6 py-2">
        <div class="d-flex">
          <button class="btn FAQ-Button col" v-on:click="OpenRegisteration('Registeration10')"><span class="TextWhite"><i class="fas fa-plus "></i></span></button>
          <div class="Prof-BlueLight-Div d-flex align-items-center pl-3 col" style="box-shadow: 0 0 2px 2px #e7e7e7; background-color: white">
            <p class="TextDark H-16 fontW-600 mb-0" >Do I need to reset my password every time I change my device?</p>
          </div>
        </div>
        <p class="col-md-11 Answer-Text NoShow FAQMargin" v-if="registeration10">
          Yes. For security reasons, you may only access the Hedpay App from one (1) verified device. If you wish to access your account from a different device, it has to be verified by you or you will be prompted to reset your password in the new device.
        </p>
      </div>
    </div>
  </div>
</template>

<style src="./style.scss" lang="scss"></style>
<script src="./script.js"></script>
