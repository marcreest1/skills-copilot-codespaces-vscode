function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        job: 'Web Developer',
        displayInfo: function () {
            console.log('Name: ' + this.name + ', Age: ' + this.age + ', Job: ' + this.job);
        }
    };

    return member;
}