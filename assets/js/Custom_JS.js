$('#page-header-user-dropdown').click(function () {
  if ($(this).find('i').hasClass('mdi-chevron-up')) {
    $(this).find('i').removeClass('mdi-chevron-up').addClass('mdi-chevron-down');
  } else {
    $(this).find('i').removeClass('mdi-chevron-down').addClass('mdi-chevron-up');
  }
});

(function ($) {
  $(() => {
    if ($('#lineChart').length) {
      alert('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      const lineChartCanvas = $('#lineChart').get(0).getContext('2d');
      const data = {

        labels: ['2013', '2014', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [
          {
            label: '3M',
            backgroundColor: '#2DCCD3',

            data: [0, 5500, 5300, 8500, 9600, 6000, 9000, 10000],
            borderColor: [
              '#2DCCD3',
            ],

            borderWidth: 2,
            fill: false,
            pointBackgroundColor: '#00263F',
          },
          {
            label: '6M',
            backgroundColor: '#2DCCD3',
            data: [0, 5500, 5300, 8500, 9600, 6000, 9000, 10000],
            borderColor: [
              '#2DCCD3',
            ],
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: '#00263F',
          },
          {
            label: '1Y',
            backgroundColor: '#2DCCD3',
            data: [0, 5500, 5300, 8500, 9600, 6000, 9000, 10000],
            borderColor: [
              '#2DCCD3',
            ],
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: '#00263F',
          },
          {
            label: '3Y',
            backgroundColor: '#2DCCD3',
            data: [0, 5500, 5300, 8500, 9600, 6000, 9000, 10000],
            borderColor: [
              '#2DCCD3',
            ],
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: '#00263F',
          },
        ],
      };
      const options = {
        responsive: true,

        scales: {
          yAxes: [{
            gridLines: {
              drawBorder: false,
              borderDash: [3, 3],
            },
            ticks: {
              min: 0,
            },
          }],
          xAxes: [{
            gridLines: {
              display: false,
              drawBorder: false,
              color: '#ffffff',
            },
          }],
        },
        elements: {
          line: {
            tension: 0.2,
          },
          point: {
            radius: 4,
          },
        },
        //   stepsize: 5000,

        title: {
          display: true,
          text: 'Show the chart',
          titleColor: '#2DCCD3',
          font: {
            size: 13,
            family: 'Roboto',
            weight: 'normal',
          },
          // padding: {
          //     bottom: 10
          // }
        },

        legend: {
          position: 'top',
        },
        plugins: {
          display: true,
          legend: true,

        },

      };

      const lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data,
        options,

      });
    }
  });
}(jQuery));
/// /////////////////////////////////////////////////////////////////////////////////////////////
/// /////////////////////////////DROPDOWLIST WITH IMAGES OR ICONS///////////////////////////////////////////////////
/// /////////////////////////////////////////////////////////////////////////////////////////////
// Coins class contains all type of currency available in hedpay portal. Available in langArray array
//   var langArray = [];
// $('.Coins option').each(function(){
//   var img = $(this).attr("data-thumbnail");
//   var text = this.innerText;
//   var value = $(this).val();
//   var item = '<li class="col-12 row justify-content-start"><div class="col-sm-1 col-2"><img src="'+ img +'" alt="" value="'+value+'" /></div><span class="H-16 col-8 col-sm-5 text-left TextDark my-0">'+ text +'</span><span class="uno H-16 col-sm-6 col-2 text-left TextDark my-0 DashInfo"></span></li>';
//   langArray.push(item);
// })
const langArray = [];
$('.Coin option').each(function () {
  const img = $(this).attr('data-thumbnail');
  const text = this.innerText;
  const value = $(this).val();
  const item = `<li class="col-12 row justify-content-start ${value}"><div class="col-sm-1 col-2 pl-1 pr-4"><img src="${img}" alt="" value="${value}" style="width:20px; height:14px;margin-left:0;"/></div><span class="H-16 col-8 px-0 col-sm-9 text-left TextDark my-0">${text}</span></li>`;
  langArray.push(item);
});

