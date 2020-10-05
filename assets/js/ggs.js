if (-1 === document.cookie.indexOf('returning=true')) {

    // run only if cookie not found (-1 means not found)
  
    Swal.fire({
      title: '<strong>Important message</strong>',
      icon: 'info',
      html:
        '<b style="color:white;">Hi This is roarijo89 </b> <br> <br>' +
        '<b style="color:white;">Sorry we know this website looks ugly we haved to stop working on it we will get back to work on it soon <br> <br>'+
        '<b style="color:white">What can I do here ? <br> <br> </b>'+
        '<b style="color:yellow;"><li> Change profile picture</b>'+
        '<b style="color:blue;"><li> Change username</b>'+
        '<b style="color:green;"><li> Change ur bio [coming soon]</b>'+
        '<br> <br>'+
        '<b style="color:red;">This popup will only appear ones</b>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        'Ok!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
    }) // alert
    document.cookie = 'returning=true'; // set cookie
  }