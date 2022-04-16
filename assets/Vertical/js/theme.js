/**
 * Theme: Lunoz - Admin & Dashboard Template
 * Author: Myra Studio
 * File: Main Js
 */


(function ($) {

    'use strict';

    function initMetisMenu() {
        //metis menu
        $("#side-menu").metisMenu();
    }


    function initLeftMenuCollapse() {
        // Left menu collapse
        $('#Vertical-Button-Closed').on('click', function () {
            if(screen.width >'941'){
                $('body').toggleClass('enable-vertical-menu');
                $('.main-content').css({ "margin-left" : "300px"});
                $('.navbar-header').css({ "margin-left" : "300px"});
                $('.vertical-menu').show("slow");
                $('#vertical-menu-btn').hide();
                $('.footer').css({ "left" : "300px"});
            } else if(screen.width >'560'){
                $('body').toggleClass('enable-vertical-menu');
                $('.main-content').css({ "margin-left" : "70px"});
                $('.navbar-header').css({ "margin-left" : "70px"});
                $('.vertical-menu').show("slow");
                $('#vertical-menu-btn').hide();
                $('.footer').css({ "left" : "0px"});

            }
           else{
                $('body').toggleClass('enable-vertical-menu');
                $('.main-content').css({ "margin-left" : "0px"});
                $('.navbar-header').css({ "margin-left" : "0px"});
                $('.vertical-menu').show("slow");
                $('#vertical-menu-btn').hide();
                $('.footer').css({ "left" : "0px"});
           }

        });

        $('#vertical-menu-btn').on('click', function () {
            if(screen.width >'941'){
                $('body').toggleClass('enable-vertical-menu');
                $('.main-content').css({ "margin-left" : "300px"});
                $('.navbar-header').css({ "margin-left" : "300px"});
                $('.vertical-menu').show("slow");
                $('#vertical-menu-btn').hide();
                $('.footer').css({ "left" : "300px"});
            } else if(screen.width >'560'){
                $('body').toggleClass('enable-vertical-menu');
                $('.main-content').css({ "margin-left" : "70px"});
                $('.navbar-header').css({ "margin-left" : "70px"});
                $('.vertical-menu').show("slow");
                $('#vertical-menu-btn').hide();
                $('.footer').css({ "left" : "0px"});
            }
           else{
                $('body').toggleClass('enable-vertical-menu');
                $('.main-content').css({ "margin-left" : "0px"});
                $('.navbar-header').css({ "margin-left" : "0px"});
                $('.vertical-menu').show("slow");
                $('#vertical-menu-btn').hide();
                $('.footer').css({ "left" : "0px"});
            
           }

        });

        $('.menu-overlay').on('click', function () {
            if(screen.width>'941'){
                $('body').removeClass('enable-vertical-menu');
                $('#vertical-menu-btn').show();
                $('.vertical-menu').hide("slow");
                $('.main-content').css({ "margin-left" : "70px"});
                $('.navbar-header').css({ "margin-left" : "70px"});
                $('.footer').css({ "left" : "0px"});
            } else if(screen.width >'560'){
                $('body').removeClass('enable-vertical-menu');
                $('#vertical-menu-btn').show();
                $('.vertical-menu').hide("slow");
                $('.main-content').css({ "margin-left" : "70px"});
                $('.navbar-header').css({ "margin-left" : "70px"});
                $('.footer').css({ "left" : "0px"});
            }
            else{
                $('body').removeClass('enable-vertical-menu');
                $('#vertical-menu-btn').show();
                $('.vertical-menu').hide("slow");
                $('.main-content').css({ "margin-left" : "0px"});
                $('.navbar-header').css({ "margin-left" : "0px"});
                $('.footer').css({ "left" : "0px"});
            }
            
            return;
        });
        $('#Vertical-Button-Opened').on('click', function () {
            if(screen.width>'941'){
                $('body').removeClass('enable-vertical-menu');
                $('#vertical-menu-btn').show();
                $('.vertical-menu').hide("slow");
                $('.main-content').css({ "margin-left" : "70px"});
                $('.navbar-header').css({ "margin-left" : "70px"});
                $('.footer').css({ "left" : "0px"});

            }else if(screen.width >'560'){
                $('body').removeClass('enable-vertical-menu');
                $('#vertical-menu-btn').show();
                $('.vertical-menu').hide("slow");
                $('.main-content').css({ "margin-left" : "70px"});
                $('.navbar-header').css({ "margin-left" : "70px"});
                $('.footer').css({ "left" : "0px"});
            }
            else{
                $('body').removeClass('enable-vertical-menu');
                $('#vertical-menu-btn').show();
                $('.vertical-menu').hide("slow");
                $('.main-content').css({ "margin-left" : "0px"});
                $('.navbar-header').css({ "margin-left" : "0px"});
                $('.footer').css({ "left" : "0px"});
            }
          

            return;
        });
    }

    function initActiveMenu() {
        // === following js will activate the menu in left side bar based on url ====
        $("#sidebar-menu a").each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) {
                $(this).addClass("active");
                $(this).parent().addClass("mm-active"); // add active to li of the current link
                $(this).parent().parent().addClass("mm-show");
                $(this).parent().parent().prev().addClass("mm-active"); // add active class to an anchor
                $(this).parent().parent().parent().addClass("mm-active");
                $(this).parent().parent().parent().parent().addClass("mm-show"); // add active to li of the current link
                $(this).parent().parent().parent().parent().parent().addClass("mm-active");
            }
        });
    }

    function initComponents() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })

        $(function () {
            $('[data-toggle="popover"]').popover()
        })
    }

    function init() {
        // initMetisMenu();
        initLeftMenuCollapse();
        initActiveMenu();
        initComponents();
        Waves.init();
    }

    init();

})(jQuery)


