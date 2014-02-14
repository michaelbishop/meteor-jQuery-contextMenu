Package.describe({
	summary: "jQuery contextMenu packaged for Meteor"
});

Package.on_use(function (api){
	api.add_files('src/jquery.contextMenu.css', 'client');
	api.add_files('src/jquery.contextMenu.js', 'client');
	api.add_files('src/jquery.ui.position.js', 'client');
	api.add_files('src/images/cut.png', 'client');
	api.add_files('src/images/door.png', 'client');
	api.add_files('src/images/page_white_add.png', 'client');
	api.add_files('src/images/page_white_copy.png', 'client');
	api.add_files('src/images/page_white_delete.png', 'client');
	api.add_files('src/images/page_white_edit.png', 'client');
	api.add_files('src/images/page_white_paste.png', 'client');
});
