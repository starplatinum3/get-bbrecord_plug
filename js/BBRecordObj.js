

// var BBRecordObj={
//
// }

class BBRecordObj{

    constructor(title, description,questions) {
       this.title=title;
       this.description=description;
       this.questions=questions;
    }

}

class Question {

    constructor(type,text,answers) {
        this.type=type;
        this.text=text;
        this.answers=answers;
    }
}

class ChoiceAnswer {
    constructor(text,choose){
       this.text=text;
        this.choose=choose;
    }
}