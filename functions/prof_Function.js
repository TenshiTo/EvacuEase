let nthChild = 2; // Default nth-child

let mediaQuery = window.matchMedia("(max-width: 955px)"); // Set max-width limit
if (mediaQuery.matches) {
function changeIncChild() {

    // Reset all children to hidden
    document.querySelectorAll(".profile > div").forEach(el => {
        el.style.display = "none";
    });
    nthChild++;
    if (nthChild > 7) nthChild = 2;
    // Show only the selected nth child
    let selectedChild = document.querySelector(`.profile > div:nth-child(${nthChild})`);
    if (selectedChild) selectedChild.style.display = "block";
}
function changeDecChild() {
    // Reset all children to hidden
    document.querySelectorAll(".profile > div").forEach(el => {
        el.style.display = "none";
    });
    
    nthChild--;
    if (nthChild < 2) nthChild = 7;
    // Show only the selected nth child
    let selectedChild = document.querySelector(`.profile > div:nth-child(${nthChild})`);
    if (selectedChild) selectedChild.style.display = "block";
    
}
}