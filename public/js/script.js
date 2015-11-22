function renderAPI(){

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
  button.setAttribute('onclick','getTwitterJSON(this)')
  container.appendChild(button)

  content.appendChild(container);
}

function getTwitterJSON(me){
  var social = me.id;
  var tag = document.getElementById('hashtag').value.replace(/#/g,'%23');
  var link = social + '/' + tag
  window.location = link;
}
