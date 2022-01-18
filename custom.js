function calculate() {
     let condition_satisfy = true;
     let val1 = document.getElementById('val1').value;
     let val2 = document.getElementById('val2').value;
     let operator = document.getElementById('operator').value;
     document.getElementById('ansDiv').style.display = 'none';
     document.getElementById('errorVal1').style.display = 'none';
     document.getElementById('errorVal2').style.display = 'none';

     if (isNaN(val1) || val1 == "") {
          document.getElementById('errorVal1').style.display = 'block';
          document.getElementById('errorVal1').innerHTML = 'Enter Numerial Value!';
          condition_satisfy = false;
     }
     if (isNaN(val2) || val2 == "") {
          document.getElementById('errorVal2').style.display = 'block';
          document.getElementById('errorVal2').innerHTML = 'Enter Numerial Value!';
          condition_satisfy = false;
     }
     if (condition_satisfy) {
          let ans;
          switch (operator) {
               case 'add':
                    ans = parseFloat(val1) + parseFloat(val2);
                    break;
               case 'sub':
                    ans = parseFloat(val1) - parseFloat(val2);
                    break;
               case 'mul':
                    ans = parseFloat(val1) * parseFloat(val2);
                    break;
               case 'div':
                    ans = parseFloat(val1) / parseFloat(val2);
                    break;
               case 'mod':
                    ans = parseFloat(val1) % parseFloat(val2);
                    break;
               default:
                    break;
          }
          document.getElementById('ansDiv').style.display = 'block';
          document.getElementById('answer').innerHTML = ans;
     }

}

display();
function display() {
     if (localStorage.getItem('Items') != null) {
          let data = JSON.parse(localStorage.getItem('Items'));
          let tbodyId = document.getElementById('tbodyId');
          let myStr = "";
          data.forEach((element, index) => {
               myStr += `<tr>
                                   <th scope="row">${index + 1}</th>
                                   <td>${element[0]}</td>
                                   <td>${element[1]}</td>
                                   <td><button class="btn btn-sm btn-primary" onclick="deleteItem(${index})" >Delete</button></td>
                              </tr>`;
          });
          tbodyId.innerHTML = myStr;
     }
     else {
          document.getElementsByClassName('todo')[0].style.display = 'none';
     }
}

addItem = () => {
     document.getElementsByClassName('todo')[0].style.display = 'block';
     let title = document.getElementById('title').value
     let desc = document.getElementById('description').value

     if (title == "") {
          title = "empty"
     }
     if (desc == "") {
          desc = "empty"
     }
     let data;
     if (localStorage.getItem('Items') == null) {
          data = [];
     }
     else {
          data = JSON.parse(localStorage.getItem('Items'));
     }
     data.push([title, desc]);
     localStorage.setItem('Items', JSON.stringify(data));

     display();


};

function deleteItem(index) {
     data = JSON.parse(localStorage.getItem('Items'));
     data.splice(index, 1);
     console.log(data);
     if (data.length == 0) {
          console.log('dsds');
          document.getElementsByClassName('todo')[0].style.display = 'none';
     }
     localStorage.setItem('Items', JSON.stringify(data));
     display();
}

function clearAll() {
     localStorage.clear();
     display();
}

let ts;
setInterval(() => {
     ts = new Date();
     date = ts.toLocaleDateString();
     time = ts.getHours() + ':' + ts.getMinutes() + ':' + ts.getSeconds() + ':' + ts.getMilliseconds();
     document.getElementById('time').innerHTML = time + ' on ' + date;
}, 1000)