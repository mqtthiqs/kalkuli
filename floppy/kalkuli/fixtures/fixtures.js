// map fixtures for this application

steal("jquery/dom/fixture", function() {
	$.fixture("GET /0987654321/person/list.json", function() {
		return [[
			{id: '123', name: 'Matthias', balance: 24.25, color: '#2AD'},
			{id: '456', name: 'Victoria', balance: -12.25, color: '#9C5'},
			{id: '789', name: 'Florent', balance: -12.0, color: '#68C'},
		]];
	});
})
