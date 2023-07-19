// เก็บรายการงานในอาร์เรย์
let tasks = [];

function addTask() {
  // รับข้อมูลจากผู้ใช้
  const taskInput = document.getElementById("inputTask");
  const task = taskInput.value;

  // เพิ่มงานลงในรายการ
  tasks.push(task);

  // เรียกฟังก์ชันแสดงรายการ
  displayTasks();

  // เคลียร์ช่องข้อมูล
  taskInput.value = "";
}

function displayTasks() {
  // ล้างรายการเก่า
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  // สร้างรายการใหม่
  tasks.forEach(function(task, index) {
    const li = document.createElement("li");
    li.innerText = task;

    // สร้างปุ่มลบรายการ
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function() {
      deleteTask(index);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

function deleteTask(index) {
  // ลบรายการที่เลือกออกจากอาร์เรย์
  tasks.splice(index, 1);

  // เรียกฟังก์ชันแสดงรายการใหม่
  displayTasks();
}