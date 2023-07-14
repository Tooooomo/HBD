// 情報を入力
const bd = [2023, 7, 15]; // 生まれた[年, 月, 日]を入力
const openAge = true; // 年齢を表示したいならtrue, 隠したいならfalseを入力
const yourName = "とーも"; // "名前"を入力

// 今日の日付を取得
const today = new Date();

// 年齢を計算する関数
const calcAge = (bd, today) => {
  const bdDate = new Date(bd[0], bd[1] - 1, bd[2]);
  const age = Math.floor((today - bdDate) / (1000 * 60 * 60 * 24 * 365.25));
  return age;
};

// 誕生日までの残り日数を計算する関数
const calcLeftDays = (bd, today) => {
  const nextBd = new Date(bd[0] + calcAge(bd, today) + 1, bd[1] - 1, bd[2]);
  const leftDays = Math.ceil(
    (nextBd.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
  return leftDays;
};

// 誕生日かどうかを判断する関数
const judge = (bd, today, openAge, yourName) => {
  let result;
  if (bd[1] === today.getMonth() + 1 && bd[2] === today.getDate()) {
    result = `今日は${yourName}さんの${
      openAge ? `${calcAge(bd, today)}歳の` : ""
    }誕生日です！おめでとう！`;
  } else {
    result = `${yourName}さんの${
      openAge ? `${calcAge(bd, today) + 1}歳の` : ""
    }誕生日まであと${calcLeftDays(bd, today)}日です。`;
  }
  return result;
};

// 結果を出力
console.log(judge(bd, today, openAge, yourName));
