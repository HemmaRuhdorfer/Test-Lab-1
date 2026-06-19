describe('Dem Alf helfen', function() {
	beforeEach(function() {
		finder = new SpaceshipFinder();
	});

	it('should return forever lost on an empty map', function() {
		expect(finder.findSpaceship("")).toEqual("forever lost");
	});
});
