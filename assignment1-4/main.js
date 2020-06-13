"use strict";

{
  function lists() {
    console.log("===================");
    console.log("現在持っているタスク一覧");
    console.log("===================");
  }

   lists();

   const content = "【内容】";
   const genre = "【ジャンル】";

   const tasks1 = {
     0: `${content}机を片付ける、${genre}掃除`,
     1: `${content}牛乳を買う、${genre}買い物`,
     2: `${content}散歩する、${genre}運動`,
   };

   function adds() {
      Object.keys(tasks1).forEach((task) => {
         console.log(`${task} : ${tasks1[task]}`); 
      });
   }

   adds();

  const question1 = prompt("タスクを入力してください");//*popup1
  const question2 = prompt("ジャンルを入力してください");//*popup2 NEW
  alert("新しいタスクを追加しました");//*popup3

   console.log(tasks1);

  lists();

  adds();

  prompt("「確認、追加、削除、修了」のいずれかを入力してください");//*popup4
}
