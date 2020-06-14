"use strict";

{
   //consoleの内容をまとめて表示します。
   const showlists = () => {
      console.log("===================");
      console.log("現在持っているタスク一覧");
      console.log("===================");
   }

   showlists();

   const content = "【内容】";
   const genre = "【ジャンル】";

   const originalTasks = { //変数に数字は使わないようにしましょう！！←修正しました
      0: `${content}机を片付ける、${genre}掃除`,
      1: `${content}牛乳を買う、${genre}買い物`,
      2: `${content}散歩する、${genre}運動`,
   };

   //定数originalTasksの内容(現在持っているタスク一覧)を1行ずつコンソールに表示させます。
   const showTasks = () => {
      Object.keys(originalTasks).forEach((task) => {
         console.log(`${task} : ${originalTasks[task]}`);
      });
   }

   showTasks();

   const promptTask = prompt("タスクを入力してください"); //*popup1
   const promptGenre = prompt("ジャンルを入力してください"); //*popup2 NEW
   alert("新しいタスクを追加しました");//*popup3

   originalTasks["3"] = `${content}${promptTask}${genre}${promptGenre}`;

   showlists();

   showTasks();

   prompt("「確認、追加、削除、修了」のいずれかを入力してください"); //*popup4
}

