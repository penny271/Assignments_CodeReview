"use strict";

{
  function lists() {
    console.log("===================");
    console.log("現在持っているタスク一覧");
    console.log("===================");
  }

  lists();

  const tasks1 = ["掃除", "買い物", "散歩"];

  function adds() {
    tasks1.forEach((task, index) => {
      console.log(`${index}: ${task}`);
    });
  }

  adds();

  const question = prompt("タスクを入力してください");
  alert("新しいタスクを追加しました");

  tasks1.push(question); //ep タスク１の内容が上書きされる！

  lists();

  adds();

  prompt("「確認、追加、削除、修了」のいずれかを入力してください");
}
