class Grades {
    constructor() {
        this.grades = [];
        this.grades.push({
            id: 1,
            name: "Asaad Saad",
            course: "CS572",
            grade: 95
        });
        this.grades.push({
            id: 2,
            name: "Purevdorj Batgerel",
            course: "CS572",
            grade: 95
        });
    }

    getAllGrades() {
        return new Promise((resolve) => {
            return resolve(this.grades);
        });
    }

    getGradeById(id) {
        return new Promise((resolve, reject) => {
            for (const grade of this.grades) {
                if (grade.id == id) {
                    return resolve(grade);
                }
            }
            return reject("Grade not found");
        });
    }

    addGrade(grade) {
        return new Promise((resolve) => {
            this.grades.push(grade);
            // return resolve(grade);
            return resolve("Grade addedd Successfully");
        });
    }

    removeGrade(id) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < this.grades.length; i++) {
                if (this.grades[i].id == id) {
                    this.grades.splice(i, 1);
                    // return resolve(this.grades.splice(i, 1));
                    return resolve("Grade deleted successfully");
                }
            }
            return reject("Grade not found");
        });
    }

    updateGrade(newGrade) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < this.grades.length; i++) {
                if (this.grades[i].id == newGrade.id) {
                    this.grades[i] = newGrade;
                    // return resolve(newGrade);
                    return resolve("Grade updated successfully");
                }
            }
            return reject("Grade not found");
        });
    }
}

module.exports = new Grades();