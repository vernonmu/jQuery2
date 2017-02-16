// YOU READY? I'M READY! RAH!

 $(document).ready(function() {
-->

  var advanceTask = function(task) {
    var modified = task.innerText.trim()
    for (var i=0; i<listo.length; i++) {
      if (listo[i].task === modified) {
        if(listo[i].id === 'new') {
          listo[i].id = 'inProgress';
        } else if (listo[i].id === 'inProgress') {
          listo[i].id = 'archived';
        } else {
          listo.splice(i, 1);
        }
        break;
      }
    }
    task.remove();
  };


  $('#newTaskForm').hide();

  $('#saveNewItem').on('click', function(e) {
    console.log('click')
    e.preventDefault();
    var task = $('#newItemInput').val().trim();
    addTask(task);
  });

  $(document).on('click', '#item', function(e) {
    e.preventDefault();
  });

  $(document).on('click', '#item', function(e) {
    e.preventDefault();
    var task = this;
    advanceTask(task);
    this.id = 'inProgress';
  });

  var listo = [];

  var Task = function(task) {
    this.task = task;
    this.id = 'new';
  }

  var addTask = function(task) {
    if(task) {
      task = new Task(task);
      listo.push(task);

      $('#newItemInput').val('');

        $('#newList').append(
          '<a href="#finish" class="" id="item">' +
          '<li class="list-group-item">' +
          '<h3>' + task.task + '</h3>' +
          '<i class="glyphicon glyphicon-arrow-right">' +
          '</span>' +
          '</li>' +
          '</a>'
        );
      }

      $('#newTaskForm').slideToggle('fast', 'linear');
  };

  //Opens form
  $('#add-todo').on('click', function() {
    $('#newTaskForm').fadeToggle('fast', 'linear');
  });

  //closes form
  $('#cancel').on('click', function(e) {
    e.preventDefault();
    $('#newTaskForm').fadeToggle('fast','linear');
  });

  $(document).on('click', '#item', function(e) {
    e.preventDefault();
    var task=this;
    advanceTask(task);
    this.id = 'inProgress';
    $('#currentList').append(this.outerHTML);
  });

  $(document).on('click', '#inProgress', function(e) {
    e.preventDefault();
    var task = this;
    task.id = "archived";
    var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
    advanceTask(task);
    $('#archivedList').append(changeIcon);
  });

  $(document).on('click', '#archived', function(e) {
    e.preventDefault();
    var task = this;
    advanceTask(task);
  });

  

    console.log(localStorage)

    // var myStorage = localStorage;

    if (typeof(Storage) !== "undefined") {
      console.log('storage supported')
    // Code for localStorage/sessionStorage.
      } else {
      console.log('no storage')
    // Sorry! No Web Storage support..
    }

  // interface Storage {
  //   getter any getItem(in DOMString key);
  //   setter creator void setItem(in DOMString key, in any data);
  // };

  //end document ready
});
