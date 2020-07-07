jQuery(document).ready(function ($) {

  var modalOpenBtn = $('.ewmodal-btn-open');

  var modalBg = $('#modalbg');
  var modalWindow = $('#modalWindow');
  var modalContent = $('#modalContent');
  var modalClose = $('.ewmodal-btn-close');

  var mobileNav = $('#modalMenu');

  if (modalOpenBtn.length > 0) {

    //Preload modal content
    // ewPopulateModal();

    modalOpenBtn.click(function (event) {

      if ($(this).attr('data-target') == 'mobile-nav') {
        ewShowModal();
        ewShowMenu();
        $('#menu-popout').addClass('active');
      } else {
		event.preventDefault();
		modalContent.load($(this).href);
        ewShowModal();
        ewShowModalDialog();
      }

    });

    $(modalClose).add(modalBg).click(function () {
      ewHideModal();
    });
  }


  function ewShowModal() {
    modalBg.addClass('active');
    $('html').addClass('locked');
  }

  function ewShowModalDialog() {
    modalWindow.addClass('active');
  }

  function ewHideModal() {
    modalBg.removeClass('active');
    modalWindow.removeClass('active');
    mobileNav.removeClass('active');
    $('html').removeClass('locked');
  }

  function ewShowMenu() {
    mobileNav.addClass('active');
  }

});
