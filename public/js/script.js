window.onload = function () {
  menuClick()
}

$(document).foundation()
// in order to make the menu works.
// To see whats going on take a look at the documentation of foundation: http://foundation.zurb.com/sites/docs/installation.html

// var nestable = UIkit.nestable(element, { /* options */ });
// var accordion = UIkit.accordion(element, { /* options */ });
// var element = document.getElementById('menu')
// var elem = new Foundation.AccordionMenu(element);



function menuClick() {

  var menuItems = document.querySelectorAll("#menu > li");

  for (var elem = 0; elem < menuItems.length; ++elem) {
    if (menuItems[elem].id == "settings") {
      menuItems[elem].onclick = function () {
        removeActive()
        this.classList.add('active-li')
        this.firstChild.classList.add('active-li')
      }
    } else if (menuItems[elem].id == "api") {
      menuItems[elem].onclick = function () {
        removeActive()
        this.classList.add('active-li')
        this.firstChild.classList.add('active-li')
      }
    } else if (menuItems[elem].id == "graphs") {
      menuItems[elem].onclick = function () {
        removeActive()
        this.classList.add('active-li')
        this.firstChild.classList.add('active-li')
      }
    }
  }
}

function removeActive() {
  var menuItems = document.querySelectorAll("#menu > li");
  for (var elem = 0; elem < menuItems.length; ++elem) {
    menuItems[elem].classList.remove('active-li');
    menuItems[elem].firstChild.classList.remove('active-li')
  }
}

function removeActiveSocial() {
  var menuSocial = document.querySelectorAll('#menu-social > li')
  for (var social = 0; social < menuItems.length; ++social) {
    menuItems[social].classList.remove('active-li');
    menuItems[social].firstChild.classList.remove('active-li')
  }
}

function renderAPI() {

  var api = document.getElementById('api')
  api.className = api.className + ' active'

  var content = document.getElementById('content');

  var container = document.createElement('div');
  container.className = container.className + ' container';

  var twitterTitle = document.createElement('h3');
  twitterTitle.innerHTML = 'Twitter API';
  container.appendChild(twitterTitle);

  var input = document.createElement('input');
  input.id = 'hashtag'
  container.appendChild(input)

  var button = document.createElement('button');
  button.id = 'twitter';
  button.innerHTML = 'Search';
  button.setAttribute('onclick', 'getTwitterJSON(this)')
  container.appendChild(button)

  content.appendChild(container);
}

function getTwitterJSON(me) {
  var social = me.id;
  var tag = document.getElementById('hashtag').value.replace(/#/g, '%23');
  var link = social + '/' + tag
  window.location = link;
}
