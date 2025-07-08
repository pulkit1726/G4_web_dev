function welcome() {
	console.log(this.studentname + " welcome to the class " + this.studentclass);
}

const student1 = {
	studentname: "pulkit",
	studentclass: "CSE",
};

const student2 = {
	studentname: "ujjwal",
	studentclass: "mechanical",
};

welcome.call(student1); // call method
welcome.call(student2); // call method