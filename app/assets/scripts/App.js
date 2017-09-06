var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
	payTaxes(){
		console.log(this.name + " is now Adulting and paying taxes and stuff.");
	}
}

var john = new Person("John Doe", "Blue");
john.greet();

var jane = new Adult("Jane Smith", "Orange");
jane.greet();
jane.payTaxes();

