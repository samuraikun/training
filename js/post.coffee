$(document).ready ->
  $('.btn').on 'click', ->
    $.get './js/sample_0617.json', (data) ->
      for i of data
        $('#output').append '<li>' + data[i].country + ' (' + 'Your Team is ' + data[i].result + ') </li>'
      return
    return
  return