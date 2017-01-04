'use strict';

	Router.configure({
		layoutTemplate: 'layout',
		notFoundTemplate: '404'
	});

	Router.route('/', function () {
  		this.render('products');
	});

	Router.route('/about', function () {
		 this.render('about');
	});