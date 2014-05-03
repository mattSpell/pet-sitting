/*global Pet, pets*/
(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(add);
    $('#pets').on('click', '.eat', eat);
    $('#pets').on('click', '.sleep', sleep);
    $('#pets').on('click', '.play', play);
  }

  function eat(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.eat();
    pet.update();
  }

  function sleep(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.sleep();
    pet.update();
  }

  function play(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.play();
    pet.update();
  }

  function add(){
    var gender = $('#gender').val();
    var species = $('#species option:selected').text();
    var speciesImg = $('#species').val();
    var name = $('#name').val() || undefined;
    var age = $('#age').val() || undefined;

    let pet = new Pet(species, speciesImg, gender, name, age);
    pets.push(pet);
    pet.render();
    $('#name').val('');
  }

})();
