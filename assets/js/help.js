function help(){
    let timerInterval
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButtonColor: 'btn btn-success',
        cancelButtonColor:'btn btn-danger'
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Help',
      text: "Tap on one of the buttons to get help I recommed the change profile please read it",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'delete account',
      cancelButtonText: 'change profile',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '<strong> Deleting account info</strong>',
          icon: 'info',
          html:
            'If you delete your account you wont be able to use are websites and apps<br> <br>',
          showCloseButton: true, 
          focusConfirm: false,
          confirmButtonText:
            'Ok',
          confirmButtonAriaLabel: 'Thank you',
          
          })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: '<strong> Change profile picture help</strong>',
          icon: 'info',
          html:
            '<b>"coco"</b> use coco Tweaks logo <br> <br>' +
            '<b>"com"</b> use community repo logo <br> <br>' +
            '<b>"de"</b> use default logo <br> <br>' +
            'You can use your own picture tap here to see how <a href="https://www.instagram.com/roarijo89_tweaks/"> <i class="fab fa-youtube"></i> Youtube</a>',
          showCloseButton: true, 
          focusConfirm: false,
          confirmButtonText:
            'Thanks',
          confirmButtonAriaLabel: 'Thank you',
          
          })
      }
    });
  }
// in type possible value are success/error/wa/rning /info.