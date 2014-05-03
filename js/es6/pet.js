var Pet = function Pet(species, speciesImg, gender) {
  "use strict";
  var name = arguments[3] !== (void 0) ? arguments[3] : 'Cutey';
  var age = arguments[4] !== (void 0) ? arguments[4] : 3;
  this.species = species;
  this.speciesImg = ("./../media/" + speciesImg);
  this.gender = gender;
  this.name = name;
  this.age = age * 1;
  this.health = _.random(10, 100);
  this.full = _.random(5, 50);
  this.mood = _.random(1, 10);
};
($traceurRuntime.createClass)(Pet, {
  eat: function() {
    "use strict";
    this.full += _.random(1, 3);
    if (this.full >= 100) {
      this.full = 100;
    }
  },
  sleep: function() {
    "use strict";
    this.health += _.random(1, 3);
    if (this.health >= 100) {
      this.health = 100;
    }
  },
  play: function() {
    "use strict";
    this.mood += _.random(0, 3);
    this.full -= _.random(1, 4);
    this.health -= _.random(1, 4);
    if (this.mood >= 100) {
      this.mood = 100;
    }
    if (this.health <= 0) {
      $(("div[data-name=" + this.name + "]")).find('div.image').append('<div class="dead"></div>');
    }
  },
  update: function() {
    "use strict";
    $(("div[data-name=" + this.name + "]")).find('.full').css('width', (this.full + "%"));
    $(("div[data-name=" + this.name + "]")).find('.health').css('width', (this.health + "%"));
    $(("div[data-name=" + this.name + "]")).find('.mood').css('width', (this.mood + "%"));
  },
  render: function() {
    "use strict";
    $('#pets').append(("<div data-name=" + this.name + " class=pet>\n                        <div class=image style='background-image:url(\"" + this.speciesImg + "\")'></div>\n                        <div class=nameSpec><span>Name: " + this.name + "</span></div>\n                        <div class=ageGen><span>Age: " + this.age + " | </span><span>Gender: " + this.gender + "</span></div>\n                        <div class='meter'><div class='words'>Health</div><span class='health' style='width:" + this.health + "%'></span></div>\n                        <div class='meter'><div class='words'>Mood</div><span class='mood' style='width:" + this.mood + "%'></span></div>\n                        <div class='meter'><div class='words'>Belly</div><span class='full' style='width:" + this.full + "%'></span></div>\n                        <button class='eat'>Eat</button>\n                        <button class='sleep'>Sleep</button>\n                        <button class='play'>Play</button>\n                        </div>"));
  }
}, {find: function(name) {
    "use strict";
    return _(pets).find((function(p) {
      return p.name === name;
    }));
  }});

//# sourceMappingURL=pet.map
