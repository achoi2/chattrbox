const socket = new WebSocket('ws://localhost:3001')

socket.addEventListener('message', (event) => {
  console.log(event.data);
  let row = $messageRow(event.data);
  $messageContainer.append(row);
}); 


let textData = document.querySelector(".form-control");
let form = document.querySelector('.cb-container')


let $messageContainer = $('.chat-message-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(textData)
  socket.send(textData.value);
});


// console.log("Make me do things!");

let drawMessage = ({
    user: u,
    timestamp: t,
    message: m
  }) => {
    let $messageRow = $('<li>', {
      'class': 'message-row'
    });
    // if (this is me?) {
    //   $messageRow.addClass('me');
    // }
    let $message = $('<p>');
    $message.append($('<span>', {
      'class': 'message-username',
      text: u
    }));
    $message.append($('<span>', {
      'class': 'timestamp',
      'data-time': t,
      text: t.toString()
    }));
    $message.append($('<span>', {
      'class': 'message-message',
      text: m
    }));
    let $img = $('<img>', {
      src: 'https://avatars3.githubusercontent.com/u/794113?s=64&v=4',
      title: u
    });
    $messageRow.append($img);
    $messageRow.append($message);
    return $messageRow;
  };



let $messageRow = (message) => 
  drawMessage({
    user: 'nybblr',
    message: message,
    timestamp: new Date()
});

