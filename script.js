//script document for functions

//function to run when "vis mig" button is clicked
function buttonClick() {


  var selectedPlantetype = document.getElementById('selectPlantetype').value;
  var selectedVanding = document.getElementById('selectVanding').value;

  var evalPlanteVanding = eval(selectedPlantetype).vanding;
  var evalPlanteName = eval(selectedPlantetype).name;
  var evalPlanteTekst = eval(selectedPlantetype).tekst;

  //checking for errors
  if (selectedPlantetype == 1) {
    alert("Vælg venligst en plantetype.")
  }

  else if (selectedVanding === "_blank") {
    alert("Vælg venligst hvor ofte du vander din plante. ")
  }

  else if (selectedPlantetype == "vedikke") {
    document.getElementById('result1').innerHTML = '<p id="resultText1"> &#128556; Måske du skulle starte med at finde ud af hvilken palnte du har &#128521;. <p>';
  }

  //if no errors - this function runs
  else {

    if (selectedVanding > evalPlanteVanding) {

    document.getElementById('result1').innerHTML = '<p id="resultText1">Sådan! &#128537;<br> Du er ret god til at passe din ' + evalPlanteName + '. Den skal du nok få fornøjelse af i lang tid.<p>';
    document.getElementById('result2').innerHTML = '<p id="resultText2">Sådan passer du din ' + evalPlanteName + ' bedst...<p>';
    document.getElementById('carePlante').innerHTML = '<p id="resultText3">' + eval(selectedPlantetype).tekst + ' <p>';
    document.getElementById('tree').innerHTML = '<img id="tree" src="./Artboard1@2x.png">';
    document.getElementById("buttonAppear").innerHTML = '<button class="plantEtTraeButton" onclick="" ><a  href="https://plant-et-trae.dk/saadan-kan-du-stoette/" target="_blank">Plant et træ</button>';
  }
    else if (selectedVanding == evalPlanteVanding) {
    document.getElementById('result1').innerHTML = '<p id="resultText1">WOW &#128525;<br> Du passer din ' + evalPlanteName + ' super godt. Du er jo ren Moder Natur.<p>'; //måske indsætte et random plantenavn
    document.getElementById('result2').innerHTML = '<p id="resultText2">Sådan passer du din ' + evalPlanteName + ' bedst...<p>';
    document.getElementById('carePlante').innerHTML = '<p id="resultText3">'+ evalPlanteTekst + '.<p>';
    document.getElementById('tree').innerHTML = '<img id="tree" src="./Artboard1@2x.png">';
    document.getElementById("buttonAppear").innerHTML = '<button class="plantEtTraeButton" onclick=""><a href="https://plant-et-trae.dk/saadan-kan-du-stoette/" target="_blank">Plant et træ</button>';
 
  }
    else if (selectedVanding < evalPlanteVanding) {
    document.getElementById('result1').innerHTML = '<p id="resultText1">Ups! &#128534; <br> Du passer ikke din ' + evalPlanteName + ' ret godt. Du må nok snart få købt dig en ny.<p>';
    document.getElementById('result2').innerHTML = '<p id="resultText2">Sådan passer du din ' + evalPlanteName + ' bedst...<p>';
    document.getElementById('carePlante').innerHTML = '<p id="resultText3">' + evalPlanteTekst + '.<p>';
    document.getElementById('tree').innerHTML = '<img id="tree" src="./Artboard1@2x.png">';
    document.getElementById("buttonAppear").innerHTML = '<button class="plantEtTraeButton" onclick=""><a href="https://plant-et-trae.dk/saadan-kan-du-stoette/" class="test" target="_blank">Plant et træ</button>';
  }

    document.getElementById("buttonAppear").style.display = "block";

  }
}




