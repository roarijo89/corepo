if (-1 === document.cookie.indexOf('returning=true')) {

    // run only if cookie not found (-1 means not found)
  
    Swal.fire({
        title: '<strong>Important message</strong>',
        icon: 'info',
        html:
          '<b>Hi This is roarijo89</b> <br> <br>' +
          'Sorry we know this website looks ugly we haved to stop working on it we will get back to work on it soon <br> <br>'+
          'This popup will only appear ones',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
          'Ok!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        
      }) // alert
    document.cookie = 'returning=true'; // set cookie
  }