const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify는 object건 array건 간에 모두 string으로 만들어줌.
}

function deleteToDo(event) {
  // 사용자가 입력한 To Do list를 삭제시키는 함수
  const li = event.target.parentElement; // event.target은 어떠한 이벤트가 실행됐을때 적용되는 html의 element의 부모를 찾기(여기선 li)
  li.remove(); // list 삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  // 사용자가 입렵한 값(To DO List)를 html에 나오게 하는 함수
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text; //span에 newToDo Text추가
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); // .appendChild는 항상 맨 뒤에 올 것!
  li.appendChild(button); // li에 span, button 안에 추가
  toDoList.appendChild(li); // 위의 항목이 추가된 li를 ul id="toDoList" 안에 추가
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value; //input value를 newToDo 변수에 저장
  toDoInput.value = ""; // 문구 삭제(input칸에 남아있기때문에)
  const newToDoObject = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObject); // toDos array에 newToDo 값 보내기
  paintToDo(newToDoObject); // 사이트에 사용자가 입력한 값(To Do List) 표시해주는 함수 paintTodo 실행
  saveToDos(); // 새로고침하면 사용자의 To Do list가 삭제되기때문에 localStorage에 저장하기
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // JSON.parse = 문자화된 항목들은 array안에 정렬시켜준다.
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  // .forEach = 각각의 array 항목을 각각의 funtion으로 실행시켜준다.
  // item = array 항목들
  // 반복적용 시킬 함수(인수=item)를 만들어서 소괄호 안에 넣어줘도된다.(지금 적용한건 arrow 함수이다.)
}
