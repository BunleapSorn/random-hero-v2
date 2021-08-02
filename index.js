const character_id = Math.floor(Math.random() * 731) + 1;
fetch("https://www.superheroapi.com/api.php/883549028812063/" + character_id)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Work with JSON data here
    console.log(data);
    //Basic Info
    var name = data.name;
    var image = data.image.url;
    // Power Stats
    var intelligence = data.powerstats.intelligence;
    var strength = data.powerstats.strength;
    var speed = data.powerstats.speed;
    var durability = data.powerstats.durability;
    var power = data.powerstats.power;
    var combat = data.powerstats.combat;
    // Biography - Full Info
    var fullname = data.biography["full-name"];
    var alteregos = data.biography["alter-egos"];
    var aliases = data.biography["aliases"];
    var placeofbirth = data.biography["place-of-birth"];
    var firstappearance = data.biography["first-appearance"];
    var publisher = data.biography["publisher"];
    var alignment = data.biography["alignment"];

    $(".name").text(name);
    $(".image").attr("src", image);
    $(".intelligence").text(intelligence);
    $(".strength").text(strength);
    $(".speed").text(speed);
    $(".durability").text(durability);
    $(".power").text(power);
    $(".combat").text(combat);
    $(".fullname").text(fullname);
    $(".alteregos").text(alteregos);
    $(".aliases").text(aliases);
    $(".placeofbirth").text(placeofbirth);
    $(".firstappearance").text(firstappearance);
    $(".publisher").text(publisher);
    $(".alignment").text(alignment);
  })
  .catch((err) => {
    // Do something for an error here
  });
