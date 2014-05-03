/*jshint unused:false*/
/*exported Pet*/
/*global _, pets*/

class Pet{
  constructor(species, speciesImg, gender, name='Cutey', age=3){
    this.species = species;
    this.speciesImg = `../media/${speciesImg}`;
    this.gender = gender;
    this.name = name;
    this.age = age * 1;

    this.health =_.random(10, 100);
    this.full =_.random(5, 50);
    this.mood =_.random(1, 10);
  }

  static find(name){
    return _(pets).find(p=>p.name === name);
  }

  eat(){
    this.full += _.random(1, 3);
    if(this.full >= 100){this.full = 100;}
  }

  sleep(){
    this.health += _.random(1, 3);
    if(this.health >= 100){this.health = 100;}
  }

  play(){
    this.mood += _.random(0, 3);
    this.full -= _.random(1, 4);
    this.health -= _.random(1, 4);
    if(this.mood >= 100){this.mood = 100;}
    if(this.health <= 0){$(`div[data-name=${this.name}]`).find('div.image').append('<div class="dead"></div>');}

  }

  update(){
    $(`div[data-name=${this.name}]`).find('.full').css('width', `${this.full}%`);
    $(`div[data-name=${this.name}]`).find('.health').css('width', `${this.health}%`);
    $(`div[data-name=${this.name}]`).find('.mood').css('width', `${this.mood}%`);
  }

  render(){
    $('#pets').append(`<div data-name=${this.name} class=pet>
                        <div class=image style='background-image:url("${this.speciesImg}")'></div>
                        <div class=nameSpec><span>Name: ${this.name}</span></div>
                        <div class=ageGen><span>Age: ${this.age} | </span><span>Gender: ${this.gender}</span></div>
                        <div class='meter'><div class='words'>Health</div><span class='health' style='width:${this.health}%'></span></div>
                        <div class='meter'><div class='words'>Mood</div><span class='mood' style='width:${this.mood}%'></span></div>
                        <div class='meter'><div class='words'>Belly</div><span class='full' style='width:${this.full}%'></span></div>
                        <button class='eat'>Eat</button>
                        <button class='sleep'>Sleep</button>
                        <button class='play'>Play</button>
                        </div>`);
  }
}
