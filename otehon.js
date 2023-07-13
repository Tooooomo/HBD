// 誕生日の日付を入力する
const bd = [2222, 7, 15]; //生まれた[年, 月, 日]を入力
const openAge = true; //年齢を表示したいならtrue, 隠したいならfalseを入力
const yourName = "とーも"; //"名前"を入力

// 今日の日付を取得する
const today = new Date();

// 年齢を計算する関数（引数に誕生日と現在の日付を受け取る）
const calcAge = (bd, today) => {
  const bdDate = new Date(bd[0], bd[1] - 1, bd[2]);
  const diff = today - bdDate; // ミリ秒単位で差分を計算
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); // 年単位で年齢を計算（うるう年も考慮）
  return age;
};

// 誕生日までの残り日数を計算する関数（引数に誕生日と現在の日付を受け取る）
const calcLeftDays = (bd, today) => {
  const nextBd = new Date(today.getFullYear(), bd[1] - 1, bd[2]); // 今年の誕生日
  if (today > nextBd) {
    // 誕生日が過ぎていたら、来年の誕生日にする
    nextBd.setFullYear(nextBd.getFullYear() + 1);
  }
  const diff = nextBd - today; // ミリ秒単位で差分を計算
  const leftDays = Math.ceil(diff / (1000 * 60 * 60 * 24)); // 日単位で残り日数を計算
  return leftDays;
};

// メッセージを作成する関数（引数に誕生日と現在の日付とオプションを受け取る）
const createMessage = (bd, today, openAge, yourName) => {
  let message;
  if (bd[1] === today.getMonth() + 1 && bd[2] === today.getDate()) {
    // 誕生日と今日の日付が一致する場合
    message = `今日は${yourName}さんの${
      openAge ? `${calcAge(bd, today)}歳の` : ""
    }誕生日です！おめでとう！`;
  } else {
    // 誕生日と今日の日付が一致しない場合
    message = `${yourName}さんの${
      openAge ? `${calcAge(bd, today) + 1}歳の` : ""
    }誕生日まであと${calcLeftDays(bd, today)}日です。`;
  }
  return message;
};

// メッセージを出力する
console.log(createMessage(bd, today, openAge, yourName));