// Money class contains a few currency types: USD, GBT, EUR. Available in Array_L array
const Array_L = [];
$('.Money option').each(function () {
  const img = $(this).attr('data-thumbnail');
  const text = this.innerText;
  const value = $(this).val();
  const item = `<li class="col-12 row justify-content-start"><div class="col-sm-1 col-2 pl-1 pr-4"><img src="${img}" alt="" value="${value}" style="width:20px; height:14px;margin-left:0;"/></div><span class="H-16 col-8 px-0 col-sm-9 text-left TextDark my-0">${text}</span></li>`;
  Array_L.push(item);
});

// Set the button value to the first el of the array
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'USD');

/// /////////////////////////CUSTOMIZED BUTTONS//////////////////////////////

$('#Fund').html(langArray);
$('#Curr').html(Array_L);

$('#Fund-Button').html(langArray[3]);
$('#Fund-Button').attr('value', 'HDP');
$('#Curr-Button').html(Array_L[0]);
$('#Curr-Button').attr('value', 'USD');

/// /////////////////////////////////////////////////////////////////////////

// change button stuff on click
$('.a li').click(function (e) {
  if (e.target.closest('.a') != null) {
    const id = e.target.closest('.a').id;
    const img = $(this).find('img').attr('src');
    const value = $(this).find('img').attr('value');
    const text = this.innerText;

    const item = `<li class="col-12 row justify-content-start "><div class="col-sm-1 col-2 pl-1 pr-4"><img src="${img}" alt="" style="width:20px; height:14px;margin-left:0;"/></div><span class="H-16 col-8 col-sm-9 px-0 text-left TextDark my-0">${text}</span></li>`;

    $(`#${id}-Button`).html(item);
    $(`#${id}-Button`).attr('value', value);
    $(`#${id}`).parent('.b-wallet').toggle();

    /// ///////CUSTOMIZED FOR WALLET: HIDE COIN FORM THE OPTIONS BELOW///////////
    $('.Exch-Rates-Box').show('slow');
    $(`.${value}-Rates`).hide('slow');
    /// /////////////////////////////////////////////////////////////////////////
  }
});
// $('.a li').click(function(){
//    var img = $(this).find('img').attr("src");
//    var value = $(this).find('img').attr('value');
//    var text = this.innerText;
//    var item = '<li class="col-12 row justify-content-start "><div class="col-sm-1 col-2"><img src="'+ img +'" alt="" /></div><span class="H-16 col-8 col-sm-5 text-left TextDark my-0">'+ text +'</span><span class="H-16 col-sm-6 col-2 TextDark text-left  my-0 DashInfo"> &nbsp;1</span></li>';
//   $('.btn-select').html(item);
//   $('.btn-select').attr('value', value);
//   $(".b").toggle();

//

// //   console.log(value);
// });

$('.btn-select').click((e) => {
  const id = e.target.closest('.btn-select').id;
  $(`#${id}`).siblings('.b-wallet').toggle();
});

// $(".btn-select").click(function(){
//         $(".b").toggle();
//     });

// //check local storage for the lang
// var sessionLang = localStorage.getItem('lang');
// if (sessionLang){
//   //find an item with value of sessionLang
//   var langIndex = langArray.indexOf(sessionLang);
//   $('.btn-select').html(langArray[langIndex]);
//   $('.btn-select').attr('value', sessionLang);
// } else {
//    var langIndex = langArray.indexOf('ch');
//   console.log(langIndex);
//   $('.btn-select').html(langArray[langIndex]);
//   //$('.btn-select').attr('value', 'en');
// }
/// /////////////////////////////////////////////////////////////////////////////////////////////
/// /////////////////////////////ALL TABLES ///////////////////////////////////////////////////
/// /////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(() => {
  $('.Table-Hedpay').DataTable({
    scrollX: true,
    paginate: true,
    searching: false,
    ordering: true,
    info: false,
    language: {
      paginate: {
        previous: "<span class='Prev-Next'><i class='mdi mdi-chevron-left'></span>",
        next: "<span class='Prev-Next'><i class='mdi mdi-chevron-right'></span>",
      },
    },
  });
});
/// /////////////////////////////////////////////////////////////////////////////////////////////
/// /////////////////////////////ALL TABLES END///////////////////////////////////////////////////
/// /////////////////////////////////////////////////////////////////////////////////////////////

