// Webpage where Javascript handles information of several students
// Define an array of student objects which have the following properties:
// name, id, project work, exam points, final grade

// Define following methods for the student objects:

// initValues() which receives name, id, project work and exam points of the student and initializes them
// getGrade() which calculates and returns the final grade of the student based on the project and exam points
// getInfo() which returns all information of the student (name, id, project work, exam points, final grade)

const studentArray = [
    {

        initValues: function(name, id, projectWork, examPoints) {
            this.name = name;
            this.id = id,
            this.projectWork = projectWork,
            this.examPoints = examPoints;
        
        },

        getGrade: function() {

            let grade;

            if(!this.projectWork) {
                grade = 'Course failed, project work not done!';
                return grade;
            } else {
        
                if(this.examPoints < 40) {
                    grade =  0;
                } else if(this.examPoints < 50) {
                    grade =  1;
                } else if(this.examPoints < 60) {
                    grade = 2;
                } else if(this.examPoints < 70) {
                    grade = 3;
                } else if(this.examPoints < 85) {
                    grade = 4;
                } else if(this.examPoints >= 85) {
                    grade = 5;
                };


                return grade;
            };

        },

        getInfo: function() {
            return `
            Name: ${this.name}
            Id: ${this.id}
            Project Work: ${this.projectWork ? 'Done' : 'Not Done'}
            Exam Points: ${this.examPoints}
            Final Score: ${this.getGrade()}
            `;
        },
    }
];

const namePrompt = prompt('What is the student name?');
const idPrompt = prompt('What is the id of the student?');
const projectWorkPrompt = confirm('Has the student completed the course work?');
const examPointsPrompt = parseInt(prompt('How many points did the student get from the exam?'));


studentArray[0].initValues(namePrompt, idPrompt, projectWorkPrompt, examPointsPrompt);

alert(studentArray[0].getInfo());
