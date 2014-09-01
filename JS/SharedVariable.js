function student(name)  {
	this.name = name;
	this.subject = 'Javascript';
	abc = "abc";
};
student.prototype.toString = function(){
	return this.name + ' - '  + this.subject;
}


student.prototype = (function () {
var label = " Book: The good parts - doglus ";
return {
			getLabel: function () { 
			return label + this.name ;
		}
	};
}());
var stud1 =new student('Madhukar');
var stud2 =new student('Prem');
alert(stud1.getLabel());
alert(stud2.getLabel());