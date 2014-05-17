function AppViewModel() {
	//observables are used to notify whenever the viewModel data property changes
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");
    //computed will combine or convert one or more observables to others
    this.fullName = ko.computed(function() {
    	return this.firstName() + " " + this.lastName(); //combine firstName and lastName & assign to fullName
	}, this);
	//this will convert the lastName to upperCase
	this.capitalizeLastName = function() {
        var currentVal = this.lastName();        // Read the current value
        this.lastName(currentVal.toUpperCase()); // Write back a modified value
    };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());