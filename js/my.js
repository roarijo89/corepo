// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add views
var view1 = myApp.addView('#view-1', {
    dynamicNavbar: true
});
var view2 = myApp.addView('#view-2', {
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3', {
    dynamicNavbar: true
});

var view4 = myApp.addView('#view-4', {
    dynamicNavbar: true
});

$$('.support').on('click', function () {
    myApp.confirm('By supporting us you can help us with keeping this app alive!', 'Support us!', function () {
        window.open('https://www.paypal.me/notdanieldev', '_blank')
    });
});


$$('.twitter').on('click', function () {
    myApp.confirm('Our Twitter is currently suspended, until Twitter have responded to our appeal please join our Discord server if you need help!', 'Important!', function () {
        window.open('https://discord.gg/JMUqQAu', '_blank')
    });
});

if (!window.navigator.standalone) {

    myApp.modal({
        title: 'Attention!',
        text: 'Add the app to your homescreen.',
        verticalButtons: true,
        buttons: [

        ]
    });
}


$$('.reload').on('click', function () {
    myApp.showIndicator();
    setTimeout(function () {
        myApp.hideIndicator();
        location.reload();
    }, 500);
});

myApp.onPageAfterAnimation('app-page', function () {
    try {
        adsbygoogle.push({})
    } catch (err) {}
});

myApp.onPageAfterAnimation('app-page', function () {
    try {
        adsbygoogle.push({})
    } catch (err) {}
});