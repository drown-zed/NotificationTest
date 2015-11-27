
var nwNotify = require('nw-notify');
// Change config options
nwNotify.setConfig({
    height: 135,
    displayTime: 30*60*1000, //30min
    defaultStyleText: {
        'word-break': 'break-all'
    }
});

var gui = require('nw.gui');
var win = gui.Window.get();

app = {
    onStartup: function () {
        app.show();
        win.focus();
    },

    hide: function () {
        win.hide();
    },
    show: function () {
        win.show();
    },
	refresh: function(){
		nwNotify.closeAll();
		location.reload();
	},
	sendNotification: function(){
		nwNotify.notify({
			title: 'Some Title',
			text: 'Some text some text some text',
			onClickFunc: function(event) {
				event.closeNotification();
			},
			onCloseFunc: function(event) {
				
			}
		});		
	}
};


win.title = 'Notification';

app.onStartup();

gui.App.on('open', function (cmdline) {
    app.show();
});

gui.App.on('reopen', function (cmdline) {
    app.show();
});





