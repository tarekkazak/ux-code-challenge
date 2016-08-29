class FlyoutOutputService {
  constructor() {
    this.outputData = {};
  }

  setData(newData) {
    angular.extend(this.outputData, newData);
  }

  clearData() {
    this.outputData = {};
  }

  getData() {
    return () => this.outputData;
  }
}

FlyoutOutputService.$inject = [];

export default FlyoutOutputService;
