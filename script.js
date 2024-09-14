var form = document.getElementById("resumeForm");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted");
        var nameElement = document.getElementById("name");
        var emailElement = document.getElementById("email");
        var phoneElement = document.getElementById("phone");
        var EducationElement = document.getElementById("Education");
        var ExperienceElement = document.getElementById("Experience");
        var skillsElement = document.getElementById("skills");
        if (nameElement &&
            emailElement &&
            phoneElement &&
            EducationElement &&
            ExperienceElement &&
            skillsElement) {
            var name_1 = nameElement.value;
            var email = emailElement.value;
            var phone = phoneElement.value;
            var Education = EducationElement.value;
            var Experience = ExperienceElement.value;
            var skills = skillsElement.value;
            var resumeOutput = "\n        <h2>Resume</h2>\n        \n        <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ".concat(name_1, " </span></p>\n        <p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span></p>\n        <p><strong>phone:</strong><span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span></p>\n    \n        <h3>Education</h3>\n        <p id=\"edit-Education\" class=\"editable\">").concat(Education, "</p>\n\n        <h3>Experience</h3>\n        <p id=\"edit-Experience\" class=\"editable\">").concat(Experience, "</p>\n\n        <h3>Skills</h3>\n        <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n    \n      ");
            var resumeOutputElement = document.getElementById("resumeOutput");
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
                makeEditable();
            }
        }
        else {
            console.log("one or more output elements are missing");
        }
    });
}
function makeEditable() {
    var editableElement = document.querySelectorAll(".editable");
    editableElement.forEach(function (element) { return (element.addEventListener("click", function () {
        var _a;
        var currentElement = element;
        var currentvalue = currentElement.textContent || "";
        if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
            var input_1 = document.createElement("input");
            input_1.type = "text";
            input_1.value = currentvalue;
            input_1.classList.add("editing-input");
            input_1.addEventListener("blur", function () {
                currentElement.textContent = input_1.value;
                currentElement.style.display = "inline";
                input_1.remove();
            });
            currentElement.style.display = "none";
            (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
            input_1.focus();
        }
    })); });
}