/// /////////////////////////////////////////////////////////////////////////////////////////////
/// /////////////////////////////WALLET BOXES CLICKED///////////////////////////////////////////////////
/// /////////////////////////////////////////////////////////////////////////////////////////////
const boxes = document.querySelectorAll('.WB');

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', (e) => {
    boxersClicked(e);
  });
}

function boxersClicked(e) {
  const id = e.target.closest('.WB').id;

  if ($(`#${id}>div.Wallet-Hide-ProggressBar`).css('display') == 'block') {
    $(`#${id}>div.Wallet-Show-ProggressBar`).show('slow');
    $(`#${id}>div.Wallet-Hide-ProggressBar`).hide('slow');

    $(`#${id}`).removeClass('Wallet-Box');
    // Wallet-Box
  } else if ($(`#${id}>div.Wallet-Show-ProggressBar`).css('display') == 'block') {
    $('.WB >div.Wallet-Show-ProggressBar').show('slow');
    $('.WB >div.Wallet-Hide-ProggressBar').hide('slow');
    $('.WB').removeClass('Wallet-Box');

    $(`#${id}>div.Wallet-Show-ProggressBar`).hide('slow');
    $(`#${id}>div.Wallet-Hide-ProggressBar`).show('slow');

    $(`#${id}`).addClass('Wallet-Box');

    // ADD FUNDS BUTTON, THE CURRENCY WOULD BE SET IN THE DROPDOWNLIST
    // Set the button value to the first el of the array
    const d = $('#Fund').children(`li.${id}`);

    // FOR: WALLET PAGE / EXCHANGE PAGE //////////////////////
    $('#Fund-Button').html(d);
    $('#Fund-Button').attr('value', id);
    // $('#Fund').html(langArray);
    /// ////////////EXCHANGE PAGE: setting the type of currency in the input of amount
    $('.Currency-Type').val(id);
    $('.Currency-Type').text(id);
    $('#From').attr('src', `Icons/${id}.svg`);// for Convert-Step2
  }
}
/// /////////////////////////////////////////////////////////////////////////////////////////////
/// /////////////////////////////WALLET BOXES CLICKED END///////////////////////////////////////////////////
/// /////////////////////////////////////////////////////////////////////////////////////////////

/// /////////////////////////EXCHANGE PAGE://////////////////////////////////////////////////////
/// ///////////////////////////////////////////////Switch /////////////////////////////////////////
function Switch() {
  const from = $('.Currency-Type').val();
  const to = $('#Conversion-Type').text();

  const selectedto = $('#Fund').children(`li.${from}`);// switched
  const selectedFrom = $('#Fund').children(`li.${to}`);// switched

  $('#Fund-Button').html(selectedFrom);
  $('#Fund-Button').attr('value', to);
  $('#Fund').html(langArray);

  $('#Curr-Button').html(selectedto);
  $('#Curr-Button').attr('value', from);
  $('#Curr').html(langArray);

  // FOR EXCHANGE PAGE CONVERT STEP 2 //////////////////////
  $('.Currency-Type').val(to);
  $('.Currency-Type').text(to);
  $('#From').attr('src', `Icons/${to}.svg`);// for Convert-Step2

  $('.Conversion-Type').text(from);
  $('#Conversion-Type').text(from);
  $('#To').attr('src', `Icons/${from}.svg`);// for Convert-Step2
}

/// ///////////////////////////////////////////////Switch end/////////////////////////////////////

// go up
function irArriba() {
  $('.Go-Up').click(() => { $('body,html').animate({ scrollTop: '0px' }, 1000); });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) { $('.Go-Up').slideDown(600); } else { $('.Go-Up').slideUp(600); }
  });
  $('.ir-abajo').click(() => { $('body,html').animate({ scrollTop: '1000px' }, 1000); });
}

irArriba();
