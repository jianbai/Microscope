if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'FCK1',
		url: 'http://sachagreif.com/introducing-telescope/'
	});

	Posts.insert({
		title: 'FCK2',
		url: 'http://meteor.com'
	});

	Posts.insert({
		title: 'FCK3',
		url: 'http://themeteorbook.com'
	});
}