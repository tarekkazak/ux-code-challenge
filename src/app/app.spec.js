describe('App bootstrap', () => {
  let $componentController;
  let component;
  let scope;

  beforeEach(() => {
    angular.mock.inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      component = $componentController('app', { $scope: scope });
    });
  });

  it('should be defined', () => {
    expect(component).not.toBe(null);
  });
});
