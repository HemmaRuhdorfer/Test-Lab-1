describe('Dem Alf helfen', function() {
	beforeEach(function() {
		finder = new SpaceshipFinder();
	});

	it('should return forever lost on empty spaceship', function() {
		expect(finder.findSpaceship("")).toEqual("forever lost");
	});
	it('should find spaceship at [0,0]', function() {
		expect(finder.findSpaceship('X')).toEqual([0,0]);
	});
	it('should find spaceship at [1,0]', function() {
		expect(finder.findSpaceship('.X')).toEqual([1,0]);
	});
	it('should find spaceship at [0,1]', function() {
		expect(finder.findSpaceship('.\nX')).toEqual([0,1]);
	});
	it('should find spaceship at [7,3]', function() {
    expect(finder.findSpaceship(
        '..........\n' +
        '..........\n' +
        '..........\n' +
        '.......X..\n' +
        '..........\n' +
        '..........'
    )).toEqual([7,3]);
	});
});
