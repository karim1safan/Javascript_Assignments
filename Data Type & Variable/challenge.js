/* Challenge 1*/
let theTitle = "Elzero",
  theDescription ="Elzero Web School",
  theDate = "25/10";

let theContent = `
  <div class="card">
    <h3> Hello ${theTitle} </h3>
    <p> ${theDescription} </p>
    <span> ${theDate} </span>
  </div>
`;

let theResult = theContent.repeat(4);

document.write(theResult);

