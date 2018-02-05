function highlightSkill(id) {
    console.log(id);

    // Remove all existing highlights 
    var highlightedSkills = document.getElementsByClassName("skill-highlight");
    while (highlightedSkills.length > 0) {
        highlightedSkills[0].classList.remove("skill-highlight");
    }

    // Highlight the selected skill
    var selectedSkill = document.getElementById(id);
    selectedSkill.classList.add("skill-highlight");

    // Find all duties for the current skill and add the skill-highlight class so that it gets highlighted.
    var elements = document.getElementsByClassName("skill-" + id);
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("skill-highlight");
    }
}