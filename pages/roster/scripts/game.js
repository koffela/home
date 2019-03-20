let people = [];
let n = 100;
let a = 0;

//TODO
//need to make sure to use const in the project somewhere


//need to make section of page change/update according to drop down menu


class person{constructor(name, age)
{
    
    this.name = name;
    this.age = age;

}
};

class teacher extends person{
    constructor(degree)
    {
        
        //iframe to add another
        
        this.degree = degree;
    }
}

class student extends person{
    constructor(major)
    {
        
        this.major = major;
    }
}

class child extends person{
    constructor(favoriteToy)
    {
        
        this.favoriteToy = favoriteToy;
    }
}


function addValueToTheList() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    console.log(name, age);
    people.push(new person(name, age));
    
    let node = document.createElement("li");
    let textnode = document.createTextNode("Name: " + name + ", Age: " + age);
    node.appendChild(textnode);
    document.getElementById("people").appendChild(node);
}


function createForm(value) {
    console.log(value);
    let x = document.getElementById("formLocation");
    let newForm = document.createElement('form'); //create new form
    x.appendChild(newForm);
    
    let namelabel = document.createElement('label'); // Create Label for Name Field
    namelabel.innerHTML = "Your Name : "; // Set Field Labels
    newForm.appendChild(namelabel);

    let inputelement = document.createElement('input'); // Create Input Field for Name
    inputelement.setAttribute("type", "text");
    inputelement.setAttribute("name", "dname");
    newForm.appendChild(inputelement);


    let submitelement = document.createElement('input'); // Append Submit Button
    submitelement.setAttribute("type", "submit");
    submitelement.setAttribute("name", "dsubmit");
    submitelement.setAttribute("value", "Submit");
    newForm.appendChild(submitelement);
}



        
