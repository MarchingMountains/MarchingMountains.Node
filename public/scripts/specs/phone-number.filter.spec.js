describe('core filter', function() {
    var $filter;

    beforeEach(module('myApp'));
    beforeEach(inject(function (_$filter_) {
        $filter = _$filter_;
    }));

        it('should be able to format 10 phone numbers', function() {
            expect($filter('tel')(1111111111)).to.equal('(111) 111-1111');
        });
         it('should be able to format 11 phone numbers', function() {
            expect($filter('tel')(11111111111)).to.equal('(111) 111-1111');
        });
          it('should be able to format 12 phone numbers', function() {
            expect($filter('tel')(111111111111)).to.equal('111 (11) 111-1111');
        });

        it('should be return default phone numbers', function() {
            expect($filter('tel')(11)).to.equal(11);
        });
        it('should be return empty string', function() {
            expect($filter('tel')()).to.equal('');
        });
        it('should be return characters', function() {
            expect($filter('tel')('abc')).to.equal('abc');
        });
});